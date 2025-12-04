// ================================================================================================
// entrypoint: segment-tree
// セグメント木を提供します。
// 長さNの配列に対して、要素の1点更新と区間のモノイド積の計算をO(log N)で行うことができます。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

class SegmentTree<T> {
    /** 単位元 */
    #e: T;
    /**モノイド演算を表す関数 */
    #op: (a: T, b: T) => T;
    /** セグメント木のサイズ */
    #size: number;
    /** セグメント木のコンストラクタに渡されたサイズ */
    #originalSize: number;
    /** セグメント木の内部配列 */
    #tree: T[];

    /**
     * セグメント木の新しいインスタンスを生成します。
     * @param e - 単位元
     * @param op - モノイド演算を表す関数
     * @param size - セグメント木のサイズ
     * @param [initialValues] - 初期値の配列(sizeに満たない分はeで埋められます)
     */
    constructor(
        e: T,
        op: (a: T, b: T) => T,
        size: number,
        initialValues?: T[],
    ) {
        // eとopはそのまま保存
        this.#e = e;
        this.#op = op;
        this.#originalSize = size;
        // sizeは与えられたsize以上の最小の2冪に設定
        this.#size = 2 ** Math.ceil(Math.log2(size));
        // data配列を初期化
        this.#tree = new Array(this.#size * 2).fill(e);
        // initialValuesが与えられた場合、data配列の後半にセット
        if (initialValues) {
            for (let i = 0; i < initialValues.length; i++) {
                this.#tree[this.#size + i] = initialValues[i];
            }
            // 前半を構築 (initialValuesが与えられなかった場合はeのままなので飛ばされる)
            for (let i = this.#size - 1; i > 0; i--) {
                this.#tree[i] = this.#op(
                    this.#tree[i * 2],
                    this.#tree[i * 2 + 1],
                );
            }
        }
    }
    /**
     * インデックス`index`の要素を`value`に更新します。
     * @param index - 更新する要素のインデックス (0-based)
     * @param value - 新しい値
     */
    set(index: number, value: T): void {
        // 葉ノードを更新
        let pos = index + this.#size;
        this.#tree[pos] = value;
        // 親ノードに駆け上がりながら値の更新を繰り返す
        while (pos > 1) {
            pos = Math.floor(pos / 2);
            this.#tree[pos] = this.#op(
                this.#tree[pos * 2],
                this.#tree[pos * 2 + 1],
            );
        }
    }
    /**
     * インデックス`index`の要素を返します。
     * @param index - 取得する要素のインデックス (0-based)
     * @returns 指定されたインデックスの要素
     */
    get(index: number): T {
        return this.#tree[index + this.#size];
    }
    /**
     * 半開区間[left, right)のモノイド積を計算して返します。
     * @param left - 区間の左端 (0-based, 含む)
     * @param right - 区間の右端 (0-based, 含まない)
     * @returns 指定された区間のモノイド積
     */
    query(left: number, right: number): T {
        let sum_left = this.#e;
        let sum_right = this.#e;
        let l = left + this.#size;
        let r = right + this.#size;
        while (l < r) {
            if (l % 2 === 1) {
                sum_left = this.#op(sum_left, this.#tree[l]);
                l++;
            }
            if (r % 2 === 1) {
                r--;
                sum_right = this.#op(this.#tree[r], sum_right);
            }
            l = Math.floor(l / 2);
            r = Math.floor(r / 2);
        }
        return this.#op(sum_left, sum_right);
    }
    /**
     * 半開区間[0, n)のモノイド積(すなわち、全要素のモノイド積)を返します。
     * @returns 全要素のモノイド積
     */
    queryAll(): T {
        return this.#tree[1];
    }
    /**
     * セグメント木のサイズを返します。
     * @returns セグメント木のサイズ
     */
    get size(): number {
        return this.#originalSize;
    }
    /**
     * 半開区間[l, r)のモノイド積について、条件fnを満たす最大のrを返します。
     * - fn(e)はtrueである必要があり、これを満たさない場合は例外がスローされます。
     * - lは0以上size以下である必要があり、これを満たさない場合は例外がスローされます。
     * @param l - 区間の左端 (0-based, 含む)
     * @param fn - 条件を表す関数
     * @returns 条件fnを満たす最大のr
     */
    maxRight(l: number, fn: (product: T) => boolean): number {
        if (l < 0 || l > this.#originalSize) {
            throw new RangeError("Index out of bounds");
        }
        if (!fn(this.#e)) {
            throw new Error("fn(e) must be true");
        }
        if (l === this.#originalSize) {
            return this.#originalSize;
        }
        let pos = l + this.#size;
        let product = this.#e;
        do {
            while (pos % 2 === 0) pos >>= 1;
            // 今のブロック (tree[pos]) を足すと条件を満たさなくなるかチェックする
            if (!fn(this.#op(product, this.#tree[pos]))) {
                // 満たさない -> 境界はこのブロックの範囲にある -> 葉に降りていく
                while (pos < this.#size) {
                    // 左の子に降りる
                    pos = pos * 2;
                    // 左の子を足しても大丈夫なら、左の子を採用して右の子に進む
                    if (fn(this.#op(product, this.#tree[pos]))) {
                        product = this.#op(product, this.#tree[pos]);
                        pos++; // 右の子へ
                    }
                }
                // 葉ノードに到達したら、そのインデックスを返す
                return pos - this.#size;
            }
            // 今のブロックを足しても条件を満たすなら、足して次へ
            product = this.#op(product, this.#tree[pos]);
            pos++;
        } while ((pos & -pos) !== pos); // posが2冪のときまで繰り返す
        // 最後まで行ったらサイズを返す
        return this.#originalSize;
    }
    /**
     * 半開区間[l, r)のモノイド積について、条件fnを満たす最小のlを返します。
     * - fn(e)はtrueである必要があり、これを満たさない場合は例外がスローされます。
     * - rは0以上size以下である必要があり、これを満たさない場合は例外がスローされます。
     * @param r - 区間の右端 (0-based, 含まない)
     * @param fn - 条件を表す関数
     * @returns 条件fnを満たす最小のl
     */
    minLeft(r: number, fn: (product: T) => boolean): number {
        if (r < 0 || r > this.#originalSize) {
            throw new RangeError("Index out of bounds");
        }
        if (!fn(this.#e)) {
            throw new Error("fn(e) must be true");
        }
        if (r === 0) {
            return 0;
        }
        let pos = r + this.#size;
        let product = this.#e;

        do {
            pos--; // 半開区間なので左にずらす
            // 登れるだけ親に登る
            while (pos > 1 && (pos % 2 === 1)) {
                pos >>= 1;
            }
            // 今のブロック (tree[pos]) を足すと条件を満たさなくなるかチェックする
            if (!fn(this.#op(this.#tree[pos], product))) {
                // 満たさない -> 境界はこのブロックの範囲にある -> 葉に降りていく
                while (pos < this.#size) {
                    pos = pos * 2 + 1; // 右の子に降りる
                    // 右の子なら結合しても大丈夫か？をチェック
                    if (fn(this.#op(this.#tree[pos], product))) {
                        // 大丈夫なら結合して、左の子へ (さらに左を探る)
                        product = this.#op(this.#tree[pos], product);
                        pos--; // 左の子へ
                    }
                }
                // 葉ノードに到達したら、そのインデックスを返す
                return pos + 1 - this.#size;
            }
            // 今のブロックを足しても条件を満たすなら、足して次へ
            product = this.#op(this.#tree[pos], product);
        } while ((pos & -pos) !== pos); // posが2冪のときまで繰り返す
        // 最後まで行ったら0を返す
        return 0;
    }
}

// ================================================================
// エクスポート
// ================================================================

export { SegmentTree };
