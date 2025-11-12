# constructor: new Deque

`Deque`クラスのコンストラクタです。新しい`Deque`インスタンスを作成します。

## 構文

```js
new Deque()
new Deque(array)
```

### 引数

- `array: T[]` (省略可能)
    - 初期要素として使用する配列です。この配列の要素が`Deque`インスタンスに順番に追加されます。
    - 省略した場合、空の`Deque`インスタンスが作成されます。

### 戻り値

- `Deque<T>`
    - 新しく作成された`Deque`インスタンスを返します。

## 例

```js
import { Deque } from 'path/to/deque'

const deque1 = new Deque()
const deque2 = new Deque([1, 2, 3])
console.log(deque1.size()) // 0
console.log(deque2.size()) // 3
```

## 計算量

- 時間計算量
    - 引数を省略した場合
        - 最悪: $O(1)$
    - 引数に配列を渡した場合
        - 最悪: $O(N)$ ($N$は配列の要素数)
