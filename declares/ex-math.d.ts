/**
 * JavaScript標準の`Math`にない数学的計算を行うためのユーティリティクラス。
 */
export declare class ExMath {
    /**
     * 2つの整数の最大公約数を求めます。
     */
    static gcd<T extends number | bigint>(a: T, b: T): T;
    /**
     * 2つの整数の最小公倍数を求めます。
     */
    static lcm<T extends number | bigint>(a: T, b: T): T;
    /**
     * 整数`n`の正の約数を列挙します。`n === 1`なら`[1]`、`n < 1`なら`[]`を返します。
     */
    static getDivisors(n: number): number[];
}
