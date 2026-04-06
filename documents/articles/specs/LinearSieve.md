# class: LinearSieve

線形篩アルゴリズムとそれに関連したメソッドを提供するユーティリティクラスです。
「$N$以下の素数を列挙する」ことを高速に行うことができます。

:::info TOC
[[toc]]
:::

## Members

### `LinearSieve.getAllMPF(N: number): number[]`

$N$以下のすべての整数の最小素因数を列挙します。

#### 引数

- `N: number` — 最大値。

#### 戻り値

- `number[]` — $0$から$N$までの各整数$i$について、`result[i]`が$i$の最小素因数を表す配列。

:::info
- `mpf[i]`は$i$の最小素因数を表します。
- `mpf[0]`・`mpf[1]`は`NaN`になります。
:::

#### 例

```js
import { LinearSieve } from 'path/to/linear-sieve'
const mpf = LinearSieve.getAllMPF(10);
console.log(mpf); // [NaN, NaN, 2, 3, 2, 5, 2, 7, 2, 3, 2]
```

#### 計算量

- 時間計算量
    - 最悪: $O(N)$
- 空間計算量
    - 最悪: $O(N)$

### `LinearSieve.getAllPrimes(N: number): number[]`

$N$以下のすべての素数を列挙します。

#### 引数

- `N: number` — 最大値。

#### 戻り値

- `number[]` — $N$以下のすべての素数を昇順に列挙した配列。

:::info
- `N < 2`の場合は空配列が返されます。
:::

#### 例

```js
import { LinearSieve } from 'path/to/linear-sieve'
const primes = LinearSieve.getAllPrimes(10);
console.log(primes); // [2, 3, 5, 7]
```

#### 計算量

- 時間計算量
    - 最悪: $O(N)$
- 空間計算量
    - 最悪: $O(N)$

### `LinearSieve.factorize(N: number): number[]`

$N$の素因数分解を行います。

#### 引数

- `N: number` — 素因数分解する整数。

#### 戻り値

- `number[]` — $N$の素因数を昇順に列挙した配列。重複あり。

:::info
- `N < 2`の場合は空配列が返されます。
:::

#### 例

```js
import { LinearSieve } from 'path/to/linear-sieve'
const factors_12 = LinearSieve.factorize(12);
console.log(factors_12); // [2, 2, 3]
const factors_3 = LinearSieve.factorize(3);
console.log(factors_3); // [3]
const factors_1 = LinearSieve.factorize(1);
console.log(factors_1); // []
```

#### 計算量

- 時間計算量
    - 最悪: $O(N)$
- 空間計算量
    - 最悪: $O(N)$
