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
export class UnionFind {
    /**
     * Union-Findのインスタンスを生成
     * @param {number} size - 要素の数
     */
    constructor(size: number);
    /**
     * 要素`x`の属する木の根を返す
     * - 時間計算量: 償却O(α(N)), 最悪O(log(N)) (※αはアッカーマン関数の逆関数、Nは要素数)
     * @param {number} x - 要素のインデックス
     * @returns {number} - 根のインデックス
     */
    find(x: number): number;
    /**
     * 要素`x`と要素`y`の属する木を結合する
     * - 時間計算量: 償却O(α(N)), 最悪O(log(N)) (※αはアッカーマン関数の逆関数、Nは要素数)
     * @param {number} x - 要素のインデックス
     * @param {number} y - 要素のインデックス
     * @returns {boolean} - 結合が成功した場合はtrue、もとから既に同じ木に属していた場合はfalse
     */
    union(x: number, y: number): boolean;
    /**
     * 要素`x`と要素`y`が同じ木に属しているかを判定する
     * - 時間計算量: 償却O(α(N)), 最悪O(log(N)) (※αはアッカーマン関数の逆関数、Nは要素数)
     * @param {number} x - 要素のインデックス
     * @param {number} y - 要素のインデックス
     * @returns {boolean} - 同じ木に属している場合はtrue、そうでない場合はfalse
     */
    connected(x: number, y: number): boolean;
    /**
     * 現在の連結成分の数を返す
     * - 時間計算量: 最悪O(1)
     * @returns {number} - 連結成分の数
     */
    get componentCount(): number;
}
