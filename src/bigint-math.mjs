/**
 * BigIntに関する数学的計算を行うためのユーティリティクラスです。
 * @module bigint-math
 */
/* ==== 型チェック有効化・型定義ファイルの参照 (Triple-Slash Directives & Deno @ts-self-types) ==== */
// @ts-check
/// <reference path="./../declares/bigint-math.d.ts" />
/* @ts-self-types="./../declares/bigint-math.d.ts" */

class BigIntMath {
    /**
     * 整数`n`の平方根(を小数点以下切り捨てしたもの)を返します。
     * @param {bigint} n
     * @returns {bigint}
     */
    static isqrt(n) {
        // nがbigint型でない場合はエラーを投げる
        if (typeof n !== "bigint") {
            throw new TypeError("n must be a bigint");
        }
        // nが負の数の場合はエラーを投げる
        if (n < 0n) {
            throw new RangeError("n must be non-negative");
        }
        // numberで正確に扱える範囲ならば、Math.sqrtを利用する
        if (n < 4294967296n) { // 2n ** 32n
            return BigInt(Math.floor(Math.sqrt(Number(n))));
        }
        // 漸化式の初期値
        // より効率的なビット長の近似計算: 16進数文字列長 * 4
        const bitLength = BigInt(n.toString(16).length * 4);
        let x0 = 1n << ((bitLength + 1n) / 2n);
        let x1 = (x0 + n / x0) / 2n; // 漸化式で次のステップの値を計算

        // x1 が x0 より小さい間 = まだ収束していない間
        while (x1 < x0) {
            x0 = x1; // 値を更新
            x1 = (x0 + n / x0) / 2n; // 再度、次のステップの値を計算
        }

        // ループを抜けた時点の x0 が求める答え
        return x0;
    }
    /**
     * 整数`a`, 非負整数`n`, 正整数`m`について、`a ** n % m`を求めます。
     * @param {bigint} a - 底 (整数)
     * @param {bigint} n - 指数 (非負整数)
     * @param {bigint} m - 法 (正整数)
     * @returns {bigint} - `a ** n % m`の値
     */
    static modPow(a, n, m) {
        // エラーハンドリング
        if (n < 0n) {
            throw new RangeError("指数nは非負整数でなければなりません。");
        }
        if (m <= 0n) {
            throw new RangeError("法mは正整数でなければなりません。");
        }
        // m === 1のときは常に0を返す
        if (m === 1n) return 0n;
        // 繰り返し二乗法をやる
        let result = 1n;
        let base = a % m;
        let exponent = n;
        while (exponent > 0n) {
            if (exponent % 2n === 1n) {
                result = (result * base) % m;
            }
            base = (base * base) % m;
            exponent = exponent / 2n;
        }
        return result;
    }
}

// ================================================================================================
// ES Module Export
// ================================================================================================

export { BigIntMath };
