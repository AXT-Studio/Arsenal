# class: BinaryHeap

二分ヒープ (Binary Heap) です。優先度付きキュー (Priority Queue) として利用できます。

[`remove()`](<!-- Need Re-Link -->)・[`update()`](<!-- Need Re-Link -->)が不要である場合は、より軽量な[`BinaryHeapLite`](<!-- Need Re-Link -->)を利用することを推奨します。

## Members

### `new BinaryHeap<T>(compareFn?: (a: T, b: T) => number, initialValues?: T[]): BinaryHeap<T>`

`BinaryHeap`クラスのコンストラクタです。新しい`BinaryHeap`インスタンスを作成します。

#### 引数

- `compareFn: (a: T, b: T) => number` (省略可能)
    - 要素の優先度を比較するための関数です。
    - `a`の優先度が`b`より高い場合は負の値、`b`の優先度が`a`より高い場合は正の値、等しい場合は0を返す必要があります。
    - 省略した場合、数値の昇順で比較する関数(`(a, b) => a - b`)が使用されます。
- `initialValues: T[]` (省略可能)
    - 初期要素として使用する配列です。
    - ここで与えた要素は、全体で$O(N)$の時間計算量でヒープに追加されます。 (※$N$は`initialValues`の要素数)
        - $K$個の要素を個別に`push`する場合は$O(K \log K)$かかるため、最初に大量の要素を追加する場合はこの引数を使用するほうが高速です。

#### 戻り値

- `BinaryHeap<T>`
    - 新しく作成された`BinaryHeap`インスタンスを返します。

#### 例

```js
import { BinaryHeap } from 'path/to/binary-heap'

const heap = new BinaryHeap();
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

```js
import { BinaryHeap } from 'path/to/binary-heap';
const initialValues = [5, 2, 8];
const heap = new BinaryHeap((a, b) => a - b, initialValues);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

#### 計算量

- 時間計算量
    - `initialValues`を指定しない場合
        - 最悪: $O(1)$
    - `initialValues`を指定した場合
        - 最悪: $O(N)$ ($N$は`initialValues`の要素数)

### `BinaryHeap<T>.prototype.peek(): T | undefined`

`BinaryHeap`インスタンスの優先度の最も高い要素を返しますが、要素は取り出しません。

#### 引数

- なし

#### 戻り値

- `T | undefined`
    - 優先度の最も高い要素を返します。
    - Heapが空の場合は`undefined`を返します。

#### 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap((a, b) => a - b);
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.peek()); // 2
console.log(heap.pop()); // 2
console.log(heap.peek()); // 5
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `BinaryHeap<T>.prototype.pop(): T | undefined`

`BinaryHeap`インスタンスから優先度の最も高い要素を取り出して返します。

#### 引数

- なし

#### 戻り値

- `T | undefined`
    - 優先度の最も高い要素を返します。
    - Heapが空の場合は`undefined`を返します。

#### 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap((a, b) => a - b);
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

#### 計算量

- 時間計算量
    - 平均: $O(1)$
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)
        - `Map`・`Set`の操作が$O(1)$であると仮定した場合の計算量です。
        - `Map`・`Set`の操作で最悪ケースを引いた場合、$O(N \log N)$になります。

### `BinaryHeap<T>.prototype.push(value: T): void`

`BinaryHeap`インスタンスに要素を挿入します。

#### 引数

- `value: T`
    - 挿入する要素です。

#### 戻り値

- なし

#### 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap((a, b) => a - b);
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

#### 計算量

- 時間計算量
    - 平均: $O(1)$
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)
        - `Map`・`Set`の操作が$O(1)$であると仮定した場合の計算量です。
        - `Map`・`Set`の操作で最悪ケースを引いた場合、$O(N \log N)$になります。

### `BinaryHeap<T>.prototype.remove(value: T): boolean`

`BinaryHeap`インスタンスから指定した要素を削除します。

#### 引数

- `value: T`
    - 削除する要素です。
    - `value`と等価である複数存在する場合は、そのうちの1つだけが削除されます。
    - オブジェクトを削除したい場合、等価と判断されるためには同じ参照である必要があることに注意してください。

#### 戻り値

- `boolean`
    - 要素が削除された場合は`true`、要素が存在しなかった場合は`false`を返します。

#### 例

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

#### 計算量

- 時間計算量
    - 平均: $O(\log N)$ ($N$はヒープ内の要素数)
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)
        - `Map`・`Set`の操作が$O(1)$であると仮定した場合の計算量です。
        - `Map`・`Set`の操作で最悪ケースを引いた場合、$O(N \log N)$になります。

### `BinaryHeap<T>.prototype.update(oldValue: T, newValue: T): boolean`

BinaryHeapインスタンス内の指定した要素を書き換えます。

#### 引数

- `oldValue: T`
    - 書き換えたい要素です。
    - `value`と等価である複数存在する場合は、そのうちの1つだけが削除されます。
    - オブジェクトを削除したい場合、等価と判断されるためには同じ参照である必要があることに注意してください。
- `newValue: T`
    - 新しい要素です。

#### 戻り値

- `boolean`
    - 要素が見つかり書き換えが成功した場合は`true`、要素が見つからなかった場合は`false`を返します。

#### 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap((a, b) => a - b);
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
heap.update(5, 1);
console.log(heap.pop()); // 1
console.log(heap.pop()); // 8
```

#### 計算量

- 時間計算量
    - 平均: $O(\log N)$
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)
        - `Map`・`Set`の操作が$O(1)$であると仮定した場合の計算量です。
        - `Map`・`Set`の操作で最悪ケースを引いた場合、$O(N \log N)$になります。

### `get BinaryHeap<T>.prototype.size(): number`

`BinaryHeap`インスタンスの要素数を返します。

#### 戻り値

- `number`
    - `BinaryHeap`インスタンスの要素数を返します。

#### 例

```js
import { BinaryHeap } from 'path/to/binary-heap';
const heap = new BinaryHeap();
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.size); // 3
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$
