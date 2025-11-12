# method: cross

2Dベクトルの「外積」に相当するスカラー値を計算します。
これは、`this`ベクトルの垂線ベクトルとの内積であり、`this`と`other`の`2つのベクトルが作る平行四辺形の符号付き面積でもあります。

## 構文

```js
vector.cross(other)
```

### 引数

- `other: Vector2D`
    - 「外積」を計算する相手のベクトルです。

### 戻り値

- `number`
    - `this`ベクトルと`other`ベクトルの「外積」に相当するスカラー値を返します。

## 例

```js
import { Vector2D } from 'path/to/geometry';
const v1 = new Vector2D(1, 2);
const v2 = new Vector2D(3, 4);
const cross_product = v1.cross(v2);
console.log(cross_product); // -2
```
