# class: BinaryHeapLite

`BinaryHeap`の軽量版です。`BinaryHeap`と比較すると、`remove`と`update`がない代わりに、定数倍高速化がされています。

## Members

### `new BinaryHeapLite<T>(compareFn?: (a: T, b: T) => number, initialValues?: T[]): BinaryHeapLite<T>`

`BinaryHeapLite`クラスのコンストラクタです。新しい`BinaryHeapLite`インスタンスを作成します。

#### 引数

- `compareFn: (a: T, b: T) => number` (省略可能)
    - 要素の優先度を比較するための関数です。
    - `a`の優先度が`b`より高い場合は負の値、`b`の優先度が`a`より高い場合は正の値、等しい場合は0を返す必要があります。
    - 省略した場合、数値の昇順で比較する関数(`(a, b) => a - b`)が使用されます。
- `initialValues: T[]` (省略可能)
    - 初期要素として使用する配列です。最初から複数の要素を与える場合は効率的にヒープ化されます。

#### 戻り値

- `BinaryHeapLite<T>`
    - 新しく作成された`BinaryHeapLite`インスタンスを返します。

#### 例

```js
import { BinaryHeapLite } from 'path/to/binary-heap'

const heap = new BinaryHeapLite();
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

### `BinaryHeapLite<T>.prototype.peek(): T | undefined`

`BinaryHeapLite`インスタンスの優先度の最も高い要素を返しますが、要素は取り出しません。

#### 引数

- なし

#### 戻り値

- `T | undefined`
    - 優先度の最も高い要素を返します。
    - Heapが空の場合は`undefined`を返します。

#### 例

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

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `BinaryHeapLite<T>.prototype.pop(): T | undefined`

`BinaryHeapLite`インスタンスから優先度の最も高い要素を取り出して返します。

#### 引数

- なし

#### 戻り値

- `T | undefined`
    - 優先度の最も高い要素を返します。
    - Heapが空の場合は`undefined`を返します。

#### 例

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

#### 計算量

- 時間計算量
    - 平均: $O(1)$
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)

### `BinaryHeapLite<T>.prototype.push(value: T): void`

`BinaryHeapLite`インスタンスに要素を挿入します。

#### 引数

- `value: T`
    - 挿入する要素です。

#### 戻り値

- なし

#### 例

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

#### 計算量

- 時間計算量
    - 平均: $O(1)$
    - 最悪: $O(\log N)$ ($N$はヒープ内の要素数)

### `BinaryHeapLite<T>.prototype.clear(): void`

`BinaryHeapLite`インスタンス内の全ての要素を削除します。

#### 引数

- なし

#### 戻り値

- なし

#### 例

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

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `get BinaryHeapLite<T>.prototype.size(): number`

`BinaryHeapLite`インスタンスの要素数を返します。

#### 戻り値

- `number`
    - `BinaryHeapLite`インスタンスの要素数を返します。

#### 例

```js
import { BinaryHeapLite } from 'path/to/binary-heap';
const heap = new BinaryHeapLite();
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.size); // 3
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$
