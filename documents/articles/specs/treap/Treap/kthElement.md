# method: kthElement

Treapインスタンスからキーの順序で$k$番目（0始まり）の要素の値を取得します。

## 構文

```js
treap.kthElement(k)
```

### 引数

- `k: number`
    - 取得する要素のインデックス（0始まり）。

### 戻り値

- `{ key: K; value: V } | undefined`
    - 指定したインデックスの要素のキーと値のペア(object)。
    - 指定したインデックスの要素が存在しない場合は`undefined`が返されます。

## 例

```js
import { Treap } from 'path/to/treap';
const treap = new Treap((a, b) => a - b);
treap.insert(1, 'one');
treap.insert(3, 'three');
treap.insert(5, 'five');

console.log(treap.kthElement(0)); // Expected Log Output : { key: 1, value: 'one' }
console.log(treap.kthElement(1)); // Expected Log Output : { key: 3, value: 'three' }
console.log(treap.kthElement(2)); // Expected Log Output : { key: 5, value: 'five' }
console.log(treap.kthElement(3)); // Expected Log Output : undefined
```

## 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 期待: $O(\log n)$
    - 最悪: $O(n)$
