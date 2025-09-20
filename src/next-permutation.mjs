/**
 * - 配列の次の順列を生成するジェネレーター関数を提供します。
 * - C++のSTLにある`next_permutation`関数にインスパイアされています。
 * @module next-permutation
 */
/* @ts-self-types="./declares/next-permutation.d.ts" */
// @ts-check

/**
 * 呼び出されるたびに配列の次の順列を返すジェネレーター関数。`for...of`構文で回すことで順列全列挙が可能。
 * - 時間計算量: O(N! * N) (※Nは配列の要素数。各順列生成がO(N)、順列の総数がN!)
 * @generator
 * @template {any} T
 * @param {T[]} arr - 配列
 * @yields {T[]} - 配列の各要素を並び替えたもの。呼び出されるたびに異なる並び順を辞書順に返し、return(ジェネレーター終了)までにすべての並び方を返します。
 */
const next_permutation = function* (arr) {
    // 最初の順列から開始するため、入力配列のソート済みのコピーを作成する。
    const a = [...arr].sort((x, y) => {
        if (typeof x === 'string' && typeof y === 'string') {
            return x.localeCompare(y);
        }
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });

    while (true) {
        yield [...a]; // 現在の順列のコピーを返す（yield）。

        // 1. a[i] < a[i+1] を満たす最大のインデックス i を求める
        let i = a.length - 2;
        while (i >= 0 && a[i] >= a[i + 1]) {
            i--;
        }

        // そのようなインデックスが存在しない場合、現在の順列は最後の順列なので終了する。
        if (i < 0) {
            return;
        }

        // 2. a[i] < a[j] を満たす、i より大きい最大のインデックス j を求める
        let j = a.length - 1;
        while (a[i] >= a[j]) {
            j--;
        }

        // 3. a[i] と a[j] を交換する
        [a[i], a[j]] = [a[j], a[i]];

        // 4. a[i+1] から末尾までの部分列を反転する
        let l = i + 1;
        let r = a.length - 1;
        while (l < r) {
            [a[l], a[r]] = [a[r], a[l]];
            l++;
            r--;
        }
    }
};

export { next_permutation };
