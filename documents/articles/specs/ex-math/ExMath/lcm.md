# static method: lcm

2つの整数の最小公倍数を計算します。

## 構文

```js
ExMath.lcm(a, b)
```

### 引数

> `T: number | bigint`とします。

- `a: T`
    - 最小公倍数を計算する最初の整数です。
- `b: T`
    - 最小公倍数を計算する2番目の整数です。

### 戻り値

- `T`
    - 引数として与えられた2つの整数の最小公倍数です。
    - 引数が`number`型の場合は`number`型、`bigint`型の場合は`bigint`型で返されます。

## 例

```js
import { ExMath } from 'path/to/ex-math'

const lcm = ExMath.lcm(12, 18);
console.log(lcm); // 36
```

```js
import { ExMath } from 'path/to/ex-math'

const lcm = ExMath.lcm(12n, 18n);
console.log(lcm); // 36n
```

## 計算量

- 時間計算量
    - 最悪: $O(\log(\min(|a|, |b|)))$
