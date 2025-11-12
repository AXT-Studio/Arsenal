/**
 * 二分ヒープ (Binary Heap) クラス
 * Priority Queue の実装でも使用されるデータ構造です。
 */
export class BinaryHeap<T> {
    constructor(compareFn?: (a: T, b: T) => number);
    get size(): number;
    push(value: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    remove(value: T): boolean;
    update(oldValue: T, newValue: T): boolean;
    clear(): void;
}
