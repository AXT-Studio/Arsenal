# method: clear

`BinaryHeapLite`インスタンス内の全ての要素を削除します。

## 構文

```js
binaryHeapLite.clear()
```

### 引数

- なし

### 戻り値

- なし

## 例

```js
import { BinaryHeapLite } from 'path/to/binary-heap-lite';
const heap = new BinaryHeapLite((a, b) => a - b);
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
heap.clear();
console.log(heap.pop()); // undefined
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
