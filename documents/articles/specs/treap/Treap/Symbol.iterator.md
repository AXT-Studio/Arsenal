# generator method: [Symbol.iterator]

現在Treapインスタンスに格納されているすべての要素を、キーの"昇順"で反復処理するためのイテレータです。

## 構文

```js
treap[Symbol.iterator]()
```

### 引数

なし

### 戻り値

- `Generator<{ key: K; value: V }, void, undefined>`
    - キーと値のペアを持つオブジェクトを生成するジェネレータ。

## 例

このメソッドを直接呼び出す必要はほとんどないことに注意してください。

### for...of ループを用いた反復処理

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

### イテレーターを手動で手繰る

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

### 配列への変換

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

## 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 各要素の取得ごとに:
        - 最悪: $O(1)$
    - 全要素の反復処理:
        - 最悪: $O(n)$

