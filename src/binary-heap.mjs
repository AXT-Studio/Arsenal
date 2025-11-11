/**
 * 二分ヒープ (Binary Heap) を提供します。
 * Priority Queueとして利用できます。
 * @module binary-heap
 */

/* ==== 型チェック有効化・型定義ファイルの参照 (Triple-Slash Directives & Deno @ts-self-types) ==== */
// @ts-check
/// <reference path="./../declares/binary-heap.d.ts" />
/* @ts-self-types="./../declares/binary-heap.d.ts" */

/** @type {(a: unknown, b: unknown) => number} compareFnのデフォルト。数値として見たときに小さいものを優先する。 */
const DEFAULT_COMPARE_FN = (a, b) => Number(a) - Number(b);

/**
 * 二分ヒープ (Binary Heap) クラス
 */
class BinaryHeap {
    /** @type {[number, ...unknown[]]} - ヒープの要素を格納する配列 0番目は現在の要素数 */
    #elements;
    /** @type {(a: unknown, b: unknown) => number} - 比較関数(aの優先度が高いなら負、bの優先度が高いなら正、等しいなら0) */
    #compareFn;
    /** @type {Map<unknown, Set<number>>} - 要素のインデックスを保持するマップ */
    #indexMap = new Map();
    /**
     * 新しいBinaryHeapインスタンスを生成する
     * @param {(a: unknown, b: unknown) => number} compareFn - 比較関数
     * @constructor
     */
    constructor(compareFn = DEFAULT_COMPARE_FN) {
        this.#elements = [0];
        this.#compareFn = compareFn;
    }
    /**
     * ヒープの要素数を取得する
     * @returns {number} ヒープの要素数
     */
    get size() {
        return this.#elements[0];
    }
    /**
     * 指定要素をdown-heapで再配置する (プライベートメソッド)
     * @param {number} startIndex - down-heapを開始するインデックス
     * @return {number} 最終的な配置先インデックス
     */
    #downHeap(startIndex) {
        let currentIndex = startIndex;
        while (true) {
            const leftChildIndex = currentIndex * 2;
            const rightChildIndex = currentIndex * 2 + 1;
            if (leftChildIndex > this.#elements[0]) {
                break; // 子がいない
            }
            let compareTargetChildIndex;
            if (rightChildIndex > this.#elements[0]) {
                // 右の子がいない場合は左の子と比較で確定する
                compareTargetChildIndex = leftChildIndex;
            } else {
                // 左右の子で優先度が高い方を比較対象にする
                if (this.#compareFn(this.#elements[leftChildIndex], this.#elements[rightChildIndex]) < 0) {
                    compareTargetChildIndex = leftChildIndex;
                } else {
                    compareTargetChildIndex = rightChildIndex;
                }
            }
            // 親より子の方が優先度高ければ交換
            if (this.#compareFn(this.#elements[compareTargetChildIndex], this.#elements[currentIndex]) < 0) {
                // indexMapを先に更新
                const currentElement = this.#elements[currentIndex];
                const childElement = this.#elements[compareTargetChildIndex];
                const currentIndexSet = this.#indexMap.get(currentElement);
                const childIndexSet = this.#indexMap.get(childElement);
                if (currentIndexSet) {
                    currentIndexSet.delete(currentIndex);
                    currentIndexSet.add(compareTargetChildIndex);
                }
                if (childIndexSet) {
                    childIndexSet.delete(compareTargetChildIndex);
                    childIndexSet.add(currentIndex);
                }
                // 交換
                [this.#elements[currentIndex], this.#elements[compareTargetChildIndex]] = [childElement, currentElement];
                currentIndex = compareTargetChildIndex;
            } else {
                break;
            }
        }
        return currentIndex;
    }
    /**
     * 指定要素をup-heapで再配置する (プライベートメソッド)
     * @param {number} startIndex - up-heapを開始するインデックス
     * @return {number} 最終的な配置先インデックス
     */
    #upHeap(startIndex) {
        let currentIndex = startIndex;
        while (currentIndex > 1) {
            const parentIndex = Math.floor(currentIndex / 2);
            // 子の方が優先度高ければ交換
            if (this.#compareFn(this.#elements[currentIndex], this.#elements[parentIndex]) < 0) {
                // indexMapを先に更新
                const currentElement = this.#elements[currentIndex];
                const parentElement = this.#elements[parentIndex];
                const currentIndexSet = this.#indexMap.get(currentElement);
                const parentIndexSet = this.#indexMap.get(parentElement);
                if (currentIndexSet) {
                    currentIndexSet.delete(currentIndex);
                    currentIndexSet.add(parentIndex);
                }
                if (parentIndexSet) {
                    parentIndexSet.delete(parentIndex);
                    parentIndexSet.add(currentIndex);
                }
                // 交換
                [this.#elements[currentIndex], this.#elements[parentIndex]] = [parentElement, currentElement];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
        return currentIndex;
    }
    /**
     * ヒープに要素を追加する
     * @param {unknown} value - 追加する要素
     */
    insert(value) {
        // 要素を追加
        this.#elements.push(value);
        this.#elements[0]++;
        // indexMapも更新
        const indexSet = this.#indexMap.get(value);
        if (indexSet) {
            indexSet.add(this.#elements[0]);
        } else {
            this.#indexMap.set(value, new Set([this.#elements[0]]));
        }
        // up-heap
        this.#upHeap(this.#elements[0]);
    }
    /**
     * ヒープから最優先の要素を削除して返す
     * @returns {unknown|undefined} 最優先の要素。ヒープが空の場合は`undefined`
     */
    pop() {
        if (this.#elements[0] === 0) {
            return undefined;
        }
        // ルート要素を退避
        const topElement = this.#elements[1];
        // indexMapも更新
        const indexSet = this.#indexMap.get(topElement);
        if (indexSet) {
            indexSet.delete(1);
            if (indexSet.size === 0) {
                this.#indexMap.delete(topElement);
            }
        }
        // 最後の要素をルートに移動し、要素数を1減らす
        const lastElement = this.#elements.pop();
        this.#elements[0]--;
        if (this.#elements[0] > 0) {
            this.#elements[1] = lastElement;
            // indexMapも更新
            const indexSet = this.#indexMap.get(lastElement);
            if (indexSet) {
                indexSet.delete(this.#elements[0] + 1);
                indexSet.add(1);
            }
            // down-heap
            this.#downHeap(1);
        }
        return topElement;
    }
    /**
     * ヒープの最優先の要素を参照する
     * @returns {unknown|undefined} 最優先の要素。ヒープが空の場合は`undefined`
     */
    peek() {
        if (this.#elements[0] === 0) {
            return undefined;
        }
        return this.#elements[1];
    }
}

export {
    BinaryHeap,
};
