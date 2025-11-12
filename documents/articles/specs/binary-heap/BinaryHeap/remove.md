# method: remove

`BinaryHeap`インスタンスから指定した要素を削除します。

## 構文

```js
binaryHeap.remove(value)
```

### 引数

- `value: T`
    - 削除する要素です。
    - `value`と等価である複数存在する場合は、そのうちの1つだけが削除されます。
    - オブジェクトを削除したい場合、等価と判断されるためには同じ参照である必要があることに注意してください。

### 戻り値

- `boolean`
    - 要素が削除された場合は`true`、要素が存在しなかった場合は`false`を返します。

## 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap((a, b) => a - b);
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.remove(2)); // true
console.log(heap.pop()); // 5
console.log(heap.remove(10)); // false
```

## 計算量

- 時間計算量
    - 平均: $O(\log N)$ ($N$はヒープ内の要素数)
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)
        - `Map`・`Set`の操作が$O(1)$であると仮定した場合の計算量です。
        - `Map`・`Set`の操作で最悪ケースを引いた場合、$O(N \log N)$になります。
