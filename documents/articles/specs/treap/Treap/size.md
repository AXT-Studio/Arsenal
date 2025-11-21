# getter: size

`Treap`インスタンスの要素数を返します。

## 構文

```js
treap.size
```

### 戻り値

- `number`
    - `Treap`インスタンスの要素数を返します。

## 例

```js
import { Treap } from 'path/to/treap';

const treap = new Treap((a, b) => a - b);
console.log(treap.size); // 0

treap.insert(1, 'one');
treap.insert(2, 'two');
console.log(treap.size); // 2
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
