/**
 * - 要素の集合を管理し、要素が同じ集合に属しているかの判定や、異なる集合の結合を効率的に行うデータ構造を提供します。
 * - 経路圧縮とUnion by Sizeによる最適化が施されています。
 * @module union-find
 */
/* @ts-self-types="./union-find.d.ts" */
// @ts-check

/**
 * Union-Find (Disjoint Set Union) データ構造
 * @example
 * ```js
 * import { UnionFind } from 'union-find';
 * // インスタンスを作成
 * const union_find = new UnionFind(10);
 * // 要素を統合
 * union_find.union(0, 1);
 * union_find.union(1, 2);
 * // 結合判定
 * console.log(union_find.connected(0, 2)); // Expected Log Output : <boolean> true
 * console.log(union_find.connected(0, 3)); // Expected Log Output : <boolean> false
 * // 連結成分の数を取得
 * console.log(union_find.componentCount); // Expected Log Output : <number> 8
 * // 要素の代表元を取得
 * console.log(union_find.find(0) === union_find.find(2)); // Expected Log Output : <boolean> true
 */
class UnionFind {
    /** @type {number[]} - #parents[i]は要素iの親のインデックス */
    #parents;
    /** @type {number[]} - #size[i]は要素iの属する木のサイズ (※根の要素でのみ有効) */
    #size;
    /** @type {number} - 現在の連結成分の数 */
    #components;

    /**
     * Union-Findのインスタンスを生成
     * @param {number} size - 要素の数
     */
    constructor(size) {
        if (!Number.isInteger(size) || size <= 0) {
            throw new Error('UnionFind: size must be a positive integer.');
        }
        this.#parents = [...Array(size).keys()];
        this.#size = Array(size).fill(1);
        this.#components = size;
    }
    /**
     * 要素`x`の属する木の根を返す
     * - 時間計算量: 償却O(α(N)), 最悪O(log(N)) (※αはアッカーマン関数の逆関数、Nは要素数)
     * @param {number} x - 要素のインデックス
     * @returns {number} - 根のインデックス
     */
    find(x) {
        if (this.#parents[x] === x) {
            return x;
        }
        // 親を再帰的に探索し、その過程で親を根に直接つなぎ変える（経路圧縮）
        const root = this.find(this.#parents[x]);
        this.#parents[x] = root;
        return root;
    }
    /**
     * 要素`x`と要素`y`の属する木を結合する
     * - 時間計算量: 償却O(α(N)), 最悪O(log(N)) (※αはアッカーマン関数の逆関数、Nは要素数)
     * @param {number} x - 要素のインデックス
     * @param {number} y - 要素のインデックス
     * @returns {boolean} - 結合が成功した場合はtrue、もとから既に同じ木に属していた場合はfalse
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            return false;
        } else {
            // サイズが小さい木を大きい木にくっつける
            if (this.#size[rootX] < this.#size[rootY]) {
                this.#parents[rootX] = rootY;
                this.#size[rootY] += this.#size[rootX];
            } else {
                this.#parents[rootY] = rootX;
                this.#size[rootX] += this.#size[rootY];
            }
            // 連結成分の数を1減らす
            this.#components--;
            return true;
        }
    }
    /**
     * 要素`x`と要素`y`が同じ木に属しているかを判定する
     * - 時間計算量: 償却O(α(N)), 最悪O(log(N)) (※αはアッカーマン関数の逆関数、Nは要素数)
     * @param {number} x - 要素のインデックス
     * @param {number} y - 要素のインデックス
     * @returns {boolean} - 同じ木に属している場合はtrue、そうでない場合はfalse
     */
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
    /**
     * 現在の連結成分の数を返す
     * - 時間計算量: 最悪O(1)
     * @returns {number} - 連結成分の数
     */
    get componentCount() {
        return this.#components;
    }
};

export { UnionFind };
