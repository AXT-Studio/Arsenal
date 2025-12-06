# class: BigIntMath

BigIntに関する数学的計算を行うためのユーティリティクラスです。

## Members

### `BigIntMath.isqrt(n: bigint): bigint`

整数$n$の整数平方根、すなわち$\lfloor \sqrt{n} \rfloor$を返します。

#### 引数

- `n: bigint`
    - 整数平方根を計算する非負の整数です。

#### 戻り値

- `bigint`
    - 引数として与えられた整数の整数平方根を返します。

#### 例

```js
import { BigIntMath } from 'path/to/bigint-math';
const result = BigIntMath.isqrt(10n);
console.log(result); // 3n
```

#### 計算量

- 時間計算量
    - 最悪: $O(M(\log_2 n))$
        - ここで$M(k)$は$k$ビット整数の乗算に要する時間で、これはJavaScriptエンジンの実装に依存します。
            - 各エンジンは$k$の大きさに応じてカラツバ法($O(k^{\log_2 3})$)やSchönhage–Strassen法($O(k \log k \log \log k)$)などの異なるアルゴリズムを使用します。

### `BigIntMath.doMillerRabin(n: bigint, bases?: bigint[]): boolean`

Miller-Rabin法による素数判定を行います。

#### 引数

- `n: bigint`
    - 判定する整数です。
- `bases?: bigint[]`
    - 使用する基底の配列です。
    - 省略した場合、$n < 2^{64}$で決定的となるような基底のセットが使用されます。

#### 戻り値

- `boolean`
    - `n`が素数かもしれない場合に`true`、合成数である場合に`false`を返します。
    - 引数`bases`が省略され、かつ$n < 2^{64}$の場合、正確な素数判定が行われます。

#### 例

```js
import { BigIntMath } from 'path/to/bigint-math';
const result1 = BigIntMath.doMillerRabin(17n);
console.log(result1); // true 
const result2 = BigIntMath.doMillerRabin(18n);
console.log(result2); // false
```

#### 計算量

- 時間計算量
    - 最悪: $O(k \times \log N \times M(\log_2 N))$
        - ここで、$N$は`n`の値、$M(l)$は$l$ビット整数の乗算に要する時間、$k$は`bases`の要素数です。
            - `k`は`bases`が省略された場合`7`で固定になり、事実上定数とみなせます。
            - $M(l)$はJavaScriptエンジンの実装に依存します。
                - 各エンジンは$l$の大きさに応じてカラツバ法($O(l^{\log_2 3})$)やSchönhage–Strassen法($O(l \log l \log \log l)$)などの異なるアルゴリズムを使用します。

### `BigIntMath.modPow(a: bigint, n: bigint, m: bigint): bigint`

整数`a`, 非負整数`n`, 正整数`m`について、`a ** n % m`を求めます。

#### 引数

- `a: bigint`
    - 底の整数です。
- `n: bigint`
    - 指数の非負整数です。
- `m: bigint`
    - 法の正整数です。

#### 戻り値

- `bigint`
    - `a ** n % m`の値を返します。

#### 例

```js
import { BigIntMath } from 'path/to/bigint-math';
const result = BigIntMath.modPow(3n, 200n, 50n);
console.log(result); // 1n
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log n)$
        - 乗算・剰余演算が$O(1)$で行えると仮定した場合の計算量です。
