/**
 * - 双方向キュー (Deque: Double-Ended Queue) を提供します。
 * - 2つの配列を用いた実装により、両端への要素の追加・削除を償却$O(1)$で行うことができます。
 * @module deque
 */
/* @ts-self-types="./../declares/deque.d.ts" */
// @ts-check

/**
 * 双方向キュー (Deque: Double-Ended Queue) クラス
 * - 先頭と末尾の両方から効率的に要素の追加・削除が可能なデータ構造。
 *
 * @template {any} T - Dequeに格納される要素の型。
 * @example
 * ```js
 * import { Deque } from 'deque'
 * // Dequeクラスのインスタンスを作成（初期値あり）
 * const deque = new Deque(['B', 'C']);
 * console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C" ]
 * // push: 末尾に要素を追加
 * deque.push('D');
 * console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C", "D" ]
 * // unshift: 先頭に要素を追加
 * deque.unshift('A');
 * console.log(deque.toArray()); // Expected Log Output : <object> [ "A", "B", "C", "D" ]
 * // size: 要素数を取得
 * console.log(deque.size);      // Expected Log Output : <number> 4
 * // first/last: 先頭と末尾の要素を参照（削除はしない）
 * console.log(deque.first());   // Expected Log Output : <string> "A"
 * console.log(deque.last());    // Expected Log Output : <string> "D"
 * // shift: 先頭から要素を削除して取得
 * const shiftedItem = deque.shift();
 * console.log(shiftedItem);     // Expected Log Output : <string> "A"
 * console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C", "D" ]
 * // pop: 末尾から要素を削除して取得
 * const poppedItem = deque.pop();
 * console.log(poppedItem);      // Expected Log Output : <string> "D"
 * console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C" ]
 * // 残りの要素をすべて削除
 * deque.shift();
 * deque.shift();
 * // isEmpty: Dequeが空かどうかを確認
 * console.log(deque.isEmpty()); // Expected Log Output : <boolean> true
 * console.log(deque.size);      // Expected Log Output : <number> 0
 * // 空のDequeから値を取得しようとするとundefinedが返る
 * console.log(deque.pop());     // Expected Log Output : <undefined> undefined
 * console.log(deque.first());   // Expected Log Output : <undefined> undefined
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
