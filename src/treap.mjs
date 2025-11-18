/**
 * Treapを提供します。
 * 平衡二分探索木の実装の一つで、C++のstd::setやstd::mapを十分代替できます。
 * @module treap
 */

/* ==== 型チェック有効化・型定義ファイルの参照 (Triple-Slash Directives & Deno @ts-self-types) ==== */
// @ts-check
/// <reference path="./../declares/treap.d.ts" />
/* @ts-self-types="./../declares/treap.d.ts" */

/**
 * Treapのノードを表すクラスです。
 * @class TreapNode
 * @template K ノードのキーの型
 * @template V ノードの値の型
 */
class TreapNode {
    /** @type {K} */
    key;
    /** @type {V} */
    value;
    /** @type {number} - 0以上1以下の値で、大きい値のほうが優先度が高いことを表します */
    priority;
    /** @type {number} - 自分自身を含むサブツリーの要素数 */
    size;
    /** @type {TreapNode<K,V> | null} */
    left;
    /** @type {TreapNode<K,V> | null} */
    right;

    /**
     * @param {K} key
     * @param {V} value
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.priority = Math.random();
        this.left = null;
        this.right = null;
        this.size = 1;
    }
}

/**
 * Treapを表すクラスです。
 * @class Treap
 */
class Treap {
    /** @type {TreapNode<any,any> | null} */
    root;
    /** @type {(a: any, b: any) => number} -キーを比較するための関数。aがb未満なら負、aがbより大きいなら正、等しいなら0を返す。 */
    #keyCompareFn;
    /**
     * @param {(a: any, b: any) => number} [keyCompareFn] - キーを比較するための関数。aがb未満なら負、aがbより大きいなら正、等しいなら0を返す。
     */
    constructor(keyCompareFn) {
        this.root = null;
        this.#keyCompareFn = keyCompareFn ?? ((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
    /**
     * 2つのTreapをマージして、新しいTreapを返します。
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {TreapNode<K,V> | null} left
     * @param {TreapNode<K,V> | null} right
     * @returns {TreapNode<K,V> | null}
     */
    static #merge(left, right) {
        if (!left) return right;
        if (!right) return left;
        if (left.priority > right.priority) {
            left.right = Treap.#merge(left.right, right);
            left.size = 1 + Treap.#getSize(left.left) + Treap.#getSize(left.right);
            return left;
        } else {
            right.left = Treap.#merge(left, right.left);
            right.size = 1 + Treap.#getSize(right.left) + Treap.#getSize(right.right);
            return right;
        }
    }
    /**
     * Treapをkを基準に"keyがk以下の木"と"keyがkより大きい木"に分割します。
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {TreapNode<K,V> | null} rootNode - 分割対象のTreapの根となるノード
     * @param {K} k - 分割の基準となるキー
     * @param {(a: any, b: any) => number} keyCompareFn - キーを比較するための関数。aがb未満なら負、aがbより大きいなら正、等しいなら0を返す。
     * @returns {{ left: TreapNode<K,V> | null, right: TreapNode<K,V> | null }}
     */
    static #split(rootNode, k, keyCompareFn) {
        if (!rootNode) return { left: null, right: null };
        if (keyCompareFn(rootNode.key, k) <= 0) {
            // 根がk以下 -> rootNodeが左の木 / rootNode.rightを分割して左をrootNode.right、右を右の木に
            const right_split = Treap.#split(rootNode.right, k, keyCompareFn);
            rootNode.right = right_split.left;
            rootNode.size = 1 + Treap.#getSize(rootNode.left) + Treap.#getSize(rootNode.right);
            return { left: rootNode, right: right_split.right };
        } else {
            // 根がkより大きい -> rootNodeが右の木 / rootNode.leftを分割して左を左の木、右をrootNode.leftに
            const left_split = Treap.#split(rootNode.left, k, keyCompareFn);
            rootNode.left = left_split.right;
            rootNode.size = 1 + Treap.#getSize(rootNode.left) + Treap.#getSize(rootNode.right);
            return { left: left_split.left, right: rootNode };
        }
    }
    /**
     * Treapをkを基準に"keyがk未満の木"・"keyがkと等しいノード"・"keyがkより大きい木"に分割します。
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {TreapNode<K,V> | null} rootNode - 分割対象のTreapの根となるノード
     * @param {K} k - 分割の基準となるキー
     * @param {(a: any, b: any) => number} keyCompareFn - キーを比較するための関数。aがb未満なら負、aがbより大きいなら正、等しいなら0を返す。
     * @returns {{ less: TreapNode<K,V> | null, equal: TreapNode<K,V> | null, greater: TreapNode<K,V> | null }}
     */
    static #splitThreeWays(rootNode, k, keyCompareFn) {
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
            greater: split1.right
        };
    }
    /**
     * TreapNodeのサイズを安全に取得します。
     * @param {TreapNode<any,any> | null} node
     * @returns {number}
     */
    static #getSize(node) {
        return node ? node.size : 0;
    }
    /**
     * キーと値のペアをTreapに挿入します。
     * すでに同じキーが存在する場合は、その値を上書きします。
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {K} key
     * @param {V} value
     * @returns {void}
     */
    insert(key, value) {
        // ==== 現在の木を"key未満"・"keyと等しい"・"keyより大きい"の3つに分割して等しいやつは破棄 ====
        const { less, greater } = Treap.#splitThreeWays(this.root, key, this.#keyCompareFn);
        const less_nodes = less;
        const greater_nodes = greater;
        // ==== 新しいノードを作成 ====
        const newNode = new TreapNode(key, value);
        // ==== 3つの木をマージして新しい木を作成 ====
        // 先にlessとnewNodeをマージ
        const merged_left = Treap.#merge(less_nodes, newNode);
        // さらにgreaterとマージして完成
        this.root = Treap.#merge(merged_left, greater_nodes);
    }
    /**
     * キーに対応する値をTreapから削除します。
     * そのキーが存在しない場合は何もしません。
     * @template K ノードのキーの型
     * @param {K} key
     * @returns {void}
     */
    erase(key) {
        // ==== 現在の木を"key未満"・"keyと等しい"・"keyより大きい"の3つに分割して等しいやつは破棄 ====
        const { less, greater } = Treap.#splitThreeWays(this.root, key, this.#keyCompareFn);
        const less_nodes = less;
        const greater_nodes = greater;
        // ==== 2つの木をマージして新しい木を作成 ====
        this.root = Treap.#merge(less_nodes, greater_nodes);
    }
    /**
     * キーに対応する値をTreapから取得します。
     * そのキーが存在しない場合は`undefined`を返します。
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {K} key
     * @returns {V | undefined}
     */
    get(key) {
        let currentTargetNode = this.root;
        while (currentTargetNode) {
            const cmp = this.#keyCompareFn(key, currentTargetNode.key);
            if (cmp === 0) return currentTargetNode.value;
            currentTargetNode = cmp < 0 ? currentTargetNode.left : currentTargetNode.right;
        }
        return undefined;
    }
    /**
     * キー以上の最小のキーとその値を取得します。
     * そのようなキーが存在しない場合は`undefined`を返します。
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {K} key
     * @returns {{ key: K, value: V } | undefined}
     */
    lowerBound(key) {
        let currentTargetNode = this.root;
        /** @type {TreapNode<K,V> | undefined} */
        let candidateNode = undefined;
        while (currentTargetNode) {
            const cmp = this.#keyCompareFn(key, currentTargetNode.key);
            if (cmp === 0) {
                return { key: currentTargetNode.key, value: currentTargetNode.value };
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
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {K} key
     * @returns {{ key: K, value: V } | undefined}
     */
    upperBound(key) {
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
     * @template K ノードのキーの型
     * @template V ノードの値の型
     * @param {number} k
     * @returns {{ key: K, value: V } | undefined}
     */
    kthElement(k) {
        let currentTargetNode = this.root;
        let currentK = k;
        while (currentTargetNode) {
            const leftSize = Treap.#getSize(currentTargetNode.left);
            if (currentK < leftSize) {
                currentTargetNode = currentTargetNode.left;
            } else if (currentK === leftSize) {
                return { key: currentTargetNode.key, value: currentTargetNode.value };
            } else {
                currentK -= (leftSize + 1);
                currentTargetNode = currentTargetNode.right;
            }
        }
        return undefined;
    }
}

export {
    Treap
};
