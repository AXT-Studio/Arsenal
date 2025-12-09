// ================================================================================================
// entrypoint: lazy-segment-tree
// 遅延評価セグメント木を提供します。
// 長さNの配列に対して、区間全要素への作用と区間のモノイド積の計算をO(log N)で行えます。
// ただし、以下が定義できることが求められます。
// - S: 配列の要素の型
// - 区間総積について、以下が定義できること
//     - op: 2つのSのモノイド積を求める関数 (※結合律の成立と単位元の存在が必要)
//     - e: S型 opの単位元
// - 区間作用について、以下が定義できること
//     - F: 作用を行う関数がパラメーターとして求める情報の型
//     - mapping: 要素(S)と作用のパラメーター(F)を受け取り、作用適用後の要素(S)を返す関数
//     - id: F型 mappingに渡すと要素を変更しないような作用のパラメーター
//     - composition: 2つの作用のパラメーター(F)を1つのFに合成する関数
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * 遅延評価セグメント木 (Lazy Segment Tree)
 * 長さNの配列に対して、区間全要素への作用と区間のモノイド積の計算をそれぞれO(log N)で行えます。
 * ただし、以下を定義できることが求められます。
 * - S: 配列の要素の型
 * - 区間総積について、以下が定義できること
 *     - op: 2つのSのモノイド積を求める関数 (※結合律の成立と単位元の存在が必要)
 *     - e: S型 opの単位元
 * - 区間作用について、以下が定義できること
 *     - F: 作用を行う関数がパラメーターとして求める情報の型
 *     - mapping: 要素(S)と作用のパラメーター(F)を受け取り、作用適用後の要素(S)を返す関数
 *     - id: F型 mappingに渡すと要素を変更しないような作用のパラメーター
 *     - composition: 2つの作用のパラメーター(F)を1つのFに合成する関数
 */
class LazySegmentTree<S, F> {
    /** 単位元 */
    #e: S;
    /** モノイド演算を表す関数 */
    #op: (a: S, b: S) => S;
    /** 作用を表す関数 */
    #mapping: (s: S, f: F) => S;
    /** 作用の単位元 */
    #id: F;
    /** 作用の合成を表す関数 */
    #composition: (newF: F, oldF: F) => F;
    /** セグメント木の高さ */
    #log: number;
    /** セグメント木のサイズ */
    #size: number;
    /** セグメント木のコンストラクタに渡されたサイズ */
    #originalSize: number;
    /** セグメント木の内部配列 */
    #data: S[];
    /** 遅延配列 */
    #lazy: F[];

