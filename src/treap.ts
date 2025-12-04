// ================================================================================================
// entrypoint: treap
// 非回転Treapを提供します。
// 平衡二分探索木の実装の一つで、C++のstd::setやstd::map相当の機能を持ちます。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * Treapのノードを表すクラス
 * @template K - キーの型
 * @template V - 値の型
 */
class TreapNode<K, V> {
    /** ノードのキー */
    key: K;
    /** ノードの値 */
    value: V;
    /**  0以上1以下の値で、大きい値のほうが優先度が高いことを表します */
    priority: number;
    /** 自分自身を含むサブツリーの要素数 */
    size: number;
    /** 左の子ノード */
    left: TreapNode<K, V> | null;
    /** 右の子ノード */
    right: TreapNode<K, V> | null;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
        this.priority = Math.random();
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

/**
 * Treap本体のクラス
 * @template K - キーの型
 * @template V - 値の型
 */
class Treap<K, V> {
    root: TreapNode<K, V> | null;
    /** キーを比較するための関数。aがbより先なら負、aがbより後なら正、順序が等しいなら0を返す。 */
    #keyCompareFn: (a: K, b: K) => number;
    /**
     * 新しいTreapのインスタンスを作成します。
     * @param [keyCompareFn] - キーを比較するための関数。aがbより先なら負、aがbより後なら正、順序が等しいなら0を返す。
     */
    constructor(keyCompareFn?: (a: K, b: K) => number) {
        this.root = null;
        this.#keyCompareFn = keyCompareFn ?? ((a, b) => {
            // keyCompareFnが提供されなかった場合、<, > 演算子を使って比較する。anyで型エラー回避。
            if (a as any < b as any) return -1;
            if (a as any > b as any) return 1;
            return 0;
        });
    }
    /**
     * 2つのTreapをマージして、新しいTreapを返します。
     */
    static #merge<K, V>(
        left: TreapNode<K, V> | null,
        right: TreapNode<K, V> | null,
    ): TreapNode<K, V> | null {
        if (!left) return right;
        if (!right) return left;
        if (left.priority > right.priority) {
            left.right = Treap.#merge(left.right, right);
            left.size = 1 + Treap.#getSize(left.left) +
                Treap.#getSize(left.right);
            return left;
        } else {
            right.left = Treap.#merge(left, right.left);
            right.size = 1 + Treap.#getSize(right.left) +
                Treap.#getSize(right.right);
            return right;
        }
    }
    /**
     * Treapをkを基準に"keyがk以下の木"と"keyがkより大きい木"に分割します。
     * @param rootNode - 分割対象のTreapの根となるノード
     * @param k - 分割の基準となるキー
     * @param keyCompareFn - キーを比較するための関数。aがbより先なら負、aがbより後なら正、順序が等しいなら0を返す。
     */
    static #split<K, V>(
        rootNode: TreapNode<K, V> | null,
        k: K,
        keyCompareFn: (a: K, b: K) => number,
    ): { left: TreapNode<K, V> | null; right: TreapNode<K, V> | null } {
        if (!rootNode) return { left: null, right: null };
        if (keyCompareFn(rootNode.key, k) <= 0) {
            // 根がk以下 -> rootNodeが左の木 / rootNode.rightを分割して左をrootNode.right、右を右の木に
            const right_split = Treap.#split(rootNode.right, k, keyCompareFn);
            rootNode.right = right_split.left;
            rootNode.size = 1 + Treap.#getSize(rootNode.left) +
                Treap.#getSize(rootNode.right);
            return { left: rootNode, right: right_split.right };
        } else {
            // 根がkより大きい -> rootNodeが右の木 / rootNode.leftを分割して左を左の木、右をrootNode.leftに
            const left_split = Treap.#split(rootNode.left, k, keyCompareFn);
            rootNode.left = left_split.right;
            rootNode.size = 1 + Treap.#getSize(rootNode.left) +
                Treap.#getSize(rootNode.right);
            return { left: left_split.left, right: rootNode };
        }
    }
    /**
     * Treapをkを基準に"keyがk未満の木"・"keyがkと等しいノード"・"keyがkより大きい木"に分割します。
     * @param rootNode - 分割対象のTreapの根となるノード
     * @param k - 分割の基準となるキー
     * @param keyCompareFn - キーを比較するための関数。aがbより先なら負、aがbより後なら正、順序が等しいなら0を返す。
     */
    static #splitThreeWays<K, V>(
        rootNode: TreapNode<K, V> | null,
        k: K,
        keyCompareFn: (a: K, b: K) => number,
    ): {
        less: TreapNode<K, V> | null;
        equal: TreapNode<K, V> | null;
        greater: TreapNode<K, V> | null;
    } {
        if (!rootNode) return { less: null, equal: null, greater: null };
        // - split1.left: key以下 / split1.right: keyより大きい
        const split1 = Treap.#split(rootNode, k, keyCompareFn);
        // - split2.left: key未満 / split2.right: keyと等しい
        const split2 = Treap.#split(split1.left, k, (a, b) => {
            const cmp = keyCompareFn(a, b);
            return cmp === 0 ? 1 : cmp; // 等しい場合は常にa > bとみなす
        });
        return {
            less: split2.left,
            equal: split2.right,
            greater: split1.right,
        };
    }
    /**
     * TreapNodeのサイズを安全に取得します。
     * @param node
     */
    static #getSize<K, V>(node: TreapNode<K, V> | null): number {
        return node ? node.size : 0;
    }
    /**
     * キーと値のペアをTreapに挿入します。
     * すでに同じキーが存在する場合は、その値を上書きします。
     */
    insert(key: K, value: V) {
        // ==== 現在の木を"key未満"・"keyと等しい"・"keyより大きい"の3つに分割して等しいやつは破棄 ====
        const { less, greater } = Treap.#splitThreeWays(
            this.root,
            key,
            this.#keyCompareFn,
        );
        const less_nodes = less;
        const greater_nodes = greater;
        // ==== 新しいノードを作成 ====
        const newNode = new TreapNode(key, value);
        // ==== 3つの木をマージして新しい木を作成 ====
        // 先にlessとnewNodeをマージ
        const merged_left = Treap.#merge<K, V>(less_nodes, newNode);
        // さらにgreaterとマージして完成
        this.root = Treap.#merge<K, V>(merged_left, greater_nodes);
    }
    /**
     * キーに対応する値をTreapから削除します。
     * そのキーが存在しない場合は何もしません。
     */
    erase(key: K): void {
        // ==== 現在の木を"key未満"・"keyと等しい"・"keyより大きい"の3つに分割して等しいやつは破棄 ====
        const { less, greater } = Treap.#splitThreeWays<K, V>(
            this.root,
            key,
            this.#keyCompareFn,
        );
        const less_nodes = less;
        const greater_nodes = greater;
        // ==== 2つの木をマージして新しい木を作成 ====
        this.root = Treap.#merge<K, V>(less_nodes, greater_nodes);
    }
    /**
     * キーに対応する値をTreapから取得します。
     * そのキーが存在しない場合は`undefined`を返します。
     */
    get(key: K): V | undefined {
        let currentTargetNode = this.root;
        while (currentTargetNode) {
            const cmp = this.#keyCompareFn(key, currentTargetNode.key);
            if (cmp === 0) return currentTargetNode.value;
            currentTargetNode = cmp < 0
                ? currentTargetNode.left
                : currentTargetNode.right;
        }
        return undefined;
    }
    /**
     * キー以上の最小のキーとその値を取得します。
     * そのようなキーが存在しない場合は`undefined`を返します。
     */
    lowerBound(key: K): { key: K; value: V } | undefined {
        let currentTargetNode = this.root;
        /** @type {TreapNode<K,V> | undefined} */
        let candidateNode = undefined;
        while (currentTargetNode) {
            const cmp = this.#keyCompareFn(key, currentTargetNode.key);
            if (cmp === 0) {
                return {
                    key: currentTargetNode.key,
                    value: currentTargetNode.value,
                };
            } else if (cmp < 0) {
                candidateNode = currentTargetNode;
                currentTargetNode = currentTargetNode.left;
            } else {
                currentTargetNode = currentTargetNode.right;
            }
        }
        if (candidateNode) {
            return { key: candidateNode.key, value: candidateNode.value };
        } else {
            return undefined;
        }
    }
    /**
     * キーより大きい最小のキーとその値を取得します。
     * そのようなキーが存在しない場合は`undefined`を返します。
     */
    upperBound(key: K): { key: K; value: V } | undefined {
        let currentTargetNode = this.root;
        /** @type {TreapNode<K,V> | undefined} */
        let candidateNode = undefined;
        while (currentTargetNode) {
            const cmp = this.#keyCompareFn(key, currentTargetNode.key);
            if (cmp < 0) {
                candidateNode = currentTargetNode;
                currentTargetNode = currentTargetNode.left;
            } else {
                currentTargetNode = currentTargetNode.right;
            }
        }
        if (candidateNode) {
            return { key: candidateNode.key, value: candidateNode.value };
        } else {
            return undefined;
        }
    }
    /**
     * Treap内でk番目に小さい要素のキーと値を取得します。
     * kは0始まりのインデックスです。
     * そのような要素が存在しない場合は`undefined`を返します。
     */
    kthElement(k: number): { key: K; value: V } | undefined {
        let currentTargetNode = this.root;
        let currentK = k;
        while (currentTargetNode) {
            const leftSize = Treap.#getSize(currentTargetNode.left);
            if (currentK < leftSize) {
                currentTargetNode = currentTargetNode.left;
            } else if (currentK === leftSize) {
                return {
                    key: currentTargetNode.key,
                    value: currentTargetNode.value,
                };
            } else {
                currentK -= leftSize + 1;
                currentTargetNode = currentTargetNode.right;
            }
        }
        return undefined;
    }
    /**
     * このTreap内にある、キーがkey(未満|以下|以上|超過)の要素の数を取得します。
     * @template K ノードのキーの型
     * @param {K} key
     * @returns {{ less: number, lessEqual: number, greater: number, greaterEqual: number }}
     */
    countAllComparisons(
        key: K,
    ): {
        less: number;
        lessEqual: number;
        greater: number;
        greaterEqual: number;
    } {
        if (!this.root) {
            return { less: 0, lessEqual: 0, greater: 0, greaterEqual: 0 };
        }
        // 現在の木を"key未満"・"keyと等しい"・"keyより大きい"の3つに分割
        const { less, equal, greater } = Treap.#splitThreeWays<K, V>(
            this.root,
            key,
            this.#keyCompareFn,
        );
        // それぞれの要素数を取得
        const lessCount = Treap.#getSize<K, V>(less);
        const equalCount = Treap.#getSize<K, V>(equal);
        const greaterCount = Treap.#getSize<K, V>(greater);
        // 元の木に戻す
        const merged_left = Treap.#merge<K, V>(less, equal);
        this.root = Treap.#merge<K, V>(merged_left, greater);
        // 返す
        return {
            less: lessCount,
            lessEqual: lessCount + equalCount,
            greater: greaterCount,
            greaterEqual: equalCount + greaterCount,
        };
    }
    /**
     * 再帰的にTreapを走査するためのジェネレーターです。
     * (自身とその子孫について、in-orderで走査してyieldします)
     */
    *#inOrderTraversal(
        node: TreapNode<K, V> | null,
    ): Generator<{ key: K; value: V }, void, undefined> {
        if (!node) return;
        yield* this.#inOrderTraversal(node.left);
        yield { key: node.key, value: node.value };
        yield* this.#inOrderTraversal(node.right);
    }
    /**
     * Treap内の全要素をキーの"昇順"に列挙するイテレーターを返します。
     */
    *[Symbol.iterator](): Generator<{ key: K; value: V }, void, undefined> {
        yield* this.#inOrderTraversal(this.root);
    }
    /**
     * Treap全体の要素数を取得します。
     */
    get size(): number {
        return Treap.#getSize<K, V>(this.root);
    }
}

// ================================================================
// エクスポート
// ================================================================

export { Treap };
export type { TreapNode };
