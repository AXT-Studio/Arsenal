# method: shift

Dequeインスタンスの先頭から値を削除して返します。

## 構文

```js
deque.shift()
```

### 引数

- なし

### 戻り値

- `T | undefined`
    - 先頭から削除された値を返します。Dequeが空の場合は`undefined`を返します。

## 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
const first = deque.shift();
console.log(first); // 1
console.log(deque.size()); // 2
```

## 計算量

- 時間計算量
    - 償却: $O(1)$
    - 最悪: $O(N)$ ($N$はDequeの要素数)
