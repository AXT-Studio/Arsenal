# method: last

Dequeインスタンスの末尾にある値を返します。

## 構文

```js
deque.last()
```

### 引数

- なし

### 戻り値

- `T | undefined`
    - 末尾にある値を返します。Dequeが空の場合は`undefined`を返します。

## 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
const last = deque.last();
console.log(last); // 3
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
