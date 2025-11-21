# method: get

Treapインスタンスから指定したキーを持つ要素の値を取得します。

## 構文

```js
treap.get(key)
```

### 引数

- `key: K`
    - 取得する要素のキー。

### 戻り値

- `value: V | undefined`
    - 指定したキーを持つ要素の値。存在しない場合は`undefined`が返されます。

## 例

```js
import { Treap } from 'path/to/treap';

const treap = new Treap((a, b) => a - b);
treap.insert(1, 'one');
treap.insert(2, 'two');

console.log(treap.get(1)); // Expected Log Output : <string> "one"
console.log(treap.get(2)); // Expected Log Output : <string> "two"
console.log(treap.get(3)); // Expected Log Output : undefined
```

## 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 期待: $O(\log n)$
    - 最悪: $O(n)$
