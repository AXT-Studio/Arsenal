# getter: size

`BinaryHeap`インスタンスの要素数を返します。

## 構文

```js
binaryHeap.size
```

## 戻り値

- `number`
    - `BinaryHeap`インスタンスの要素数を返します。

## 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap();
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.size); // 3
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
