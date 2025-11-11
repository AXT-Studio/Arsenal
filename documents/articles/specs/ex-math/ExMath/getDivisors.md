# static method: getDivisors

整数`n`の正の約数を列挙します。

## 構文

```js
ExMath.getDivisors(n)
```

### 引数

- `n: number`
    - 約数を列挙する整数です。

### 戻り値

- `number[]`
    - 引数として与えられた整数の正の約数の配列です。昇順にソートされています。
    - `n === 1`の場合は`[1]`が返されます。
    - `n < 1`の場合は空配列`[]`が返されます。

## 例

```js
import { ExMath } from 'path/to/ex-math'
const divisors = ExMath.getDivisors(28);
console.log(divisors); // [1, 2, 4, 7, 14, 28]
```

## 計算量

- 時間計算量
    - 最悪: $O(\sqrt{n})$
