declare const DEFAULT_COMPARE_FN: (a: unknown, b: unknown) => number;
/**
 * ソート済み配列に対して二分探索を行い、targetと等価な要素がarray内に存在するかを返します。
 */
export function binary_search<T>(
    array: T[],
    target: T,
    compareFn?: (a: T, b: T) => number,
): boolean;
/**
 * ソート済み配列`array`の中で、`target`**以上**と判定される最初の要素のインデックスを返します。
 */
export function lower_bound<T>(
    array: T[],
    target: T,
    compareFn?: (a: T, b: T) => number,
): number;
/**
 * ソート済み配列`array`の中で、`target`**より大きい**と判定される最初の要素のインデックスを返します。
 */
export function upper_bound<T>(
    array: T[],
    target: T,
    compareFn?: (a: T, b: T) => number,
): number;
