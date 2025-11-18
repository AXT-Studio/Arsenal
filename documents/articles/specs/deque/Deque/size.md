# getter: size

`Deque`インスタンスの要素数を返します。

## 構文

```js
deque.size
```

### 戻り値

- `number`
    - `Deque`インスタンスの要素数を返します。

## 例

```js
import { Deque } from 'path/to/deque';

const deque = new Deque([1, 2, 3]);
console.log(deque.size()); // 3
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
