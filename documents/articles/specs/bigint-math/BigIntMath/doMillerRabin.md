# method: doMillerRabin

Miller-Rabin法による素数判定を行います。

## 構文

```js
BigIntMath.doMillerRabin(n)
BigIntMath.doMillerRabin(n, bases)
```

### 引数

- `n: bigint`
    - 判定する整数です。
- `bases?: bigint[]`
    - 使用する基底の配列です。
    - 省略した場合、$n < 2^{64}$で決定的となるような基底のセットが使用されます。

### 戻り値

- `boolean`
    - `n`が素数かもしれない場合に`true`、合成数である場合に`false`を返します。
    - 引数`bases`が省略され、かつ$n < 2^{64}$の場合、正確な素数判定が行われます。

## 例

```js
import { BigIntMath } from 'path/to/bigint-math';
const result1 = BigIntMath.doMillerRabin(17n);
console.log(result1); // true 
const result2 = BigIntMath.doMillerRabin(18n);
console.log(result2); // false
```

## 計算量

- 時間計算量
    - 最悪: $O(k \times \log N \times M(\log_2 N))$
        - ここで、$N$は`n`の値、$M(l)$は$l$ビット整数の乗算に要する時間、$k$は`basses`の要素数です。
            - `k`は`basses`が省略された場合`7`で固定になり、事実上定数とみなせます。
            - $M(l)$はJavaScriptエンジンの実装に依存します。
                - 各エンジンは$l$の大きさに応じてカラツバ法($O(l^{\log_2 3})$)やSchönhage–Strassen法($O(l \log l \log \log l)$)などの異なるアルゴリズムを使用します。
