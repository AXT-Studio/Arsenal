# constructor: new Vector2D

`Vector2D`クラスのコンストラクタです。新しい`Vector2D`インスタンスを作成します。

## 構文

```js
new Vector2D(x, y)
```

### 引数

- `x: number`
    - ベクトルのx成分を表す数値です。
- `y: number`
    - ベクトルのy成分を表す数値です。

### 戻り値

- `Vector2D`
    - 新しく作成された`Vector2D`インスタンスを返します。

## 例

```js
import { Vector2D } from 'path/to/geometry';
const v = new Vector2D(3, 4);
console.log(v.x); // 3
console.log(v.y); // 4
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
