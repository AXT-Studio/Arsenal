# method: push

`BinaryHeapLite`インスタンスに要素を挿入します。

## 構文

```js
binaryHeap.push(value)
```

### 引数

- `value: T`
    - 挿入する要素です。

### 戻り値

- なし

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
