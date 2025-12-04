// ================================================================================================
// entrypoint: deque
// 双方向キュー (Deque: Double-Ended Queue) を提供します。
// 両端への要素の追加・削除を償却$O(1)$で行うことができます。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * 双方向キュー (Deque: Double-Ended Queue)
 * @template T Dequeに格納される要素の型
 */
class Deque<T> {
    #front: T[];
    #back: T[];

    /**
     * 新しいDequeインスタンスを生成する
     * @param [array] - 初期値の配列
     * @constructor
     */
    constructor(array?: readonly T[]) {
        this.#front = [];
        // arrayが与えられていたら、#backに入れておけばOK
        this.#back = Array.isArray(array) ? [...array] : [];
    }
    /** #frontから#backに要素を移動する (バランス処理, プライベートメソッド) */
    #balance_FrontToBack(): void {
        // #frontにある要素を逆順にして#backに追加する
        while (this.#front.length > 0) {
            this.#back.push(this.#front.pop() as T);
        }
    }
    /** #backから#frontに要素を移動する (バランス処理, プライベートメソッド) */
    #balance_BackToFront(): void {
        // #backにある要素を逆順にして#frontに追加する
        while (this.#back.length > 0) {
            this.#front.push(this.#back.pop() as T);
        }
    }
    /** Dequeの先頭に値を挿入する */
    unshift(value: T): void {
        // 先頭に値を追加する場合は、#frontにpushするだけでOK (逆順なのでpush)
        this.#front.push(value);
    }
    /** Dequeの末尾に値を挿入する */
    push(value: T): void {
        // 末尾に値を追加する場合は、#backにpushするだけでOK
        this.#back.push(value);
    }
    /** Dequeの先頭の値を削除して返す */
    shift(): T | undefined {
        // #frontが空なら、#backから#frontに要素を移動する
        if (this.#front.length === 0) {
            this.#balance_BackToFront();
        }
        // #frontから値をpopして返す (逆順なのでpop)
        return this.#front.pop();
    }
    /** Dequeの末尾の値を削除して返す */
    pop(): T | undefined {
        // #backが空なら、#frontから#backに要素を移動する
        if (this.#back.length === 0) {
            this.#balance_FrontToBack();
        }
        // #backから値をpopして返す
        return this.#back.pop();
    }
    /** Dequeの先頭の値を参照する */
    first(): T | undefined {
        // #frontが空なら、#back[0]を返す
        if (this.#front.length === 0) {
            return this.#back[0];
        }
        // #frontの最後の値を返す (逆順なので最後が先頭)
        return this.#front[this.#front.length - 1];
    }
    /** Dequeの末尾の値を参照する */
    last(): T | undefined {
        // #backが空なら、#front[0]を返す
        if (this.#back.length === 0) {
            return this.#front[0];
        }
        // #backの最後の値を返す
        return this.#back[this.#back.length - 1];
    }
    /** Dequeが空かどうかを判定する */
    isEmpty(): boolean {
        // #frontと#backの両方が空ならtrue
        return this.#front.length === 0 && this.#back.length === 0;
    }
    /** Dequeを配列に変換する */
    toArray(): T[] {
        // #frontを逆順にして#backと結合した配列を返す
        return [...this.#front].reverse().concat(this.#back);
    }
    /** Dequeのサイズを取得する */
    get size(): number {
        // #frontと#backの長さを合計して返す
        return this.#front.length + this.#back.length;
    }
}

// ================================================================
// エクスポート
// ================================================================

export { Deque };
