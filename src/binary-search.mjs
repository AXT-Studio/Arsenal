/**
 * このモジュールは、ソート済み配列に対して二分探索を行うメソッド群を提供します。
 * C++のSTLにある同名の関数にインスパイアされています。
 * @module binary-search
 */
// @ts-check

/**
 * Array#sort()でcompareFnを指定しなかったときのデフォルトの挙動と同じ挙動を示す比較関数
 * @param {any} a 
 * @param {any} b 
 * @returns {number}
 */
const DEFAULT_COMPARE_FN = (a, b) => {
    const [A, B] = [String(a), String(b)];
    return (A < B) ? -1 : (A > B) ? 1 : 0
};

/**
 * 配列`array`に`target`と等しい値が存在するかどうかを、二分探索を用いて判定します。
 * (時間計算量: $O(\log n)$)
 * @template T
 * @param {T[]} array - `compareFn`を用いてソート済みの配列
 * @param {T} target - 探索する値
 * @param {(a: T, b: T) => number} [compareFn] - 比較に用いる関数。デフォルト値はArray#sort()と同じ。
 * @returns {boolean} `target`と等しい値が`array`に存在する場合は`true`、存在しない場合は`false`
 */
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

/**
 * 配列`array`の中で、`target`以上と判定される最初の要素のインデックスを返します。
 * (時間計算量: $O(\log n)$)
 *
 * @template T
 * @param {T[]} array - `compareFn`を用いてソート済みの配列
 * @param {T} target - 探索する値
 * @param {(a: T, b: T) => number} [compareFn] - 比較に用いる関数。デフォルト値はArray#sort()と同じ。
 * @returns {number} `target`以上と判定される最初の要素のインデックス。`array`内に`target`以上の要素が存在しない場合は`array.length`を返します。
 */
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

/**
 * 配列`array`の中で、`target`より大きいと判定される最初の要素のインデックスを返します。
 * (時間計算量: $O(\log n)$)
 *
 * @template T
 * @param {T[]} array - `compareFn`を用いてソート済みの配列
 * @param {T} target - 探索する値
 * @param {(a: T, b: T) => number} [compareFn] - 比較に用いる関数。デフォルト値はArray#sort()と同じ。
 * @returns {number} `target`より大きいと判定される最初の要素のインデックス。`array`内に`target`より大きい要素が存在しない場合は`array.length`を返します。
 */
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