    /**
     * 遅延評価セグメント木の新しいインスタンスを生成します。
     * @param e - [区間総積] モノイド演算の単位元
     * @param op - [区間総積] モノイド演算を表す関数
     * @param mapping - [区間作用] 作用を行う関数
     * @param id - [区間作用] 作用において「何もしない」ことを表す単位元
     * @param composition - [区間作用] 2つの作用を1つにまとめる関数
     * @param size - セグメント木のサイズ
     * @param [initialValues] - 初期値の配列(未指定時およびsizeに満たない分はeで埋められます)
     */
    constructor(
        e: S,
        op: (a: S, b: S) => S,
        mapping: (s: S, f: F) => S,
        id: F,
        composition: (newF: F, oldF: F) => F,
        size: number,
        initialValues?: S[],
    ) {
        // e, op, mapping, id, compositionはそのまま保存
        this.#e = e;
        this.#op = op;
        this.#mapping = mapping;
        this.#id = id;
        this.#composition = composition;
        this.#originalSize = size;
        // sizeは与えられたsize以上の最小の2冪に設定
        this.#log = Math.ceil(Math.log2(size));
        this.#size = 2 ** this.#log;
        // lazyを初期化
        this.#lazy = new Array(this.#size * 2).fill(id);
        // data配列を初期化
        this.#data = new Array(this.#size * 2).fill(e);
        // initialValuesが与えられた場合、data配列の後半にセット
        if (initialValues) {
            for (let i = 0; i < initialValues.length; i++) {
                this.#data[this.#size + i] = initialValues[i];
            }
            // 前半を構築 (initialValuesが与えられなかった場合はeのままなので飛ばされる)
            for (let i = this.#size - 1; i > 0; i--) {
                this.#data[i] = this.#op(
                    this.#data[i * 2],
                    this.#data[i * 2 + 1],
                );
            }
        }
    }
    /**
     * `tree`の`index`番目の要素に、操作`f`を作用させます。
     * @param index - 要素のインデックス (0-based)
     * @param f - 作用
     * @private
     */
    #all_apply(index: number, f: F): void {
        this.#data[index] = this.#mapping(this.#data[index], f);
        if (index < this.#size) {
            this.#lazy[index] = this.#composition(f, this.#lazy[index]);
        }
    }
    /**
     * lazyの`index`番目に格納されている遅延タグを子ノードに伝播させ、lazy[index]を初期化します。
     * @param index - ノードのインデックス
     * @private
     */
    #push(index: number): void {
        const l = index * 2;
        const r = index * 2 + 1;
        // lに伝播
        this.#all_apply(l, this.#lazy[index]);
        // rに伝播
        this.#all_apply(r, this.#lazy[index]);
        // lazy[index]を初期化
        this.#lazy[index] = this.#id;
    }
    /**
     * treeの`index`番目のノードを、treeの2つの子ノードから計算し更新します。
     * @param index - ノードのインデックス
     * @private
     */
    #update(index: number): void {
        this.#data[index] = this.#op(
            this.#data[index * 2],
            this.#data[index * 2 + 1],
        );
    }
    /**
     * 範囲[l, r)と共通部分を持つが[l, r)に収まっていないノードについて、
     * 遅延タグを葉まで伝播させます。
     * @param l - 区間の左端 (0-based, 含む)
     * @param r - 区間の右端 (0-based, 含まない)
     * @private
     */
    #pushToLeaves(l: number, r: number): void {
        const left = l + this.#size;
        const right = r + this.#size;
        // 木の高さから1までループを回せばよい
        for (let i = this.#log; i > 0; i--) {
            // left側のノードを伝播
            if (((left >> i) << i) !== left) {
                const leftNode = left >> i;
                this.#push(leftNode);
            }
            // right側のノードを伝播
            if (((right >> i) << i) !== right) {
                const rightNode = (right - 1) >> i;
                this.#push(rightNode);
            }
        }
    }
    /**
     * 範囲[l, r)と共通部分を持つが[l, r)に収まっていないノードについて、
     * 変更されたtreeの子ノードの情報をもとに親ノードの値を(根まで)再計算します。
     * @param l - 区間の左端 (0-based, 含む)
     * @param r - 区間の右端 (0-based, 含まない)
     * @private
     */
    #updateFromLeaves(l: number, r: number): void {
        const left = l + this.#size;
        const right = r + this.#size;
        for (let i = 1; i <= this.#log; i++) {
            // left側のノードを更新
            if (((left >> i) << i) !== left) {
                const leftNode = left >> i;
                this.#update(leftNode);
            }
            // right側のノードを更新
            if (((right >> i) << i) !== right) {
                const rightNode = (right - 1) >> i;
                this.#update(rightNode);
            }
        }
    }
    /**
     * [l, r)の区間に作用fを作用させます。
     * @param l - 区間の左端 (0-based, 含む)
     * @param r - 区間の右端 (0-based, 含まない)
     * @param f - 作用
     */
    apply(l: number, r: number, f: F): void {
        // lとrに対応する葉ノードの位置を求める
        let left = l + this.#size;
        let right = r + this.#size;
        // 1. 前処理: 範囲に関係する部分の遅延をすべて出し切る
        this.#pushToLeaves(l, r);
        // 2. 区間[l, r)に作用fを作用させる
        while (left < right) {
            if (left % 2 === 1) {
                this.#all_apply(left, f);
                left++;
            }
            if (right % 2 === 1) {
                right--;
                this.#all_apply(right, f);
            }
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
        }
        // 3. 後処理: 変更があった部分の親ノードを再計算する
        this.#updateFromLeaves(l, r);
    }
    /**
     * 半開区間[l, r)のモノイド積を計算して返します。
     * @param l - 区間の左端 (0-based, 含む)
     * @param r - 区間の右端 (0-based, 含まない)
     * @returns 指定された区間のモノイド積
     */
    query(l: number, r: number): S {
        // lとrに対応する葉ノードの位置を求める
        let left = l + this.#size;
        let right = r + this.#size;
        // 1. 前処理: 遅延させていたタグをすべて計算する
        this.#pushToLeaves(l, r);
        // 2. 区間[l, r)のモノイド積を計算する
        let res_left = this.#e;
        let res_right = this.#e;
        while (left < right) {
            if (left % 2 === 1) {
                res_left = this.#op(res_left, this.#data[left]);
                left++;
            }
            if (right % 2 === 1) {
                right--;
                res_right = this.#op(this.#data[right], res_right);
            }
            left = Math.floor(left / 2);
            right = Math.floor(right / 2);
        }
        // 3. 結果を返す
        return this.#op(res_left, res_right);
    }
    /**
     * 半開区間[l, r)のモノイド積で、lを固定したときに条件fnを満たす最大のrを返します。
     * - fn(e)はtrueを返す必要があり、これを満たさない場合は例外がスローされます。
     * - lは0以上size以下である必要があり、これを満たさない場合は例外がスローされます。
     * @param l - 区間の左端 (0-based, 含む)
     * @param fn - 条件を表す関数
     * @returns 条件を満たす最大のr
     */
    maxRight(l: number, fn: (s: S) => boolean): number {
        // fn(e)がtrueであることを確認
        if (!fn(this.#e)) {
            throw new Error("fn(e) must be true");
        }
        // lの範囲チェック
        if (l < 0 || l > this.#originalSize) {
            throw new Error("l must be in range [0, size]");
        }
        // lがsizeと等しい場合、sizeを返す
        if (l === this.#originalSize) {
            return this.#originalSize;
        }
        // lに対応する葉ノードの位置を求める
        const left = l + this.#size;
        // 前処理: l側の遅延させていたタグは先にすべて計算しておく
        this.#pushToLeaves(l, l + 1);
        // モノイド積の初期値
        let product = this.#e;
        // maxRightの探索
        let pos = left;
        do {
            // posが右の子ノードである場合、親ノードに移動
            while (pos % 2 === 0) pos = Math.floor(pos / 2);
            // 今のブロック(tree[pos])を足すと条件を満たさなくなるかチェックする
            if (!fn(this.#op(product, this.#data[pos]))) {
                // 満たさない -> 境界はこのブロックの範囲 -> 葉まで降りていく
                while (pos < this.#size) {
                    // 遅延タグを伝播させる
                    this.#push(pos);
                    // 左の子に降りる
                    pos = pos * 2;
                    // 今のブロックを足しても条件を満たすなら、足して右の子へ
                    if (fn(this.#op(product, this.#data[pos]))) {
                        product = this.#op(product, this.#data[pos]);
                        pos++;
                    }
                }
                // 葉ノードに到達したら、そのindexを結果として返す
                return pos - this.#size;
            }
            // 今のブロックを足しても条件を満たすなら、足して次へ
            product = this.#op(product, this.#data[pos]);
            pos++;
        } while ((pos & -pos) !== pos); // posが2冪になるまで繰り返す
        // すべて足しても条件を満たす場合、sizeを返す
        return this.#originalSize;
    }
    /**
     * 半開区間[l, r)のモノイド積で、rを固定したときに条件fnを満たす最小のlを返します。
     * - fn(e)はtrueを返す必要があり、これを満たさない場合は例外がスローされます。
     * - rは0以上size以下である必要があり、これを満たさない場合は例外がスローされます。
     * @param r - 区間の右端 (0-based, 含まない)
     * @param fn - 条件を表す関数
     * @returns 条件を満たす最小のl
     */
    minLeft(r: number, fn: (s: S) => boolean): number {
        // fn(e)がtrueであることを確認
        if (!fn(this.#e)) {
            throw new Error("fn(e) must be true");
        }
        // rの範囲チェック
        if (r < 0 || r > this.#originalSize) {
            throw new Error("r must be in range [0, size]");
        }
        // rが0と等しい場合、0を返す
        if (r === 0) {
            return 0;
        }
        // rに対応する葉ノードの位置を求める
        const right = r + this.#size;
        // 前処理: r側の遅延させていたタグは先にすべて計算しておく
        this.#pushToLeaves(r - 1, r);
        // モノイド積の初期値
        let product = this.#e;
        // minLeftの探索
        let pos = right;
        do {
            // 半開区間なので、とりあえず一個左に移動
            pos--;
            // 登れるだけ親に登る
            while (pos > 1 && (pos % 2 === 1)) {
                pos = Math.floor(pos / 2);
            }
            // 今のブロック(tree[pos])を足すと条件を満たさなくなるかチェックする
            if (!fn(this.#op(this.#data[pos], product))) {
                // 満たさない -> 境界はこのブロックの範囲 -> 葉まで降りていく
                while (pos < this.#size) {
                    // 遅延タグを伝播させる
                    this.#push(pos);
                    // 右の子に降りる
                    pos = pos * 2 + 1;
                    // 右の子なら結合しても大丈夫か？をチェック
                    if (fn(this.#op(this.#data[pos], product))) {
                        // 大丈夫なら結合して、左の子へ (さらに左を探る)
                        product = this.#op(this.#data[pos], product);
                        pos--; // 左の子へ
                    }
                }
                // 葉ノードに到達したら、そのindexを結果として返す
                return pos + 1 - this.#size;
            }
            // 今のブロックを足しても条件を満たすなら、足して次へ
            product = this.#op(this.#data[pos], product);
        } while ((pos & -pos) !== pos); // posが2冪になるまで繰り返す
        // すべて足しても条件を満たす場合、0を返す
        return 0;
    }
    /**
     * 全区間のモノイド積を返します。
     * @returns 全区間のモノイド積
     */
    queryAll(): S {
        return this.#data[1];
    }
    /**
     * 指定されたindexに対してfを作用させます。
     * @param index - 要素のインデックス (0-based)
     * @param f - 作用
     */
    applyAt(index: number, f: F): void {
        this.apply(index, index + 1, f);
    }
    /**
     * index番目の要素を返します。
     * @param index - 要素のインデックス (0-based)
     * @returns 指定されたインデックスの要素
     */
    get(index: number): S {
        return this.query(index, index + 1);
    }
    /**
     * index番目の要素をvalueに更新(上書き)します。
     * @param index - 要素のインデックス (0-based)
     * @param value - 新しい値
     */
    set(index: number, value: S): void {
        // indexに対応する葉ノードの位置を求める
        const leaf = index + this.#size;
        // 前処理: 上にある遅延を邪魔にならないように全部落とす
        this.#pushToLeaves(index, index + 1);
        // 値を上書き (遅延タグlazyはここには溜まっていないはずなのでdataだけでOK)
        this.#data[leaf] = value;
        // 後処理: 親を再計算
        this.#updateFromLeaves(index, index + 1);
    }
    /**
     * セグメント木のサイズを返します。
     * @returns セグメント木のサイズ
     */
    get size(): number {
        return this.#originalSize;
    }
}

// ================================================================
// エクスポート
// ================================================================

export { LazySegmentTree };
