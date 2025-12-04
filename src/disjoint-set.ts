// ================================================================================================
// entrypoint: disjoint-set
// 素集合データ構造 (Disjoint Set Union: DSU) を提供します。
// 要素の集合を管理し、要素が同じ集合に属しているかの判定や、異なる集合の結合を効率的に行えます。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * 素集合データ構造 (Disjoint Set Union: DSU)
 */
class DisjointSet {
    /** #parents[i]は要素iの親のインデックス */
    #parents: number[];
    /** #size[i]は要素iの属する木のサイズ (※根の要素でのみ有効) */
    #size: number[];
    /** 現在の連結成分の数 */
    #components: number;

    /**
     * Disjoint Set Unionのインスタンスを生成
     * @param size - 要素の数
     */
    constructor(size: number) {
        if (!Number.isInteger(size) || size <= 0) {
            throw new Error("DisjointSet: size must be a positive integer.");
        }
        this.#parents = [...Array(size).keys()];
        this.#size = Array(size).fill(1);
        this.#components = size;
    }
    /**
     * 要素`x`の属する木の根を返す
     * @param x - 要素のインデックス
     * @returns - 根のインデックス
     */
    find(x: number): number {
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
     * @param x - 要素のインデックス
     * @param y - 要素のインデックス
     * @returns - 結合が成功した場合はtrue、もとから既に同じ木に属していた場合はfalse
     */
    union(x: number, y: number): boolean {
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
     * @param x - 要素のインデックス
     * @param y - 要素のインデックス
     * @returns - 同じ木に属している場合はtrue、そうでない場合はfalse
     */
    connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }
    /**
     * 現在の連結成分の数を返す
     * - 時間計算量: 最悪O(1)
     * @returns - 連結成分の数
     */
    get componentCount(): number {
        return this.#components;
    }
}

// ================================================================
// エクスポート
// ================================================================

export { DisjointSet };
