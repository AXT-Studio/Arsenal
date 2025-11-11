# method: add

2つのVector2Dオブジェクトを加算し、新しいVector2Dオブジェクトを返します。

## 構文

```js
vectorA.add(other)
```

### 引数

- `other: Vector2D`
    - 加算するもう一方のVector2Dオブジェクトです。

### 戻り値

- `Vector2D`
    - 加算結果を表す新しいVector2Dオブジェクトを返します。

## 例

```js
import { Vector2D } from 'path/to/geometry';
const v1 = new Vector2D(1, 2);
const v2 = new Vector2D(3, 4);
const v_add = v1.add(v2);
console.log(v_add.x, v_add.y); // 4 6
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
