# class: Vector2D

2次元ベクトルを表すクラスです。

- 平面上の点の座標や方向を表現するのに便利です。
- ベクトルの加算、減算、内積、外積といった基本的な演算をサポートしています。

## 例

```js
import { Vector2D } from 'path/to/geometry';
const v1 = new Vector2D(1, 2);
const v2 = new Vector2D(3, 4);
// add
const v_add = v1.add(v2);
console.log(v_add.x, v_add.y); // Expected Log Output : <number> 4 <number> 6
// sub
const v_sub = v2.sub(v1);
console.log(v_sub.x, v_sub.y); // Expected Log Output : <number> 2 <number> 2
// dot
const dot_product = v1.dot(v2);
console.log(dot_product); // Expected Log Output : <number> 11
// cross
const cross_product = v1.cross(v2);
console.log(cross_product); // Expected Log Output : <number> -2
```
