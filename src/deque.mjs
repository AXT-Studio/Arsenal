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
 */
class Deque {
    /** @type {T[]} - 先頭側の要素を**逆順**で保持する配列 */
    #front;
    /** @type {T[]} - 末尾側の要素を**正順**で保持する配列 */
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
    /** #frontから#backに要素を移動する (バランス処理, プライベートメソッド) */
    #balance_FrontToBack() {
        // #frontにある要素を逆順にして#backに追加する
        while (this.#front.length > 0) {
            this.#back.push(/** @type {T} */(this.#front.pop()));
        }
    }
    /** #backから#frontに要素を移動する (バランス処理, プライベートメソッド) */
    #balance_BackToFront() {
        // #backにある要素を逆順にして#frontに追加する
        while (this.#back.length > 0) {
            this.#front.push(/** @type {T} */(this.#back.pop()));
        }
    }
    /** @type {function(T): void} Dequeの先頭に値を挿入する */
    unshift(value) {
        // 先頭に値を追加する場合は、#frontにpushするだけでOK (逆順なのでpush)
        this.#front.push(value);
    }
    /** @type {function(T): void} Dequeの末尾に値を挿入する */
    push(value) {
        // 末尾に値を追加する場合は、#backにpushするだけでOK
        this.#back.push(value);
    }
    /** @type {function(): T|undefined} Dequeの先頭の値を削除して返す */
    shift() {
        // #frontが空なら、#backから#frontに要素を移動する
        if (this.#front.length === 0) {
            this.#balance_BackToFront();
        }
        // #frontから値をpopして返す (逆順なのでpop)
        return this.#front.pop();
    }
    /** @type {function(): T|undefined} Dequeの末尾の値を削除して返す */
    pop() {
        // #backが空なら、#frontから#backに要素を移動する
        if (this.#back.length === 0) {
            this.#balance_FrontToBack();
        }
        // #backから値をpopして返す
        return this.#back.pop();
    }
    /** @type {function(): T|undefined} Dequeの先頭の値を参照する */
    first() {
        // #frontが空なら、#back[0]を返す
        if (this.#front.length === 0) {
            return this.#back[0];
        }
        // #frontの最後の値を返す (逆順なので最後が先頭)
        return this.#front[this.#front.length - 1];
    }
    /** @type {function(): T|undefined} Dequeの末尾の値を参照する */
    last() {
        // #backが空なら、#front[0]を返す
        if (this.#back.length === 0) {
            return this.#front[0];
        }
        // #backの最後の値を返す
        return this.#back[this.#back.length - 1];
    }
    /** @type {function(): boolean} Dequeが空かどうかを判定する */
    isEmpty() {
        // #frontと#backの両方が空ならtrue
        return this.#front.length === 0 && this.#back.length === 0;
    }
    /** @type {function(): T[]} Dequeを配列に変換する */
    toArray() {
        // #frontを逆順にして#backと結合した配列を返す
        return [...this.#front].reverse().concat(this.#back);
    }
    /** @type {function(): number} Dequeのサイズを取得する */
    get size() {
        // #frontと#backの長さを合計して返す
        return this.#front.length + this.#back.length;
    }
}

// ================================================================================================
// ES Module Export
// ================================================================================================

export { Deque };
