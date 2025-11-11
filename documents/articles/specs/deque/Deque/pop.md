# method: pop

Dequeインスタンスの末尾から値を削除して返します。

## 構文

```js
deque.pop()
```

### 引数

- なし

### 戻り値

- `T | undefined`
    - 末尾から削除された値を返します。Dequeが空の場合は`undefined`を返します。

## 例

```js
import { Deque } from 'path/to/deque';
const deque = new Deque([1, 2, 3]);
const last = deque.pop();
console.log(last); // 3
console.log(deque.size()); // 2
```

## 計算量

- 時間計算量
    - 償却: $O(1)$
    - 最悪: $O(N)$ ($N$はDequeの要素数)
