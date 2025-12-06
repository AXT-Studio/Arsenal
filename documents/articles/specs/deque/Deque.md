# class: Deque

先頭と末尾の両方から効率的に要素の追加・削除が可能なデータ構造である「双方向キュー (Deque: Double-Ended Queue)」です。

:::info TOC
[[toc]]
:::

## Members

### `new Deque<T>(array?: readonly T[]): Deque<T>`

`Deque`クラスのコンストラクタです。新しい`Deque`インスタンスを作成します。

#### 引数

- `array: T[]` (省略可能)
    - 初期要素として使用する配列です。この配列の要素が`Deque`インスタンスに順番に追加されます。
    - 省略した場合、空の`Deque`インスタンスが作成されます。

#### 戻り値

- `Deque<T>`
    - 新しく作成された`Deque`インスタンスを返します。

#### 例

```js
import { Deque } from 'path/to/deque'

const deque1 = new Deque()
const deque2 = new Deque([1, 2, 3])
console.log(deque1.size) // 0
console.log(deque2.size) // 3
```

#### 計算量

- 時間計算量
    - 引数を省略した場合
        - 最悪: $O(1)$
    - 引数に配列を渡した場合
        - 最悪: $O(N)$ ($N$は配列の要素数)

### `Deque<T>.prototype.unshift(value: T): void`

Dequeインスタンスの先頭に値を挿入します。

#### 引数

- `value: T` — 挿入する値です。

#### 戻り値

- `void`

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([2, 3, 4]);
deque.unshift(1);
console.log(deque.size); // 4
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `Deque<T>.prototype.push(value: T): void`

Dequeインスタンスの末尾に値を挿入します。

#### 引数

- `value: T` — 挿入する値です。

#### 戻り値

- `void`

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
deque.push(4);
console.log(deque.size); // 4
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `Deque<T>.prototype.shift(): T | undefined`

Dequeインスタンスの先頭の値を削除して返します。

#### 引数

- なし

#### 戻り値

- `T | undefined`
    - Dequeが空の場合は`undefined`を返します。

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
console.log(deque.shift()); // 1
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `Deque<T>.prototype.pop(): T | undefined`

Dequeインスタンスの末尾の値を削除して返します。

#### 引数

- なし

#### 戻り値

- `T | undefined`
    - Dequeが空の場合は`undefined`を返します。

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
console.log(deque.pop()); // 3
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `Deque<T>.prototype.first(): T | undefined`

Dequeインスタンスの先頭の値を参照します（削除はしません）。

#### 引数

- なし

#### 戻り値

- `T | undefined`

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
console.log(deque.first()); // 1
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `Deque<T>.prototype.last(): T | undefined`

Dequeインスタンスの末尾の値を参照します（削除はしません）。

#### 引数

- なし

#### 戻り値

- `T | undefined`

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
console.log(deque.last()); // 3
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `Deque<T>.prototype.isEmpty(): boolean`

Dequeが空であれば`true`を返します。

#### 引数

- なし

#### 戻り値

- `boolean`

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque();
console.log(deque.isEmpty()); // true
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `Deque<T>.prototype.toArray(): T[]`

Dequeの中身を配列として返します（`#front` と `#back` を結合した配列）。

#### 引数

- なし

#### 戻り値

- `T[]`

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque(['A', 'B']);
deque.push('C');
console.log(deque.toArray()); // [ 'A', 'B', 'C' ]
```

#### 計算量

- 時間計算量
    - 最悪: $O(N)$

### `get Deque<T>.prototype.size(): number`

Dequeインスタンスの要素数を返します。

#### 戻り値

- `number`

#### 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
console.log(deque.size); // 3
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$
