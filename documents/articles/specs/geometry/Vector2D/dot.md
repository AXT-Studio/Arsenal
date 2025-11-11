# method: dot

2つの2次元ベクトルの内積を計算します。

## 構文

```js
vector.dot(other)
```

### 引数

- `other: Vector2D`
    - 内積を計算する相手のベクトルです。

### 戻り値

- `number`
    - `this`ベクトルと`other`ベクトルの内積を返します。

## 例

```js
import { Vector2D } from 'path/to/geometry';
const v1 = new Vector2D(1, 2);
const v2 = new Vector2D(3, 4);
const dot_product = v1.dot(v2);
console.log(dot_product); // 11
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
