# class: Treap

非回転Treapの実装です。C++の`std::set` / `std::map`に相当する機能を提供します。

:::info TOC
[[toc]]
:::

## Members

### `new Treap<K, V>(keyCompareFn?: (a: K, b: K) => number): Treap<K, V>`

Treapのコンストラクタです。キーの比較関数を省略した場合は`<`/`>`演算子を用いた既定の比較が使われます。

#### 引数

- `keyCompareFn?: (a: K, b: K) => number`
  - キー`a`が`b`より前なら負、後なら正、等しければ`0`を返す比較関数。

#### 戻り値

- `Treap<K, V>`

#### 例

```js
import { Treap } from 'path/to/treap';
const treap = new Treap((a, b) => a - b);
```

### `Treap<K, V>.prototype.insert(key: K, value: V): void`

キーと値のペアをTreapに挿入します。既に同じキーが存在する場合は値を上書きします。

#### 引数

- `key: K`
- `value: V`

#### 戻り値

- `void`

#### 例

```js
treap.insert(1, 'one');
treap.insert(2, 'two');
treap.insert(1, 'uno'); // 1のvalueは"uno"に上書きされる
```

#### 計算量

- 期待: $O(\log n)$, 最悪: $O(n)$

### `Treap<K, V>.prototype.erase(key: K): void`

指定したキーを持つ要素を削除します（存在しない場合は何もしません）。

#### 引数

- `key: K`

#### 戻り値

- `void`

#### 例

```js
treap.erase(1);
```

#### 計算量

- 期待: $O(\log n)$, 最悪: $O(n)$

### `Treap<K, V>.prototype.get(key: K): V | undefined`

キーに対応する値を取得します。存在しない場合は`undefined`を返します。

#### 引数

- `key: K`

#### 戻り値

- `V | undefined`

#### 例

```js
treap.get(1);
```

#### 計算量

- 期待: $O(\log n)$, 最悪: $O(n)$

### `Treap<K, V>.prototype.lowerBound(key: K): { key: K; value: V } | undefined`

キー以上の最小のキーを持つ要素を返します（存在しない場合は`undefined`）。

#### 引数

- `key: K`

#### 戻り値

- `{ key: K; value: V } | undefined`

#### 例

```js
treap.lowerBound(2);
```

#### 計算量

- 期待: $O(\log n)$, 最悪: $O(n)$

### `Treap<K, V>.prototype.upperBound(key: K): { key: K; value: V } | undefined`

キーより大きい最小のキーを持つ要素を返します（存在しない場合は`undefined`）。

#### 引数

- `key: K`

#### 戻り値

- `{ key: K; value: V } | undefined`

#### 例

```js
treap.upperBound(2);
```

#### 計算量

- 期待: $O(\log n)$, 最悪: $O(n)$

### `Treap<K, V>.prototype.kthElement(k: number): { key: K; value: V } | undefined`

k番目(0始まり)に小さい要素のキーと値を取得します。

#### 引数

- `k: number`

#### 戻り値

- `{ key: K; value: V } | undefined`

#### 例

```js
treap.kthElement(0);
```

#### 計算量

- 期待: $O(\log n)$, 最悪: $O(n)$

### `Treap<K, V>.prototype.countAllComparisons(key: K): { less: number; lessEqual: number; greater: number; greaterEqual: number }`

keyを基準にTreap内の要素数を4区分した統計を返します。

#### 引数

- `key: K`

#### 戻り値

- `{ less: number; lessEqual: number; greater: number; greaterEqual: number }`

#### 例

```js
treap.countAllComparisons(2);
```

#### 計算量

- 期待: $O(\log n)$, 最悪: $O(n)$

### `get Treap<K, V>.prototype.size(): number`

Treapの要素数を返します。

#### 戻り値

- `number`

#### 例

```js
console.log(treap.size);
```

#### 計算量

- $O(1)$

### `Treap<K, V>.prototype[Symbol.iterator](): Generator<{ key: K; value: V }, void, undefined>`

現在Treapインスタンスに格納されているすべての要素を、キーの"昇順"で反復処理するためのイテレータです。

#### 引数

なし

#### 戻り値

- `Generator<{ key: K; value: V }, void, undefined>`
    - キーと値のペアを持つオブジェクトを生成するジェネレータ。

#### 例

このメソッドを直接呼び出す必要はほとんどないことに注意してください。

##### for...of ループを用いた反復処理

このメソッドが存在することで、`for...of`ループを使用してTreap内の要素を反復処理できます。

```js
import { Treap } from 'path/to/treap';
const treap = new Treap((a, b) => a - b);
treap.insert(3, 'three');
treap.insert(1, 'one');
treap.insert(2, 'two');

for (const { key, value } of treap) {
    console.log(key, value);
}
// Expected Log Outputs :
// <number> 1 <string> "one"
// <number> 2 <string> "two"
// <number> 3 <string> "three"
```

##### イテレーターを手動で手繰る

返されたイテレーターオブジェクトの`next()`メソッドを手動で呼び出すことで、反復処理の制御を細かく行うこともできます。

```js
import { Treap } from 'path/to/treap';
const treap = new Treap((a, b) => a - b);
treap.insert(3, 'three');
treap.insert(1, 'one');
treap.insert(2, 'two');

const iterator = treap[Symbol.iterator]();
console.log(iterator.next().value); // Expected Log Output : { key: 1, value: 'one' }
console.log(iterator.next().value); // Expected Log Output : { key: 2, value: 'two' }
console.log(iterator.next().value); // Expected Log Output : { key: 3, value: 'three' }
console.log(iterator.next().done);  // Expected Log Output : true
console.log(iterator.next().value); // Expected Log Output : undefined
```

##### 配列への変換

イテレーターを配列に変換することもできます。

```js
import { Treap } from 'path/to/treap';
const treap = new Treap((a, b) => a - b);
treap.insert(3, 'three');
treap.insert(1, 'one');
treap.insert(2, 'two');

const entriesArray = Array.from(treap);
console.log(entriesArray);
// Expected Log Output :
// [ { key: 1, value: 'one' },
//   { key: 2, value: 'two' },
//   { key: 3, value: 'three' } ]

const spreadArray = [...treap];
console.log(spreadArray);
// Expected Log Output :
// [ { key: 1, value: 'one' },
//   { key: 2, value: 'two' },
//   { key: 3, value: 'three' } ]
```

#### 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 全要素の反復処理:
        - 最悪: $O(n)$
