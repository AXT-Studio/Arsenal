/**
 * - ソート済み配列に対して二分探索を行うメソッド群を提供します。
 * - C++のSTLにある同名の関数にインスパイアされています。
 * @module binary-search
 */
/* @ts-self-types="./../declares/binary-search.d.ts" */
// @ts-check

/** @type {(a: any, b: any) => number} Array#sort()でcompareFnを指定しなかったときのデフォルトの挙動と同じ挙動を示す比較関数 */
const DEFAULT_COMPARE_FN = (a, b) => {
    const [A, B] = [String(a), String(b)];
    return (A < B) ? -1 : (A > B) ? 1 : 0
};

/** @template {any} T */
/** @type {(array: T[], target: T, compareFn?: (a: T, b: T) => number) => boolean} 配列`array`に`target`と等しい値が存在するかどうかを、二分探索を用いて判定する。 */
const binary_search = (array, target, compareFn = DEFAULT_COMPARE_FN) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const cmp = compareFn(array[mid], target);

        if (cmp === 0) return true;
        if (cmp < 0) low = mid + 1;
        else high = mid - 1;
    }

    return false;
};

/** @template {any} T */
/** @type {(array: T[], target: T, compareFn?: (a: T, b: T) => number) => number} 配列`array`の中で、`target`以上と判定される最初の要素のインデックスを返す。(`array`内に`target`以上の要素が存在しない場合は`array.length`を返す。) */
const lower_bound = (array, target, compareFn = DEFAULT_COMPARE_FN) => {
    let low = 0;
    let high = array.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const cmp = compareFn(array[mid], target);

        if (cmp < 0) low = mid + 1;
        else high = mid;
    }

    return low;
};

/** @template {any} T */
/** @type {(array: T[], target: T, compareFn?: (a: T, b: T) => number) => number} 配列`array`の中で、`target`より大きいと判定される最初の要素のインデックスを返す。(`array`内に`target`より大きい要素が存在しない場合は`array.length`) */
const upper_bound = (array, target, compareFn = DEFAULT_COMPARE_FN) => {
    let low = 0;
    let high = array.length;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const cmp = compareFn(array[mid], target);

        if (cmp <= 0) low = mid + 1;
        else high = mid;
    }

    return low;
};

export {
    binary_search,
    lower_bound,
    upper_bound
};
