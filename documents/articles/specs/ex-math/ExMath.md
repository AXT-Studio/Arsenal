# class: ExMath

JavaScript標準の`Math`にない数学的計算を行うためのユーティリティクラスです。

:::info TOC
[[toc]]
:::

## Members

### `ExMath.gcd<T extends number | bigint>(a: T, b: T): T`

2つの整数の最大公約数を計算します。

#### 引数

- `a: T` — 1つ目の整数。
- `b: T` — 2つ目の整数。

#### 戻り値

- `T` — 引数と同じ型で結果を返します。

#### 例

```js
import { ExMath } from 'path/to/ex-math'
const a = 48;
const b = 18;
console.log(ExMath.gcd(a, b)); // 6
const an = 48n;
const bn = 18n;
console.log(ExMath.gcd(an, bn)); // 6n
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log(\min(|a|, |b|)))$

### `ExMath.lcm<T extends number | bigint>(a: T, b: T): T`

2つの整数の最小公倍数を計算します。

#### 引数

- `a: T`
- `b: T`

#### 戻り値

- `T`

#### 例

```js
import { ExMath } from 'path/to/ex-math'
console.log(ExMath.lcm(12, 18)); // 36
console.log(ExMath.lcm(12n, 18n)); // 36n
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log(\min(|a|, |b|)))$

### `ExMath.getDivisors(n: number): number[]`

整数`n`の正の約数を列挙します。

#### 引数

- `n: number`

#### 戻り値

- `number[]`

#### 例

```js
import { ExMath } from 'path/to/ex-math'
console.log(ExMath.getDivisors(28)); // [1, 2, 4, 7, 14, 28]
```

#### 計算量

- 時間計算量
    - 最悪: $O(\sqrt{n})$
