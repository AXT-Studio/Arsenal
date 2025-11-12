# method: peek

`BinaryHeapLite`インスタンスの優先度の最も高い要素を返しますが、要素は取り出しません。

## 構文

```js
binaryHeap.peek()
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
console.log(heap.peek()); // 2
console.log(heap.pop()); // 2
console.log(heap.peek()); // 5
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
