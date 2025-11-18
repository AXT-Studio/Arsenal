# method: upperBound

Treapインスタンス内で指定したキーより大きい最小のキーを持つ要素の値を取得します。

## 構文

```js
treap.upperBound(key)
```

### 引数

- `key: K`
    - 検索する基準となるキー。

### 戻り値

- `{ key: K; value: V } | undefined`
    - 指定したキーより大きい最小のキーを持つ要素のキーと値のペア(object)。
    - 指定したキーより大きい最小のキーを持つ要素が存在しない場合は`undefined`が返されます。

## 例

```js
import { Treap } from 'path/to/treap';
const treap = new Treap((a, b) => a - b);
treap.insert(1, 'one');
treap.insert(3, 'three');
treap.insert(5, 'five');

console.log(treap.upperBound(2)); // Expected Log Output : { key: 3, value: 'three' }
console.log(treap.upperBound(5)); // Expected Log Output : undefined
```

## 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 期待: $O(\log n)$
    - 最悪: $O(n)$
