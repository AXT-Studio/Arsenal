// ================================================================================================
// entrypoint: mod-ops
// 指定された法の中で整数の演算を行うための演算器クラスModOpsを提供します。
// ================================================================================================

// ================================================================
// Utilities
// ================================================================

/**
 * 自然数a, bについて、ax + by = g (g = gcd(a, b)) を満たす整数x, yを求めます。
 * @param a - 自然数a
 * @param b - 自然数b
 * @returns [g, x, y] - gはaとbの最大公約数、xとyはax + by = gを満たす整数
 */
function extendedGCD(a: bigint, b: bigint): [bigint, bigint, bigint] {
    let r0 = a;
    let r1 = b;
    let x0 = 1n;
    let x1 = 0n;
    let y0 = 0n;
    let y1 = 1n;

    while (r1 !== 0n) {
        const q = r0 / r1;
        const temp = r1;
        r1 = r0 % r1;
        r0 = temp;

        const tempX = x0;
        x0 = x1;
        x1 = tempX - q * x1;

        const tempY = y0;
        y0 = y1;
        y1 = tempY - q * y1;
    }

    return [r0, x0, y0];
}

// ================================================================
// クラス本体
// ================================================================

/**
 * 指定された法の中で整数の演算を行うための演算器クラス
 */
class ModOps {
    #mod: bigint;

    /**
     * 新しいModOpsインスタンス(演算器)を生成する
     * @param mod - 演算の法 (1以上の整数)
     * @constructor
     */
    constructor(mod: bigint) {
        if (mod <= 0n) {
            throw new Error("mod must be a positive integer");
        }
        this.#mod = mod;
    }
    /**
     * 引数として与えられたbigintを、このModOpsの法で割った余りを返す
     * @param value - 余りを計算するためのbigint
     * @returns valueをこのModOpsの法で割った余り
     */
    normalize(value: bigint): bigint {
        const r = value % this.#mod;
        return r < 0n ? r + this.#mod : r;
    }

    /**
     * a + bを、このModOpsの法で割った余りを返す
     * @param a - 加算されるbigint
     * @param b - 加算されるbigint
     * @returns a + bをこのModOpsの法で割った余り
     */
    add(a: bigint, b: bigint): bigint {
        return this.normalize(a + b);
    }

    /**
     * 引数として与えられたbigintの総和を、このModOpsの法で割った余りを返す
     * @param values - 足し合わせるbigint (可変長引数)
     * @returns valuesの総和をこのModOpsの法で割った余り
     */
    sum(...values: bigint[]): bigint {
        let total = 0n;
        for (const value of values) {
            total = this.add(total, value);
        }
        return total;
    }

    /**
     * a - bを、このModOpsの法で割った余りを返す
     * @param a - 減算するbigint
     * @param b - 減算されるbigint
     * @returns a - bをこのModOpsの法で割った余り
     */
    sub(a: bigint, b: bigint): bigint {
        return this.normalize(a - b);
    }

    /**
     * a * bを、このModOpsの法で割った余りを返す
     * @param a - 乗算されるbigint
     * @param b - 乗算されるbigint
     * @returns a * bをこのModOpsの法で割った余り
     */
    mul(a: bigint, b: bigint): bigint {
        return this.normalize(a * b);
    }

    /**
     * 引数として与えられたbigintの総積を、このModOpsの法で割った余りを返す
     * @param values - 掛け合わせるbigint (可変長引数)
     * @returns valuesの総積をこのModOpsの法で割った余り
     */
    prod(...values: bigint[]): bigint {
        let total = 1n;
        for (const value of values) {
            total = this.mul(total, value);
        }
        return total;
    }

    /**
     * aのb乗を、このModOpsの法で割った余りを返す
     * @param a - 累乗されるbigint
     * @param b - 累乗するbigint (非負整数でなければならない)
     * @returns aのb乗をこのModOpsの法で割った余り
     */
    pow(a: bigint, b: bigint): bigint {
        if (b < 0n) {
            throw new RangeError("Exponent b must be a non-negative integer");
        }
        // m === 1 -> 常に0を返す
        if (this.#mod === 1n) return 0n;
        // 繰り返し二乗法
        let result = 1n;
        let base = this.normalize(a);
        let exponent = b;
        while (exponent > 0n) {
            if (exponent % 2n === 1n) {
                result = this.mul(result, base);
            }
            base = this.mul(base, base);
            exponent = exponent / 2n;
        }
        return result;
    }

    /**
     * 設定された法が素数であることを前提として、このModOpsの法におけるaの逆元を返す
     * (法pにおけるaの逆元 ... av≡1 (mod p) を満たす0以上p未満の唯一の整数vのこと。1÷a≡v(mod p)と考えることもできる)
     * @param a - 逆元を求めるbigint
     * @returns aのこのModOpsの法における逆元
     * @throws Error - aとこのModOpsの法が互いに素でない場合 (つまり、逆元が存在しない場合) にエラーを投げる
     */
    inv(a: bigint): bigint {
        const value = this.normalize(a);
        const [g, x] = extendedGCD(value, this.#mod);
        if (g !== 1n) {
            throw new Error(`Inverse does not exist for ${a} modulo ${this.#mod} because gcd(${a}, ${this.#mod}) = ${g} is not 1.`);
        }
        return this.normalize(x);
    }

    /**
     * a / bを、このModOpsの法で割った余りを返す (bの逆元が存在することが前提)
     * @param a - 除算されるbigint
     * @param b - 除算するbigint (逆元が存在することが前提)
     * @returns a / bをこのModOpsの法で割った余り
     * @throws Error - bの逆元が存在しない場合 (つまり、bとこのModOpsの法が互いに素でない場合) 、内部でinv(b)がエラーを投げる
     */
    div(a: bigint, b: bigint): bigint {
        return this.mul(a, this.inv(b));
    }
}

// ================================================================
// エクスポート
// ================================================================

export { ModOps };
