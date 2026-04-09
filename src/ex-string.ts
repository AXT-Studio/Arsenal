// ================================================================================================
// entrypoint: ex-string
// 文字列操作を行うためのユーティリティクラスです。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * 文字列操作を行うためのユーティリティクラス
 */
class ExString {
    /**
     * 指定された文字列をランレングス圧縮します。
     * @param str - 圧縮する文字列
     * @returns ランレングス圧縮された結果
     */
    static runLengthEncode(str: string): { char: string; count: number }[] {
        if (typeof str !== "string") {
            throw new TypeError("引数strは文字列である必要があります。");
        }
        if (str.length === 0) {
            return [];
        }
        const result = [{ char: str[0], count: 1 }];
        for (let i = 1; i < str.length; i++) {
            const currentChar = str[i];
            const lastEntry = result[result.length - 1];
            if (currentChar === lastEntry.char) {
                lastEntry.count++;
            } else {
                result.push({ char: currentChar, count: 1 });
            }
        }
        return result;
    }
    /**
     * 指定された文字列のZ Arrayを構築します。
     * @param s - Z Arrayを構築する文字列
     * @returns Z Array (「文字列sの各文字から始まる接尾辞と、文字列s自体の、最長共通接頭辞の長さ」をまとめた配列)
     */
    static getZArray(s: string): number[] {
        const z = new Array(s.length).fill(0);
        z[0] = s.length;
        // 今わかっている中で、一番右に伸びている s[0...r-l) と s[l..r) が完全一致する区間 (z-box)
        let l = 0, r = 0;
        for (let i = 1; i < s.length; i++) {
            // iがz-boxの範囲内の場合: Math.min(prefix側のZ[i-l], z-boxの末端までの文字数)以上なのは確定する
            if (i < r) {
                z[i] = Math.min(z[i - l], r - i)
            }
            // 伸ばせるだけ右に伸ばす
            while (z[i] + i < s.length && s[z[i]] === s[i + z[i]]) z[i]++;
            // 右端を更新した場合、l, rを今の情報に更新
            if (r < i + z[i]) {
                l = i;
                r = i + z[i];
            }
        }
        return z;
    }
    /**
     * 指定された文字列のSuffix Arrayを構築します。
     * @param s - Suffix Arrayを構築する文字列
     * @returns Suffix Array (「文字列sの接尾辞を辞書順に並べたときの、各接尾辞の開始位置」をまとめた配列)
     */
    static getSuffixArray(s: string | number[]): number[] {
        // stringならnumber[]に変換して末尾に番兵を追加して渡し直す
        if (typeof s === "string") {
            const sa = ExString.getSuffixArray([...[...s].map(n => n.codePointAt(0)!), 0]);
            sa.shift(); // 番兵の分を削除
            return sa;
        }
        const n = s.length;
        // S型・L型の分類をする
        const isS = new Array(n).fill(false);
        isS[n - 1] = true;
        for (let i = n - 2; i >= 0; i--) {
            if (s[i] > s[i + 1]) {
                isS[i] = false; // L型
            } else if (s[i] < s[i + 1]) {
                isS[i] = true;  // S型
            } else {
                isS[i] = isS[i + 1];
            }
        }
        // LMS(直前がLのS型のindex)を列挙する
        const lmsIndices: number[] = [];
        for (let i = 1; i < n; i++) {
            if (isS[i] && !isS[i - 1]) lmsIndices.push(i);
        }
        const isLMS = new Array(n).fill(false);
        for (let i = 0; i < lmsIndices.length; i++) {
            isLMS[lmsIndices[i]] = true;
        }
        // S内に登場する数値の最大値を確認する
        const S_max = s.reduce((a, c) => Math.max(a, c));
        // 0以上S以下の数値が、それぞれ何回出てくるかカウントする
        const countInS = new Array(S_max + 1).fill(0);
        for (let i = 0; i < n; i++) countInS[s[i]]++;
        // カウントの累積和を取る
        const scan = [countInS[0]];
        for (let i = 1; i <= S_max; i++) scan[i] = scan[i - 1] + countInS[i];
        // 各数字に対応するバケツ領域の先頭と末尾のindexを取得
        const heads_1 = [0, ...scan.slice(0, -1)];
        const tails_1a = scan.map(n => n - 1);
        // Induced Sorting (1回目)
        const sa = new Array(n).fill(-1);
        // 1. LMSを仮置きする (先頭文字のバケツ領域の末尾)
        for (let i = 0; i < lmsIndices.length; i++) {
            const lmsIndex = lmsIndices[i];
            const char = s[lmsIndex];
            sa[tails_1a[char]] = lmsIndex;
            tails_1a[char]--;
        }
        // 2. L型を埋める (文字のバケツ領域の先頭)
        for (let i = 0; i < n; i++) {
            if (sa[i] === -1) continue;
            const v = sa[i];
            if (v > 0 && !isS[v - 1]) {
                sa[heads_1[s[v - 1]]] = v - 1;
                heads_1[s[v - 1]]++;
            }
        }
        // 3. S型を埋める (文字のバケツ領域の末尾)
        const tails_1b = scan.map(n => n - 1);
        for (let i = n - 1; i >= 0; i--) {
            if (sa[i] === -1) continue;
            const v = sa[i];
            if (v > 0 && isS[v - 1]) {
                sa[tails_1b[s[v - 1]]] = v - 1;
                tails_1b[s[v - 1]]--;
            }
        }
        // saからLMSを指す数値だけ抜き出し、もとの文字列のindexに変えて並べる
        /** 辞書順にソートされたLMSのインデックス */
        const sortedLMS = [];
        for (let i = 0; i < n; i++) {
            const v = sa[i];
            if (v > 0 && isS[v] && !isS[v - 1]) sortedLMS.push(v);
        }
        // LMS部分文字列に対して名前をつけていく
        const names = new Array(n).fill(-1);
        let nameCounter = 0;
        names[sortedLMS[0]] = nameCounter;
        for (let i = 1; i < sortedLMS.length; i++) {
            const prevLMS = sortedLMS[i - 1];
            const currLMS = sortedLMS[i];
            for (let d = 0; true; d++) {
                // 文字そのものが違えば不一致
                if (s[prevLMS + d] !== s[currLMS + d]) {
                    names[currLMS] = ++nameCounter;
                    break;
                }
                // どちらかが次のLMSに到達したかどうかの判定
                if (d > 0) {
                    const prevIsEnd = isLMS[prevLMS + d];
                    const currIsEnd = isLMS[currLMS + d];
                    // 両方trueなら一致
                    if (prevIsEnd && currIsEnd) {
                        names[currLMS] = nameCounter;
                        break;
                    }
                    // 片方がtrueなら不一致
                    if (prevIsEnd || currIsEnd) {
                        names[currLMS] = ++nameCounter;
                        break;
                    }
                }
            }
        }
        // LMS部分文字列のランクを元の文字列における出現順に並べた配列を作る
        const S1 = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i] !== -1) S1.push(names[i]);
        }
        // S1のSuffix Arrayを取得する
        const SA1 = [];
        if (nameCounter + 1 === S1.length) {
            for (let i = 0; i < S1.length; i++) {
                SA1[S1[i]] = i;
            }
        } else {
            const recursion = ExString.getSuffixArray(S1);
            recursion.forEach(element => SA1.push(element));
        }
        // Induced Sorting (2回目)
        const heads_2 = [0, ...scan.slice(0, -1)];
        const tails_2a = scan.map(n => n - 1);
        const tails_2b = scan.map(n => n - 1);
        const answer = new Array(n).fill(-1);
        // 1. LMSを埋める (末尾)
        for (let i = SA1.length - 1; i >= 0; i--) {
            const lmsIndex = lmsIndices[SA1[i]];
            const char = s[lmsIndex];
            answer[tails_2a[char]] = lmsIndex;
            tails_2a[char]--;
        }
        // 2. L型を埋める (先頭)
        for (let i = 0; i < n; i++) {
            if (answer[i] === -1) continue;
            const v = answer[i];
            if (v > 0 && !isS[v - 1]) {
                answer[heads_2[s[v - 1]]] = v - 1;
                heads_2[s[v - 1]]++;
            }
        }
        // 3. S型を埋める (末尾)
        for (let i = n - 1; i >= 0; i--) {
            if (answer[i] === -1) continue;
            const v = answer[i];
            if (v > 0 && isS[v - 1]) {
                answer[tails_2b[s[v - 1]]] = v - 1;
                tails_2b[s[v - 1]]--;
            }
        }
        return answer;
    }
    /**
     * 指定した文字列のLCP Arrayを構築します。
     * (入力としてSuffix Arrayを要求します。)
     * @param s - LCP Arrayを構築する文字列
     * @param sa - 文字列sのSuffix Array
     * @returns LCP Array (「辞書順で隣り合う接尾辞同士の、最長共通接頭辞の長さ」をまとめた配列)
     */
    static getLCPArray(s: string, sa: number[]): number[] {
        const n = s.length;
        // 1. rank配列の構築
        const rank = new Array(n);
        for (let i = 0; i < n; i++) {
            rank[sa[i]] = i;
        }

        // LCP配列の長さは要素数-1になる
        const lcp = new Array(n - 1).fill(0);
        let h = 0;

        // 2. 元の文字列の順番で処理していく
        for (let i = 0; i < n; i++) {
            // 先頭の要素は、比較する「1つ上の要素」がないためスキップ
            if (rank[i] === 0) continue;
            // 3. Suffix Array上で1つ前にある接尾辞の、元の文字列での開始位置
            const j = sa[rank[i] - 1];
            // 4. 前回の共通部分の長さ h の位置から比較をスタート
            while (i + h < n && j + h < n && s[i + h] === s[j + h]) h++;
            // 5. 計算したLCPの長さを記録
            lcp[rank[i] - 1] = h;
            // 6. 次の接尾辞に進むため、hを1だけ減らす（0未満にはならない）
            if (h > 0) h--;
        }

        return lcp;
    }
}

// ================================================================
// エクスポート
// ================================================================

export { ExString };
