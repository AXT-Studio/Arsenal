# function: binary_search

配列`array`に`target`と等しい値が存在するかどうかを、二分探索を用いて判定します。

### `binary_search<T>(array: readonly T[], target: T, compareFn?: (a: T, b: T) => number): boolean`

#### 引数

- `array: T[]`
    - 探索対象の配列です。あらかじめ`compareFn`に基づいてソートされている必要があります。
- `target: T`
    - 探索する値です。
- `compareFn: (a: T, b: T) => number` (省略可能)
    - 2つの引数を取り、それらの大小関係を示す数値を返す比較関数です。
    - `Array.prototype.sort`メソッドに渡す比較関数と同様の形式です。
    - 省略した場合、`Array.prototype.sort`のデフォルトと同じ挙動を示す比較関数が使用されます。

#### 戻り値

- `boolean`
    - `array`内に`target`と等しい値が存在する場合は`true`、存在しない場合は`false`を返します。

#### 例

```js
import { binary_search } from 'path/to/binary-search'
const array = [1, 3, 5, 7, 9];
console.log(binary_search(array, 3)); // true
console.log(binary_search(array, 6)); // false
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$は配列の要素数)
