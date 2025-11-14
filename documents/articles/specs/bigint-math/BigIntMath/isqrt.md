# static method: isqrt

整数$n$の整数平方根、すなわち$\lfloor \sqrt{n} \rfloor$を返します。

## 構文

```js
BigIntMath.isqrt(n)
```

### 引数

- `n: bigint`
    - 整数平方根を計算する非負の整数です。

### 戻り値

- `bigint`
    - 引数として与えられた整数の整数平方根を返します。

## 例

```js
import { BigIntMath } from 'path/to/bigint-math';
const result = BigIntMath.isqrt(10n);
console.log(result); // 3n
```

## 計算量

- 時間計算量
    - 最悪: $O(M(\log_2 n))$
        - ここで$M(k)$は$k$ビット整数の乗算に要する時間で、これはJavaScriptエンジンの実装に依存します。
            - 各エンジンは$k$の大きさに応じてカラツバ法($O(k^{\log_2 3})$)やSchönhage–Strassen法($O(k \log k \log \log k)$)などの異なるアルゴリズムを使用します。
