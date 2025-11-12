# constructor: new UnionFind

`UnionFind`クラスのコンストラクタです。新しい`UnionFind`インスタンスを作成します。

## 構文

```js
new UnionFind(size);
```

### 引数

- `size: number`
    - 初期に作成する要素の数です。

### 戻り値

- `UnionFind`
    - 新しく作成された`UnionFind`インスタンスを返します。
    - 各要素は最初、独立した集合として存在します。
    - 要素は`0`から`size - 1`までの整数で識別されます。

## 例

```js
import { UnionFind } from 'path/to/union-find'
const uf = new UnionFind(5);
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 1
uf.union(0, 1);
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 0
```

## 計算量

- 時間計算量
    - コンストラクタ: $O(N)$ ($N$は引数`size`の値)
