# static method: modPow

整数`a`, 非負整数`n`, 正整数`m`について、`a ** n % m`を求めます。

## 構文

```js
BigIntMath.modPow(a, n, m)
```

### 引数

- `a: bigint`
    - 底の整数です。
- `n: bigint`
    - 指数の非負整数です。
- `m: bigint`
    - 法の正整数です。

### 戻り値

- `bigint`
    - `a ** n % m`の値を返します。

## 例

```js
import { BigIntMath } from 'path/to/bigint-math';
const result = BigIntMath.modPow(3n, 200n, 50n);
console.log(result); // 1n
```

## 計算量

- 時間計算量
    - 最悪: $O(\log n)$
        - 乗算・剰余演算が$O(1)$で行えると仮定した場合の計算量です。
