# method: unshift

Dequeインスタンスの先頭に値を挿入します。

## 構文

```js
deque.unshift(value)
```

### 引数

- `value: T`
    - 挿入する値です。

### 戻り値

- `void`
    - 戻り値はありません。

## 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([2, 3, 4]);
deque.unshift(1);
console.log(deque.size()); // 4
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
