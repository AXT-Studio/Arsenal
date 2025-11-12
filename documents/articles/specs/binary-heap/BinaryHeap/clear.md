# method: clear

`BinaryHeap`インスタンス内の全ての要素を削除します。

## 構文

```js
binaryHeap.clear()
```

### 引数

- なし

### 戻り値

- なし

## 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap((a, b) => a - b);
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
        - `Map.clear()`が$O(1)$であると仮定した場合の計算量です。
