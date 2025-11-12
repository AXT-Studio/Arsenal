# method: first

Dequeインスタンスの先頭にある値を返します。

## 構文

```js
deque.first()
```

### 引数

- なし

### 戻り値

- `T | undefined`
    - 先頭にある値を返します。Dequeが空の場合は`undefined`を返します。

## 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
const first = deque.first();
console.log(first); // 1
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
