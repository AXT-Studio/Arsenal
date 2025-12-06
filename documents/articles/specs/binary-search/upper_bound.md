# function: upper_bound

配列`array`の中で、`target`**より大きい**と判定される最初の要素のインデックスを返します。

### `upper_bound<T>(array: readonly T[], target: T, compareFn?: (a: T, b: T) => number): number`

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

- `number`
    - `array`内で`target`より大きいと判定される最初の要素のインデックスを返します。
    - もしそのような要素が存在しない場合は、`array.length`を返します。

#### 例

```js
import { upper_bound } from 'binary-search'
const array = [1, 3, 3, 5, 7];
console.log(upper_bound(array, 3)); // 3
console.log(upper_bound(array, 4)); // 3
console.log(upper_bound(array, 8)); // 5
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$は配列の要素数)
