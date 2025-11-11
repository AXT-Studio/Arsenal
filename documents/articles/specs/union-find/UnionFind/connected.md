# method: connected

2つの要素が同じ集合に属しているかどうかを判定します。

## 構文

```js
uf.connected(x, y);
```

## 引数

- `x: number`
    - 判定する最初の要素のインデックスです。
- `y: number`
    - 判定する2番目の要素のインデックスです。

## 戻り値

- `boolean`
    - 2つの要素が同じ集合に属している場合は`true`、そうでない場合は`false`を返します。

## 例

```js
import { UnionFind } from 'path/to/union-find'
const uf = new UnionFind(5);
console.log(uf.connected(0, 1)); // false
uf.union(0, 1);
console.log(uf.connected(0, 1)); // true
```

## 計算量

- 時間計算量
    - 償却: $O(\mathrm{\alpha}(N))$ ($N$は要素数、$\mathrm{\alpha}$は逆アッカーマン関数)
    - 最悪: $O(\log N)$ ($N$は要素数)
