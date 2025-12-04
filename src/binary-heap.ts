// ================================================================================================
// entrypoint: binary-heap
// 二分ヒープ (Binary Heap) を提供します。Priority Queueとして利用できます。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/** compareFnのデフォルト。数値として見たときに小さいものを優先する。 */
const DEFAULT_COMPARE_FN = (a: unknown, b: unknown): number =>
    Number(a) - Number(b);

class BinaryHeap<T> {
    /** ヒープの要素を格納する配列 0番目は現在の要素数 */
    #elements: [number, ...T[]];
    /** 比較関数(aの優先度が高いなら負、bの優先度が高いなら正、等しいなら0) */
    #compareFn: (a: T, b: T) => number;
    /** 要素のインデックスを保持するマップ */
    #indexMap: Map<T, Set<number>>;
    /**
     * 新しいBinaryHeapインスタンスを生成する
     * @param compareFn - 比較関数(aの優先度が高いなら負、bの優先度が高いなら正、等しいなら0)
     * @param [initialValues] - 初期値の配列 (省略可)
     * @constructor
     */
    constructor(
        compareFn: (a: T, b: T) => number = DEFAULT_COMPARE_FN,
        initialValues: T[] = [],
    ) {
        this.#compareFn = compareFn;
        this.#elements = [initialValues.length, ...initialValues];
        this.#indexMap = new Map<T, Set<number>>();
        // initialValuesのheapify
        for (let i = Math.floor(this.#elements[0] / 2); i >= 1; i--) {
            this.#downHeap(i, false);
        }
        // indexMapの初期化
        for (let i = 1; i <= this.#elements[0]; i++) {
            const value = this.#elements[i];
            const indexSet = this.#indexMap.get(value as T);
            if (indexSet) {
                indexSet.add(i);
            } else {
                this.#indexMap.set(value as T, new Set([i]));
            }
        }
    }
    /**
     * ヒープの要素数を取得する
     */
    get size(): number {
        return this.#elements[0];
    }
    /**
     * 指定要素をdown-heapで再配置する (プライベートメソッド)
     * @param startIndex - down-heapを開始するインデックス
     * @param [editIndexMap=true] - indexMapも更新するかどうか (falseにするのはheapify時くらい)
     * @return 最終的な配置先インデックス
     */
    #downHeap(startIndex: number, editIndexMap: boolean = true): number {
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
                if (
                    this.#compareFn(
                        this.#elements[leftChildIndex] as T,
                        this.#elements[rightChildIndex] as T,
                    ) < 0
                ) {
                    compareTargetChildIndex = leftChildIndex;
                } else {
                    compareTargetChildIndex = rightChildIndex;
                }
            }
            // 親より子の方が優先度高ければ交換
            if (
                this.#compareFn(
                    this.#elements[compareTargetChildIndex] as T,
                    this.#elements[currentIndex] as T,
                ) < 0
            ) {
                // indexMapを先に更新
                const currentElement = this.#elements[currentIndex];
                const childElement = this.#elements[compareTargetChildIndex];
                if (editIndexMap) {
                    const currentIndexSet = this.#indexMap.get(
                        currentElement as T,
                    );
                    const childIndexSet = this.#indexMap.get(childElement as T);
                    if (currentIndexSet) {
                        currentIndexSet.delete(currentIndex);
                        currentIndexSet.add(compareTargetChildIndex);
                    }
                    if (childIndexSet) {
                        childIndexSet.delete(compareTargetChildIndex);
                        childIndexSet.add(currentIndex);
                    }
                }
                // 交換
                [
                    this.#elements[currentIndex],
                    this.#elements[compareTargetChildIndex],
                ] = [childElement, currentElement];
                currentIndex = compareTargetChildIndex;
            } else {
                break;
            }
        }
        return currentIndex;
    }
    /**
     * 指定要素をup-heapで再配置する (プライベートメソッド)
     * @param startIndex - up-heapを開始するインデックス
     * @return 最終的な配置先インデックス
     */
    #upHeap(startIndex: number): number {
        let currentIndex = startIndex;
        while (currentIndex > 1) {
            const parentIndex = Math.floor(currentIndex / 2);
            // 子の方が優先度高ければ交換
            if (
                this.#compareFn(
                    this.#elements[currentIndex] as T,
                    this.#elements[parentIndex] as T,
                ) < 0
            ) {
                // indexMapを先に更新
                const currentElement = this.#elements[currentIndex];
                const parentElement = this.#elements[parentIndex];
                const currentIndexSet = this.#indexMap.get(currentElement as T);
                const parentIndexSet = this.#indexMap.get(parentElement as T);
                if (currentIndexSet) {
                    currentIndexSet.delete(currentIndex);
                    currentIndexSet.add(parentIndex);
                }
                if (parentIndexSet) {
                    parentIndexSet.delete(parentIndex);
                    parentIndexSet.add(currentIndex);
                }
                // 交換
                [this.#elements[currentIndex], this.#elements[parentIndex]] = [
                    parentElement,
                    currentElement,
                ];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
        return currentIndex;
    }
    /**
     * ヒープに要素を追加する
     * @param value - 追加する要素
     */
    push(value: T) {
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
     * @returns 最優先の要素。ヒープが空の場合は`undefined`
     */
    pop(): T | undefined {
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
        const lastElement = this.#elements.pop() as T;
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
     * @returns 最優先の要素。ヒープが空の場合は`undefined`
     */
    peek(): T | undefined {
        if (this.#elements[0] === 0) {
            return undefined;
        }
        return this.#elements[1];
    }
    /**
     * 指定要素をヒープから削除する
     * @param value - 削除する要素
     * @returns 指定要素が存在して削除された場合は`true`、存在しなかった場合は`false`
     */
    remove(value: T): boolean {
        const indexSet = this.#indexMap.get(value);
        if (!indexSet || indexSet.size === 0) {
            return false;
        }
        // indexSetから1つインデックスを取得
        const removeTargetIndex = indexSet.values().next().value;
        if (removeTargetIndex === undefined) {
            return false;
        }
        // indexSetからremoveTargetIndexを削除
        indexSet.delete(removeTargetIndex);
        if (indexSet.size === 0) {
            this.#indexMap.delete(value);
        }
        // 削除対象が最後の要素の場合
        if (removeTargetIndex === this.#elements[0]) {
            this.#elements.pop(); // 末尾を削除
            this.#elements[0]--; // 要素数を減らす
            return true;
        }
        // 配列の末尾の要素を取得
        const lastElement = this.#elements.pop() as T;
        this.#indexMap.get(lastElement)?.delete(this.#elements[0]);
        this.#elements[0]--;
        // 配列の末尾の要素をremoveTargetIndexに移動
        this.#elements[removeTargetIndex] = lastElement;
        const removeTargetIndexSet = this.#indexMap.get(lastElement);
        if (removeTargetIndexSet) {
            removeTargetIndexSet.add(removeTargetIndex);
        } else {
            this.#indexMap.set(lastElement, new Set([removeTargetIndex]));
        }
        // up-heapとdown-heapの両方を試みる その必要がなければ何もしないように作ったので簡単にかける
        const finalIndex = this.#upHeap(removeTargetIndex);
        if (finalIndex === removeTargetIndex) {
            this.#downHeap(removeTargetIndex);
        }
        return true;
    }
    /**
     * ヒープ内の要素の値を更新する
     * @param oldValue - 更新前の値
     * @param newValue - 更新後の値
     * @returns 更新に成功した場合は`true`、`oldValue`が見つからなかった場合は`false`
     */
    update(oldValue: T, newValue: T): boolean {
        if (this.remove(oldValue)) {
            this.push(newValue);
            return true;
        }
        return false;
    }
    /**
     * ヒープを空にする
     */
    clear(): void {
        this.#elements = [0];
        this.#indexMap.clear();
    }
}

// ================================================================
// エクスポート
// ================================================================

export { BinaryHeap };
