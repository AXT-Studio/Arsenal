/**
 * BigIntに関する数学的計算を行うためのユーティリティクラスです。
 * @module bigint-math
 */
/* ==== 型チェック有効化・型定義ファイルの参照 (Triple-Slash Directives & Deno @ts-self-types) ==== */
// @ts-check
/// <reference path="./../declares/bigint-math.d.ts" />
/* @ts-self-types="./../declares/bigint-math.d.ts" */

class BigIntMath {
    /** @type {function(bigint): bigint} $n$の整数平方根を返す */
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
        if (n < 2n ** 32n) {
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
}

// ================================================================================================
// ES Module Export
// ================================================================================================

export { BigIntMath };
