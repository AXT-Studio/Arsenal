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
    /**
     * ミラー・ラビン素数判定法による素数判定を行います。
     * @param {bigint} n - 判定する整数 (2以上)
     * @param {bigint[]} [bases] - 判定に使用する基数の配列 (省略時は2^64未満で決定的になるよう選定)
     * @returns {boolean} - 素数でなければfalse、素数かもしれなければtrue (bases省略時、n<2^64なら決定的)
     */
    static doMillerRabin(n, bases) {
        // エラーハンドリング
        if (n <= 1n) return false;
        if (n === 2n) return true;
        if (n % 2n === 0n) return false;
        // 基数のリストを先に作っておく
        const BASES = bases ?? [2n, 325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n];
        // n - 1 = 2^s * d の形に変形 (dが奇数になるまで2で割る)
        let d = n - 1n;
        let s = 0n;
        while ((d & 1n) === 0n) {
            d >>= 1n;
            s += 1n;
        }
        // 各基数についてテストを行う
        for (const a of BASES) {
            // n自体が底のリストに含まれている場合は素数
            if (a === n) return true;
            // (効率化) nが底の倍数なら合成数 (例: n=9, a=3)
            if (n % a === 0n) return false;
            // x = a^d mod n
            let x = BigIntMath.modPow(a, d, n);
            // x = 1 または x = n - 1 なら「素数っぽい」ので次の底へ
            if (x === 1n || x === n - 1n) continue;
            // xを2乗していき、n - 1 になるかチェック (s-1回繰り返す)
            let isProbablyPrime = false;
            for (let r = 1n; r < s; r++) {
                x = (x * x) % n;
                if (x === n - 1n) {
                    isProbablyPrime = true;
                    break;
                }
            }
            // n - 1 にならなかった場合は合成数
            if (!isProbablyPrime) {
                return false;
            }
        }
        // すべての基数で「素数っぽい」場合は素数かもしれない
        return true;
    }
}

// ================================================================================================
// ES Module Export
// ================================================================================================

export { BigIntMath };
