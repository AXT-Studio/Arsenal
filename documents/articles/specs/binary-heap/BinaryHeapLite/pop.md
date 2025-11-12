# method: pop

`BinaryHeapLite`インスタンスから優先度の最も高い要素を取り出して返します。

## 構文

```js
binaryHeap.pop()
```

### 引数

- なし

### 戻り値

- `T | undefined`
    - 優先度の最も高い要素を返します。
    - Heapが空の場合は`undefined`を返します。

## 例

```js
import { BinaryHeapLite } from 'path/to/binary-heap';
const heap = new BinaryHeapLite((a, b) => a - b);
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

## 計算量

- 時間計算量
    - 平均: $O(1)$
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)
        - `Map`・`Set`の操作が$O(1)$であると仮定した場合の計算量です。
        - `Map`・`Set`の操作で最悪ケースを引いた場合、$O(N \log N)$になります。
