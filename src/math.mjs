/**
 * - 数学関連の関数を提供します。
 * @module math
 */
/* @ts-self-types="./declares/math.d.ts" */
// @ts-check

/**
 * 2つの整数の最大公約数を求めます。
 * - 時間計算量: O(log(min(a, b)))
 * @template {number | bigint} T - 引数と返り値の型。numberまたはbigint。
 * @param {T} a - 1つ目の整数。
 * @param {T} b - 2つ目の整数。
 * @returns {T} aとbの最大公約数。引数と同じ型で返されます。
 */
const gcd = (a, b) => {
    while (b) {
        [a, b] = [b, /** @type {T} */ (a % b)];
    }
    return a < 0 ? /** @type {T} */ (-a) : a;
};


/**
 * 2つの整数の最小公倍数を求めます。
 * - 時間計算量: O(log(min(a, b)))
 * @template {number | bigint} T - 引数と返り値の型。numberまたはbigint。
 * @param {T} a - 1つ目の整数。
 * @param {T} b - 2つ目の整数。
 * @returns {T} aとbの最小公倍数。引数と同じ型で返されます。
 */
const lcm = (a, b) => {
    if (a === 0 || b === 0) return /** @type {T} */ (0);
    if (a === 0n || b === 0n) return /** @type {T} */ (0n);
    return /** @type {T} */ ((a * b) / gcd(a, b));
}

/**
 * 整数`n`の正の約数を列挙します。`n === 1`なら`[1]`、`n < 1`なら`[]`を返します。
 * - 時間計算量: O(√n)
 * @param {number} n - 対象の整数
 * @returns {number[]} - 正の約数を昇順で列挙した配列
 */
const getDivisors = (n) => {
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
};

export {
    gcd,
    lcm,
    getDivisors,
};
