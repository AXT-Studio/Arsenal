# method: union

2つの要素が属する集合を連結します。

## 構文

```js
uf.union(x, y);
```

## 引数

- `x: number`
    - 連結する最初の要素のインデックスです。
- `y: number`
    - 連結する2番目の要素のインデックスです。

## 戻り値

- `boolean`
    - 2つの要素が既に同じ集合に属していた場合は`false`、そうでない(連結が行われた)場合は`true`を返します。

## 例

```js
import { UnionFind } from 'path/to/union-find'
const uf = new UnionFind(5);
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 1
uf.union(0, 1); // true
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 0
uf.union(0, 1); // false
```

## 計算量

- 時間計算量
    - 償却: $O(\mathrm{\alpha}(N))$ ($N$は要素数、$\mathrm{\alpha}$は逆アッカーマン関数)
    - 最悪: $O(\log N)$ ($N$は要素数)
