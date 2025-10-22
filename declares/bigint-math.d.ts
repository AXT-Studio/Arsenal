/**
 * BigIntに関する数学的計算を行うためのユーティリティクラス。
 */
export declare class BigIntMath {
    /**
     * nの整数平方根を返す
     * - 時間計算量: O(M(log_2 n)) (※ただし、M(k)はkビット整数の乗算に要する時間(JSエンジン依存))
     * @param {bigint} n - 非負の整数
     * @returns {bigint} - nの整数平方根
     * @throws {RangeError} - `n`が負の場合
     */
    static sqrt(n: bigint): bigint;
}
