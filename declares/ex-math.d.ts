/**
 * JavaScript標準の`Math`にない数学的計算を行うためのユーティリティクラス。
 */
export declare class ExMath {
    /**
     * 2つの整数の最大公約数を求めます。
     * - 時間計算量: O(log(min(a, b)))
     * @template {number | bigint} T - 引数と返り値の型。numberまたはbigint。
     * @param {T} a - 1つ目の整数。
     * @param {T} b - 2つ目の整数。
     * @returns {T} aとbの最大公約数。引数と同じ型で返されます。
     */
    static gcd<T extends number | bigint>(a: T, b: T): T;
    /**
     * 2つの整数の最小公倍数を求めます。
     * - 時間計算量: O(log(min(a, b)))
     * @template {number | bigint} T - 引数と返り値の型。numberまたはbigint。
     * @param {T} a - 1つ目の整数。
     * @param {T} b - 2つ目の整数。
     * @returns {T} aとbの最小公倍数。引数と同じ型で返されます。
     */
    static lcm<T extends number | bigint>(a: T, b: T): T;
    /**
     * 整数`n`の正の約数を列挙します。`n === 1`なら`[1]`、`n < 1`なら`[]`を返します。
     * - 時間計算量: O(√n)
     * @param {number} n - 対象の整数
     * @returns {number[]} - 正の約数を昇順で列挙した配列
     */
    static getDivisors(n: number): number[];
}
