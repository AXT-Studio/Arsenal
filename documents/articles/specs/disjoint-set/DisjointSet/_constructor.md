# constructor: new DisjointSet

`DisjointSet`クラスのコンストラクタです。新しい`DisjointSet`インスタンスを作成します。

## 構文

```js
new DisjointSet(size);
```

### 引数

- `size: number`
    - 初期に作成する要素の数です。

### 戻り値

- `DisjointSet`
    - 新しく作成された`DisjointSet`インスタンスを返します。
    - 各要素は最初、独立した集合として存在します。
    - 要素は`0`から`size - 1`までの整数で識別されます。

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
    - コンストラクタ: $O(N)$ ($N$は引数`size`の値)
