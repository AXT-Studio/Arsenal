# class: ModOps

指定された法の中で整数の演算を行うための演算器クラスです。

:::warning
`ModOps`は、そのクラスのインスタンスが演算器として機能します。
計算に使うメソッドは`ModOps`の静的メソッドでないことに注意してください。
:::

:::info TOC
[[toc]]
:::

## Members

### `new ModOps(mod: bigint): ModOps`

`ModOps`クラスのコンストラクタです。新しい`ModOps`インスタンスを作成します。

#### 引数

- `mod: bigint`
    - 演算の法を表すbigintです。インスタンスによるすべての演算はこの法に基づいて行われます。

#### 戻り値

- `ModOps`
    - 新しく作成された`ModOps`インスタンスを返します。

#### 例

```js

import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `ModOps.prototype.normalize(value: bigint): bigint`

この`ModOps`の法のもとで、値を正規化します。すなわち、値をこの`ModOps`の法で割った余りを返します。

#### 引数

- `value: bigint` — 正規化する値です。

#### 戻り値

- `bigint` — 正規化された値を返します。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.normalize(10n)); // 3n
console.log(mod7.normalize(-3n)); // 4n
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `ModOps.prototype.add(a: bigint, b: bigint): bigint`

この`ModOps`の法のもとで、a + bを計算します。

#### 引数

- `a: bigint` — 加算するbigint
- `b: bigint` — 加算されるbigint

#### 戻り値

- `bigint` — a + bをこの`ModOps`の法で割った余りを返します。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.add(3n, 5n)); // 1n
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `ModOps.prototype.sum(...values: bigint[]): bigint`

この`ModOps`の法のもとで、引数のbigintの総和を計算します。

#### 引数

- `...values: bigint[]` — 加算するbigintの可変長引数です。

#### 戻り値

- `bigint` — 引数のbigintの総和をこの`ModOps`の法で割った余りを返します。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.sum(1n, 2n, 3n)); // 6n
console.log(mod7.sum(2n, 4n, 6n)); // 5n (12 mod 7 = 5)
```

#### 計算量

- 時間計算量
    - 最悪: $O(l)$, ただし$l$は引数のbigintの数

### `ModOps.prototype.sub(a: bigint, b: bigint): bigint`

この`ModOps`の法のもとで、a - bを計算します。

#### 引数

- `a: bigint` — 減算するbigint
- `b: bigint` — 減算されるbigint

#### 戻り値

- `bigint` — a - bをこの`ModOps`の法で割った余りを返します。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.sub(5n, 3n)); // 2n
console.log(mod7.sub(3n, 5n)); // 5n (3 - 5 mod 7 = -2 mod 7 = 5)
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `ModOps.prototype.mul(a: bigint, b: bigint): bigint`

この`ModOps`の法のもとで、a * bを計算します。

#### 引数

- `a: bigint` — 乗算するbigint
- `b: bigint` — 乗算されるbigint

#### 戻り値

- `bigint` — a * bをこの`ModOps`の法で割った余りを返します。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.mul(3n, 4n)); // 5n (12 mod 7 = 5)
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `ModOps.prototype.prod(...values: bigint[]): bigint`

この`ModOps`の法のもとで、引数のbigintの総積を計算します。

#### 引数

- `...values: bigint[]` — 乗算するbigintの可変長引数です。

#### 戻り値

- `bigint` — 引数のbigintの総積をこの`ModOps`の法で割った余りを返します。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.prod(2n, 3n, 4n)); // 3n (2 * 3 * 4 mod 7 = 24 mod 7 = 3)
```

#### 計算量

- 時間計算量
    - 最悪: $O(l)$, ただし$l$は引数のbigintの数

### `ModOps.prototype.pow(a: bigint, b: bigint): bigint`

この`ModOps`の法のもとで、aのb乗を計算します。

#### 引数

- `a: bigint` — 累乗するbigint
- `b: bigint` — 累乗されるbigint

#### 戻り値

- `bigint` — aのb乗をこの`ModOps`の法で割った余りを返します。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.pow(3n, 4n)); // 4n (3^4 mod 7 = 81 mod 7 = 4)
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log b)$

:::info
この`pow`メソッドは、累乗を効率的に計算するために、繰り返し二乗法を使用して実装しています。
:::

### `ModOps.prototype.inv(a: bigint): bigint`

この`ModOps`の法$p$のもとで、$a$の逆元を計算します。
すなわち、$av \equiv 1 \pmod{p}$を満たす0以上$p$未満の整数$v$をbigintで返します。

#### 引数

- `a: bigint` — 逆元を求めるbigint

#### 戻り値

- `bigint` — $a$の逆元をこの`ModOps`の法で割った余りを返します。

#### エラー

- `Error` - 逆元が存在しない(すなわち、$a$とこの`ModOps`の法が互いに素でない)場合にスローされます。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.inv(3n)); // 5n (3 * 5 mod 7 = 15 mod 7 = 1)
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log p)$

:::info
この`inv`メソッドは、拡張ユークリッド互除法を使用して実装しています。
:::

### `ModOps.prototype.div(a: bigint, b: bigint): bigint`

この`ModOps`の法のもとで、a / bを計算します。
すなわち、$a$に$b$の逆元を掛けた値をこの`ModOps`の法で割った余りを返します。

#### 引数

- `a: bigint` — 除算するbigint
- `b: bigint` — 除算されるbigint

#### 戻り値

- `bigint` — a / bをこの`ModOps`の法で割った余りを返します。

#### エラー

- `Error` - $b$の逆元が存在しない(すなわち、$b$とこの`ModOps`の法が互いに素でない)場合にスローされます。

#### 例

```js
import { ModOps } from 'path/to/mod-ops';

const mod7 = new ModOps(7n);
console.log(mod7.div(3n, 2n)); // 5n (mod7における2の逆元は4nなので、3 * 4 mod 7 = 12 mod 7 = 5)
```
