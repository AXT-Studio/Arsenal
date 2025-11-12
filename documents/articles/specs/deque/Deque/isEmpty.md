# method: isEmpty

Dequeが空かどうかを判定します。

## 構文

```js
deque.isEmpty()
```

### 引数

- なし

### 戻り値

- `boolean`
    - Dequeが空の場合は`true`、そうでない場合は`false`を返します。

## 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque();
console.log(deque.isEmpty()); // true
deque.push(1);
console.log(deque.isEmpty()); // false
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
