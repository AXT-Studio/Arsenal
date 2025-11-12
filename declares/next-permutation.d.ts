/**
 * 呼び出されるたびに配列の次の順列を返すジェネレーター関数。`for...of`構文で回すことで順列全列挙が可能。
 * - 時間計算量: O(N! * N) (※Nは配列の要素数。各順列生成がO(N)、順列の総数がN!)
 * @generator
 */
export function next_permutation<T>(arr: T[]): Generator<T[], void, unknown>;
