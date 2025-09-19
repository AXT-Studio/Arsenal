/**
 * - 双方向キュー (Deque: Double-Ended Queue) を提供します。
 * - 2つの配列を用いた実装により、両端への要素の追加・削除を償却$O(1)$で行うことができます。
 * @module deque
 */
// @ts-check

/**
 * 双方向キュー (Deque: Double-Ended Queue) クラス
 * - 先頭と末尾の両方から効率的に要素の追加・削除が可能なデータ構造。
 *
 * @template T - Dequeに格納される要素の型。
 * @example
 * ```js
 * import { Deque } from 'deque'
 * const deque = new Deque([1, 2, 3]);
 * deque.push(4);        // 末尾に4を追加
 * deque.unshift(0);     // 先頭に0を追加
 * console.log(deque.toArray()); // [0, 1, 2, 3, 4]
 * console.log(deque.pop());      // 末尾の要素を削除して返す (4)
 * console.log(deque.shift());    // 先頭の要素を削除して返す (0)
 * console.log(deque.first());    // 先頭の要素を参照 (1)
 * console.log(deque.last());     // 末尾の要素を参照 (3)
 * console.log(deque.size);       // Dequeのサイズ (3)
 * console.log(deque.isEmpty());   // Dequeが空かどうか (false)
 * ```
 */
class Deque {
    /**
     * @type {T[]} - 先頭側の要素を**逆順**で保持する配列
     */
    #front;
    /**
     * @type {T[]} - 末尾側の要素を**正順**で保持する配列
     */
    #back;
    /**
     * 新しいDequeインスタンスを生成する
     * @param {T[] | undefined} array - 初期値の配列
     * @constructor
     */
    constructor(array) {
        this.#front = [];
        // arrayが与えられていたら、#backに入れておけばOK
        this.#back = Array.isArray(array) ? [...array] : [];
    }
    /**
     * #frontから#backに要素を移動する (バランス処理, プライベートメソッド)
     */
    #balance_FrontToBack() {
        // #frontにある要素を逆順にして#backに追加する
        while (this.#front.length > 0) {
            this.#back.push(/** @type {T} */(this.#front.pop()));
        }
    }
    /**
     * #backから#frontに要素を移動する (バランス処理, プライベートメソッド)
     */
    #balance_BackToFront() {
        // #backにある要素を逆順にして#frontに追加する
        while (this.#back.length > 0) {
            this.#front.push(/** @type {T} */(this.#back.pop()));
        }
    }
    /**
     * Dequeの先頭に値を挿入する
     * - 時間計算量: 最悪O(1)
     * @param {T} value - 値
     * @returns {void}
     */
    unshift(value) {
        // 先頭に値を追加する場合は、#frontにpushするだけでOK (逆順なのでpush)
        this.#front.push(value);
    }
    /**
     * Dequeの末尾に値を挿入する
     * - 時間計算量: 最悪O(1)
     * @param {T} value - 値
     * @returns {void}
     */
    push(value) {
        // 末尾に値を追加する場合は、#backにpushするだけでOK
        this.#back.push(value);
    }
    /**
     * Dequeの先頭の値を削除して返す
     * - 時間計算量: 償却O(1), 最悪O(N) (※NはDequeの要素数)
     * @returns {T|undefined} - 先頭の値、またはundefined (空の場合)
     */
    shift() {
        // #frontが空なら、#backから#frontに要素を移動する
        if (this.#front.length === 0) {
            this.#balance_BackToFront();
        }
        // #frontから値をpopして返す (逆順なのでpop)
        return this.#front.pop();
    }
    /**
     * Dequeの末尾の値を削除して返す
     * - 時間計算量: 償却O(1), 最悪O(N) (※NはDequeの要素数)
     * @returns {T|undefined} - 末尾の値、またはundefined (空の場合)
     */
    pop() {
        // #backが空なら、#frontから#backに要素を移動する
        if (this.#back.length === 0) {
            this.#balance_FrontToBack();
        }
        // #backから値をpopして返す
        return this.#back.pop();
    }
    /**
     * Dequeの先頭の値を参照する
     * - 時間計算量: 最悪O(1)
     * @returns {T|undefined} - 先頭の値、またはundefined (空の場合)
     */
    first() {
        // #frontが空なら、#back[0]を返す
        if (this.#front.length === 0) {
            return this.#back[0];
        }
        // #frontの最後の値を返す (逆順なので最後が先頭)
        return this.#front[this.#front.length - 1];
    }
    /**
     * Dequeの末尾の値を参照する
     * - 時間計算量: 最悪O(1)
     * @returns {T|undefined} - 末尾の値、またはundefined (空の場合)
     */
    last() {
        // #backが空なら、#front[0]を返す
        if (this.#back.length === 0) {
            return this.#front[0];
        }
        // #backの最後の値を返す
        return this.#back[this.#back.length - 1];
    }
    /**
     * Dequeが空かどうかを判定する
     * - 時間計算量: 最悪O(1)
     * @returns {boolean} - Dequeが空ならtrue
     */
    isEmpty() {
        // #frontと#backの両方が空ならtrue
        return this.#front.length === 0 && this.#back.length === 0;
    }
    /**
     * Dequeを配列に変換する
     * - 時間計算量: 最悪O(N) (※NはDequeの要素数)
     * @returns {T[]} - Dequeの要素を含む配列
     */
    toArray() {
        // #frontを逆順にして#backと結合した配列を返す
        return [...this.#front].reverse().concat(this.#back);
    }
    /**
     * Dequeのサイズを取得する
     * - 時間計算量: 最悪O(1)
     * @returns {number} - Dequeのサイズ
     */
    get size() {
        // #frontと#backの長さを合計して返す
        return this.#front.length + this.#back.length;
    }
}

// ================================================================================================
// ES Module Export
// ================================================================================================

export { Deque };
