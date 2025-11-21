/**
 * セグメント木を表すクラスです。
 */
export class SegmentTree<T> {
    /** 単位元 */
    #e: T;
    /** モノイド演算を表す関数 */
    #op: (a: T, b: T) => T;
    /** セグメント木のサイズ */
    #size: number;
    /** セグメント木のコンストラクタに渡されたサイズ */
    #originalSize: number;
    /** セグメント木の内部配列 */
    #tree: T[];

    constructor(
        e: T,
        op: (a: T, b: T) => T,
        size: number,
        initialValues?: T[],
    );

    /** インデックス`index`の要素を`value`に更新します。 */
    set(index: number, value: T): void;

    /** インデックス`index`の要素を返します。 */
    get(index: number): T;

    /** 半開区間[left, right)のモノイド積を計算して返します。 */
    query(left: number, right: number): T;

    /** 半開区間[0, n)のモノイド積(すなわち、全要素のモノイド積)を返します。 */
    queryAll(): T;

    /** 半開区間[l, r)のモノイド積について、条件fnを満たす最大のrを返します。 */
    maxRight(l: number, fn: (product: T) => boolean): number;

    /** 半開区間[l, r)のモノイド積について、条件fnを満たす最小のlを返します。 */
    minLeft(r: number, fn: (product: T) => boolean): number;

    /** セグメント木のサイズを返します。 */
    get size(): number;
}
