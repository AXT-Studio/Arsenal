/**
 * Union-Find (Disjoint Set Union) データ構造
 */
export class UnionFind {
    /**
     * Union-Findのインスタンスを生成する
     */
    constructor(size: number);
    /**
     * 要素`x`の属する木の根を返す
     */
    find(x: number): number;
    /**
     * 要素`x`と要素`y`の属する木を結合する
     */
    union(x: number, y: number): boolean;
    /**
     * 要素`x`と要素`y`が同じ木に属しているかを判定する
     */
    connected(x: number, y: number): boolean;
    /**
     * 現在の連結成分の数を返す
     */
    get componentCount(): number;
}
