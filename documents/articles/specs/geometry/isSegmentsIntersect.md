# function: isSegmentsIntersect

2次元空間における線分の交差判定を行います。
点`a1`, `a2`を結ぶ線分と点`b1`, `b2`を結ぶ線分が交差しているか接しているなら`true`、そうでないなら`false`を返します。

## 構文

```js
isSegmentsIntersect(a1, a2, b1, b2)
```

### 引数

- `a1: Vector2D`
    - 線分aの始点を表す2次元ベクトルです。
- `a2: Vector2D`
    - 線分aの終点を表す2次元ベクトルです。
- `b1: Vector2D`
    - 線分bの始点を表す2次元ベクトルです。
- `b2: Vector2D`
    - 線分bの終点を表す2次元ベクトルです。

### 戻り値

- `boolean`
    - 線分aと線分bが交差している場合は`true`、そうでない場合は`false`を返します。
    - 一方の線分上にもう一方の線分の端点がある場合も`true`を返します。

## 例

```js
import { Vector2D, isSegmentsIntersect } from 'path/to/geometry'
const a1 = new Vector2D(0, 0);
const a2 = new Vector2D(2, 2);
const b1 = new Vector2D(0, 2);
const b2 = new Vector2D(2, 0);
console.log(isSegmentsIntersect(a1, a2, b1, b2)); // true
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
