# static method: gcd

2つの整数の最大公約数を計算します。

## 構文

```js
ExMath.gcd(a, b)
```

### 引数

> `T: number | bigint`とします。

- `a: T`
    - 最大公約数を計算する最初の整数です。
- `b: T`
    - 最大公約数を計算する2番目の整数です。

### 戻り値

- `T`
    - 引数として与えられた2つの整数の最大公約数です。
    - 引数が`number`型の場合は`number`型、`bigint`型の場合は`bigint`型で返されます。

## 例

```js
import { ExMath } from 'path/to/ex-math'

const a = 48;
const b = 18;
const result = ExMath.gcd(a, b);
console.log(`GCD of ${a} and ${b} is ${result}`); // GCD of 48 and 18 is 6
```

```js
import { ExMath } from 'path/to/ex-math'

const a = 48n;
const b = 18n;
const result = ExMath.gcd(a, b);
console.log(`GCD of ${a} and ${b} is ${result}`); // GCD of 48n and 18n is 6n
```

## 計算量

- 時間計算量
    - 最悪: $O(\log(\min(|a|, |b|)))$
