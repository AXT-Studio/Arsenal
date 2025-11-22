/**
 * BigIntに関する数学的計算を行うためのユーティリティクラス。
 */
export declare class BigIntMath {
    /**
     * nの整数平方根を返す
     */
    static isqrt(n: bigint): bigint;
    /**
     * 整数`a`, 非負整数`n`, 正整数`m`について、`a ** n % m`を求めます。
     */
    static modPow(a: bigint, n: bigint, m: bigint): bigint;
    /**
     * Miller-Rabin法による素数判定を行います。bases省略時、n<2^64で決定的となる基底を使用します。
     */
    static doMillerRabin(n: bigint, bases?: bigint[]): boolean;
}
