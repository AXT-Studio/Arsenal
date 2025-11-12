# method: push

Dequeインスタンスの末尾に値を挿入します。

## 構文

```js
deque.push(value)
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
const deque = new Deque([1, 2, 3]);
deque.push(4);
console.log(deque.size()); // 4
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
