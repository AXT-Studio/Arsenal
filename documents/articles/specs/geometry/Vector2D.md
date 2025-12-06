# class: Vector2D

2次元ベクトルを表すクラスです。平面上の点の座標や方向を表現するのに使用できます。

## Members

### `new Vector2D(x: number, y: number): Vector2D`

新しいVector2Dインスタンスを作成します。

#### 引数

- `x: number` — x座標
- `y: number` — y座標

#### 戻り値

- `Vector2D`

#### 例

```js
import { Vector2D } from 'path/to/geometry';
const v = new Vector2D(3, 4);
console.log(v.x); // 3
console.log(v.y); // 4
```

### `Vector2D.prototype.add(other: Vector2D): Vector2D`

ベクトル同士の加算を行います。

#### 引数

- `other: Vector2D`

#### 戻り値

- `Vector2D`

#### 例

```js
import { Vector2D } from 'path/to/geometry';
const a = new Vector2D(1, 2);
const b = new Vector2D(3, 4);
console.log(a.add(b)); // Vector2D { x: 4, y: 6 }
```

### `Vector2D.prototype.sub(other: Vector2D): Vector2D`

ベクトル同士の減算を行います。

#### 引数
- `other: Vector2D`

#### 戻り値
- `Vector2D`

#### 例

```js
const a = new Vector2D(3, 4);
const b = new Vector2D(1, 2);
console.log(a.sub(b)); // Vector2D { x: 2, y: 2 }
```

### `Vector2D.prototype.dot(other: Vector2D): number`

ベクトルの内積を計算します。

#### 引数
- `other: Vector2D`

#### 戻り値
- `number`

#### 例

```js
const a = new Vector2D(1, 1);
const b = new Vector2D(2, 3);
console.log(a.dot(b)); // 5
```

### `Vector2D.prototype.cross(other: Vector2D): number`

外積に相当するスカラー値を計算します。

#### 引数
- `other: Vector2D`

#### 戻り値
- `number`

#### 例

```js
const a = new Vector2D(1, 0);
const b = new Vector2D(0, 1);
console.log(a.cross(b)); // 1
```

### `get Vector2D.prototype.x(): number`

ベクトルのx成分を返します。

#### 戻り値
- `number`

### `get Vector2D.prototype.y(): number`

ベクトルのy成分を返します。

#### 戻り値
- `number`
