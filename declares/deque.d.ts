/**
 * 双方向キュー (Deque: Double-Ended Queue) クラス
 * - 先頭と末尾の両方から効率的に要素の追加・削除が可能なデータ構造。
 */
export class Deque<T> {
    constructor(array?: T[]);
    unshift(value: T): void;
    push(value: T): void;
    shift(): T | undefined;
    pop(): T | undefined;
    first(): T | undefined;
    last(): T | undefined;
    isEmpty(): boolean;
    toArray(): T[];
    get size(): number;
}
