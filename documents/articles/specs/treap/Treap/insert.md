# method: insert

Treapインスタンスに要素を追加します。既に同じキーが存在する場合は値を上書きします。

## 構文

```js
treap.insert(key, value)
```

### 引数

- `key: K`
    - 挿入する要素のキー。
- `value: V`
    - 挿入する要素の値。

### 戻り値

- `void`
    - 何も返しません。

## 例

```js
import { Treap } from 'path/to/treap';

const treap = new Treap((a, b) => a - b);
treap.insert(1, 'one');
treap.insert(2, 'two');
treap.insert(1, 'uno'); // 同じキーで追加を試みた場合はvalueが上書きされる

console.log(treap.get(1)); // Expected Log Output : <string> "uno"
console.log(treap.get(2)); // Expected Log Output : <string> "two"
```

## 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 期待: $O(\log n)$
    - 最悪: $O(n)$
