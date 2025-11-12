# method: sub

2つのVector2Dオブジェクトを減算し、新しいVector2Dオブジェクトを返します。

## 構文

```js
vector.sub(other)
```

### 引数

- `other: Vector2D`
    - 減算するもう一方のVector2Dオブジェクトです。

### 戻り値

- `Vector2D`
    - 減算結果を表す新しいVector2Dオブジェクトを返します。

## 例

```js
import { Vector2D } from 'path/to/geometry';
const v1 = new Vector2D(1, 2);
const v2 = new Vector2D(3, 4);
const v_sub = v2.sub(v1);
console.log(v_sub.x, v_sub.y); // 2 2
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
