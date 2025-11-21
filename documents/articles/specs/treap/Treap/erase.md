# method: erase

Treapインスタンスから指定したキーを持つ要素を削除します。

## 構文

```js
treap.erase(key)
```

### 引数

- `key: K`
    - 削除する要素のキー。

### 戻り値

- `void`
    - 何も返しません。

## 例

```js
import { Treap } from 'path/to/treap';

const treap = new Treap((a, b) => a - b);
treap.insert(1, 'one');
treap.insert(2, 'two');
treap.erase(1);

console.log(treap.get(1)); // Expected Log Output : undefined
console.log(treap.get(2)); // Expected Log Output : <string> "two"
```

## 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 期待: $O(\log n)$
    - 最悪: $O(n)$
