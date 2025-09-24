/**
 * 配列`array`に`target`と等しい値が存在するかどうかを、二分探索を用いて判定する。
 * - 時間計算量: 最悪O(log(N)) (※Nは`array`の要素数)
 * @template T
 * @param {T[]} array - `compareFn`を用いてソート済みの配列
 * @param {T} target - 探索する値
 * @param {(a: T, b: T) => number} [compareFn] - 比較に用いる関数。デフォルト値はArray#sort()と同じ。
 * @returns {boolean} `target`と等しい値が`array`に存在する場合は`true`、存在しない場合は`false`を返す。
 *
 * @example
 * ```js
 * import { binary_search } from 'binary-search'
 * const array = [1, 3, 5, 7, 9];
 * console.log(binary_search(array, 3)); // true
 * console.log(binary_search(array, 6)); // false
 * ```
 */
export function binary_search<T>(array: T[], target: T, compareFn?: (a: T, b: T) => number): boolean;

/**
 * 配列`array`の中で、`target`以上と判定される最初の要素のインデックスを返す。
 * - 時間計算量: 最悪O(log(N)) (※Nは`array`の要素数)
 *
 * @template {any} T
 * @param {T[]} array - `compareFn`を用いてソート済みの配列
 * @param {T} target - 探索する値
 * @param {(a: T, b: T) => number} [compareFn] - 比較に用いる関数。デフォルト値はArray#sort()と同じ。
 * @returns {number} `target`以上と判定される最初の要素のインデックス。`array`内に`target`以上の要素が存在しない場合は`array.length`を返す。
 * @example
 * ```js
 * import { lower_bound } from 'binary-search'
 * const array = [1, 3, 3, 5, 7];
 * console.log(lower_bound(array, 3)); // 1
 * console.log(lower_bound(array, 4)); // 3
 * console.log(lower_bound(array, 8)); // 5
 * ```
 */
export function lower_bound<T>(array: T[], target: T, compareFn?: (a: T, b: T) => number): number;

/**
 * 配列`array`の中で、`target`より大きいと判定される最初の要素のインデックスを返す。
 * - 時間計算量: 最悪O(log(N)) (※Nは`array`の要素数)
 *
 * @template {any} T
 * @param {T[]} array - `compareFn`を用いてソート済みの配列
 * @param {T} target - 探索する値
 * @param {(a: T, b: T) => number} [compareFn] - 比較に用いる関数。デフォルト値はArray#sort()と同じ。
 * @returns {number} `target`より大きいと判定される最初の要素のインデックス。`array`内に`target`より大きい要素が存在しない場合は`array.length`を返す。
 */
export function upper_bound<T>(array: T[], target: T, compareFn?: (a: T, b: T) => number): number;
