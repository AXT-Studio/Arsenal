/**
 * Treapのノードを表すクラスです。
 */
export class TreapNode<K, V> {
    constructor(key: K, value: V);
    key: K;
    value: V;
    priority: number;
    size: number;
    left: TreapNode<K, V> | null;
    right: TreapNode<K, V> | null;
}

/**
 * Treap (Tree + Heap) クラス
 * 平衡二分探索木の実装の一つで、C++のstd::setやstd::mapを十分代替できます。
 */
export class Treap<K, V> {
    constructor(keyCompareFn?: (a: K, b: K) => number);
    insert(key: K, value: V): void;
    erase(key: K): void;
    get(key: K): V | undefined;
    lowerBound(key: K): { key: K; value: V } | undefined;
    upperBound(key: K): { key: K; value: V } | undefined;
    kthElement(k: number): { key: K; value: V } | undefined;
    countAllComparisons(
        key: K,
    ): {
        less: number;
        lessEqual: number;
        greater: number;
        greaterEqual: number;
    };
    [Symbol.iterator](): Generator<{ key: K; value: V }, void, undefined>;
    get size(): number;
}
