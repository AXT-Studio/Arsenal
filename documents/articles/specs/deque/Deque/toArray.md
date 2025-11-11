# method: toArray

Dequeインスタンスの要素を配列として取得します。

## 構文

```js
deque.toArray()
```

### 引数

- なし

### 戻り値

- `T[]`
    - Dequeの要素を配列として返します。

## 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
const array = deque.toArray();
console.log(array); // [1, 2, 3]
```

## 計算量

- 時間計算量
    - 最悪: $O(N)$ ($N$はDequeの要素数)
