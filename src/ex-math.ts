// ================================================================================================
// entrypoint: ex-math
// JavaScript標準の`Math`にない数学的計算を行うためのユーティリティクラスです。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * JavaScript標準の`Math`にない数学的計算を行うためのユーティリティクラス
 */
class ExMath {
    /**
     * 2つの整数の最大公約数を求めます。
     * @template T - 引数と返り値の型。numberまたはbigint。
     * @param a - 1つ目の整数。
     * @param b - 2つ目の整数。
     * @returns aとbの最大公約数。引数と同じ型で返されます。
     */
    static gcd<T extends (number | bigint)>(a: T, b: T): T {
        while (b) {
            [a, b] = [b, (a % b) as T];
        }
        return a < 0 ? (-a as T) : a;
    }
    /**
     * 2つの整数の最小公倍数を求めます。
     * @template T - 引数と返り値の型。numberまたはbigint。
     * @param a - 1つ目の整数。
     * @param b - 2つ目の整数。
     * @returns aとbの最小公倍数。引数と同じ型で返されます。
     */
    static lcm<T extends (number | bigint)>(a: T, b: T): T {
        if ((a === 0 || b === 0 || a === 0n || b === 0n)) {
            return (typeof a === "bigint" ? 0n : 0) as T;
        }
        return ((a * b) / this.gcd(a, b)) as T;
    }
    /**
     * 整数`n`の正の約数を列挙します。`n === 1`なら`[1]`、`n < 1`なら`[]`を返します。
     * @param n - 対象の整数
     * @returns 正の約数を昇順で列挙した配列
     */
    static getDivisors(n: number): number[] {
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

// ================================================================
// エクスポート
// ================================================================

export { ExMath };
