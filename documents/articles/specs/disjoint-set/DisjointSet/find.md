# method: find

要素が属する木の根(代表元)のインデックスを取得します。

## 構文

```js
dsu.find(x);
```

## 引数

- `x: number`
    - 根を取得したい要素のインデックスです。

## 戻り値

- `number`
    - 要素`x`が属する木の根(代表元)のインデックスを返します。

## 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const uf = new DisjointSet(5);
console.log(dsu.find(0)); // 0
console.log(dsu.find(1)); // 1
dsu.union(0, 1);
console.log(dsu.find(0)); // 0
console.log(dsu.find(1)); // 0
```

## 計算量

- 時間計算量
    - 償却: $O(\mathrm{\alpha}(N))$ ($N$は要素数、$\mathrm{\alpha}$は逆アッカーマン関数)
    - 最悪: $O(\log N)$ ($N$は要素数)
