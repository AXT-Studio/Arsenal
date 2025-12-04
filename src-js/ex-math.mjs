/**
 * JavaScript標準の`Math`にない数学的計算を行うためのユーティリティクラス。
 * @module ex-math
 */
/* ==== 型チェック有効化・型定義ファイルの参照 (Triple-Slash Directives & Deno @ts-self-types) ==== */
// @ts-check
/// <reference path="./../declares/ex-math.d.ts" />
/* @ts-self-types="./../declares/ex-math.d.ts" */

class ExMath {
    /**
     * 2つの整数の最大公約数を求めます。
     * @template {number | bigint} T - 引数と返り値の型。numberまたはbigint。
     * @param {T} a - 1つ目の整数。
     * @param {T} b - 2つ目の整数。
     * @returns {T} aとbの最大公約数。引数と同じ型で返されます。
     */
    static gcd(a, b) {
        while (b) {
            [a, b] = [b, /** @type {T} */ (a % b)];
        }
        return a < 0 ? /** @type {T} */ (-a) : a;
    }
    /**
     * 2つの整数の最小公倍数を求めます。
     * @template {number | bigint} T - 引数と返り値の型。numberまたはbigint。
     * @param {T} a - 1つ目の整数。
     * @param {T} b - 2つ目の整数。
     * @returns {T} aとbの最小公倍数。引数と同じ型で返されます。
     */
    static lcm(a, b) {
        if ((a === 0 || b === 0 || a === 0n || b === 0n)) {
            return /** @type {T} */ (typeof a === "bigint" ? 0n : 0);
        }
        return /** @type {T} */ ((a * b) / this.gcd(a, b));
    }
    /**
     * 整数`n`の正の約数を列挙します。`n === 1`なら`[1]`、`n < 1`なら`[]`を返します。
     * @param {number} n - 対象の整数
     * @returns {number[]} - 正の約数を昇順で列挙した配列
     */
    static getDivisors(n) {
        if (n < 1) return [];
        if (n === 1) return [1];
        /** @type {number[]} */
        const smallDivisors = [];
        /** @type {number[]} */
        const largeDivisors = [];
        const limit = Math.sqrt(n);
        // 1から√nまでの整数で割り切れるかを調べ、割り切れたらiをsmallDivisors、n/iをlargeDivisorsに追加する
        for (let i = 1; i <= limit; i++) {
            if (n % i === 0) {
                smallDivisors.push(i);
                if (i !== n / i) {
                    largeDivisors.push(n / i);
                }
            }
        }
        // smallDivisorsにlargeDivisorsの逆順を追加して返す。
        largeDivisors.reverse();
        smallDivisors.push(...largeDivisors);
        return smallDivisors;
    }
}

// ================================================================================================
// ES Module Export
// ================================================================================================

export { ExMath };
