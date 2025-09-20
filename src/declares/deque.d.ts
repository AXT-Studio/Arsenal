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
export class Deque<T> {
    /**
     * 新しいDequeインスタンスを生成する
     * @param {T[] | undefined} array - 初期値の配列
     * @constructor
     */
    constructor(array?: T[]);
    /**
     * Dequeの先頭に値を挿入する
     * - 時間計算量: 最悪O(1)
     * @param {T} value - 値
     * @returns {void}
     */
    unshift(value: T): void;
    /**
     * Dequeの末尾に値を挿入する
     * - 時間計算量: 最悪O(1)
     * @param {T} value - 値
     * @returns {void}
     */
    push(value: T): void;
    /**
     * Dequeの先頭の値を削除して返す
     * - 時間計算量: 償却O(1), 最悪O(N) (※NはDequeの要素数)
     * @returns {T|undefined} - 先頭の値、またはundefined (空の場合)
     */
    shift(): T | undefined;
    /**
     * Dequeの末尾の値を削除して返す
     * - 時間計算量: 償却O(1), 最悪O(N) (※NはDequeの要素数)
     * @returns {T|undefined} - 末尾の値、またはundefined (空の場合)
     */
    pop(): T | undefined;
    /**
     * Dequeの先頭の値を参照する
     * - 時間計算量: 最悪O(1)
     * @returns {T|undefined} - 先頭の値、またはundefined (空の場合)
     */
    first(): T | undefined;
    /**
     * Dequeの末尾の値を参照する
     * - 時間計算量: 最悪O(1)
     * @returns {T|undefined} - 末尾の値、またはundefined (空の場合)
     */
    last(): T | undefined;
    /**
     * Dequeが空かどうかを判定する
     * - 時間計算量: 最悪O(1)
     * @returns {boolean} - Dequeが空ならtrue
     */
    isEmpty(): boolean;
    /**
     * Dequeを配列に変換する
     * - 時間計算量: 最悪O(N) (※NはDequeの要素数)
     * @returns {T[]} - Dequeの要素を含む配列
     */
    toArray(): T[];
    /**
     * Dequeのサイズを取得する
     * - 時間計算量: 最悪O(1)
     * @returns {number} - Dequeのサイズ
     */
    get size(): number;
}
