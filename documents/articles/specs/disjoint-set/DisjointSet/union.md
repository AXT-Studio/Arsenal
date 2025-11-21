# method: union

2つの要素が属する集合を連結します。

## 構文

```js
dsu.union(x, y);
```

### 引数

- `x: number`
    - 連結する最初の要素のインデックスです。
- `y: number`
    - 連結する2番目の要素のインデックスです。

### 戻り値

- `boolean`
    - 2つの要素が既に同じ集合に属していた場合は`false`、そうでない(連結が行われた)場合は`true`を返します。

## 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const uf = new DisjointSet(5);
console.log(dsu.find(0)); // 0
console.log(dsu.find(1)); // 1
dsu.union(0, 1); // true
console.log(dsu.find(0)); // 0
console.log(dsu.find(1)); // 0
dsu.union(0, 1); // false
```

## 計算量

- 時間計算量
    - 償却: $O(\mathrm{\alpha}(N))$ ($N$は要素数、$\mathrm{\alpha}$は逆アッカーマン関数)
    - 最悪: $O(\log N)$ ($N$は要素数)
