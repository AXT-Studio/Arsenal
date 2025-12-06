# class: DisjointSet

素集合データ構造(Disjoint Set Union, 通称Union-Find)のクラスです。

## Members

### `new DisjointSet(size: number): DisjointSet`

`DisjointSet`クラスのコンストラクタです。新しい`DisjointSet`インスタンスを作成します。

#### 引数

- `size: number`
    - 初期に作成する要素の数です。

#### 戻り値

- `DisjointSet`
    - 新しく作成された`DisjointSet`インスタンスを返します。
    - 各要素は最初、独立した集合として存在します。
    - 要素は`0`から`size - 1`までの整数で識別されます。

#### 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const dsu = new DisjointSet(5);
console.log(dsu.find(0)); // 0
console.log(dsu.find(1)); // 1
dsu.union(0, 1);
console.log(dsu.find(0)); // 0
console.log(dsu.find(1)); // 0
```

#### 計算量

- 時間計算量
    - コンストラクタ: $O(N)$ ($N$は引数`size`の値)

### `DisjointSet.prototype.find(x: number): number`

要素が属する木の根(代表元)のインデックスを取得します。

#### 引数

- `x: number`
    - 根を取得したい要素のインデックスです。

#### 戻り値

- `number`
    - 要素`x`が属する木の根(代表元)のインデックスを返します。

#### 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const uf = new DisjointSet(5);
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 1
dsu.union(0, 1);
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 0
```

#### 計算量

- 時間計算量
    - 償却: $O(\mathrm{\alpha}(N))$ ($N$は要素数、$\mathrm{\alpha}$は逆アッカーマン関数)
    - 最悪: $O(\log N)$ ($N$は要素数)

### `DisjointSet.prototype.union(x: number, y: number): boolean`

2つの要素が属する集合を連結します。

#### 引数

- `x: number` — 連結する最初の要素のインデックスです。
- `y: number` — 連結する2番目の要素のインデックスです。

#### 戻り値

- `boolean`
    - 2つの要素が既に同じ集合に属していた場合は`false`、そうでない(連結が行われた)場合は`true`を返します。

#### 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const uf = new DisjointSet(5);
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 1
uf.union(0, 1); // true
console.log(uf.find(0)); // 0
console.log(uf.find(1)); // 0
uf.union(0, 1); // false
```

#### 計算量

- 時間計算量
    - 償却: $O(\mathrm{\alpha}(N))$ ($N$は要素数、$\mathrm{\alpha}$は逆アッカーマン関数)
    - 最悪: $O(\log N)$ ($N$は要素数)

### `DisjointSet.prototype.connected(x: number, y: number): boolean`

2つの要素が同じ集合に属しているかどうかを判定します。

#### 引数

- `x: number`
- `y: number`

#### 戻り値

- `boolean`
    - 2つの要素が同じ集合に属している場合は`true`、そうでない場合は`false`を返します。

#### 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const uf = new DisjointSet(5);
console.log(uf.connected(0, 1)); // false
uf.union(0, 1);
console.log(uf.connected(0, 1)); // true
```

#### 計算量

- 時間計算量
    - 償却: $O(\mathrm{\alpha}(N))$ ($N$は要素数、$\mathrm{\alpha}$は逆アッカーマン関数)
    - 最悪: $O(\log N)$ ($N$は要素数)

### `get DisjointSet.prototype.componentCount(): number`

連結成分の数を取得します。

#### 戻り値

- `number`
    - 現在の連結成分の数を返します。

#### 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const uf = new DisjointSet(5);
console.log(uf.componentCount); // 5
uf.union(0, 1);
console.log(uf.componentCount); // 4
uf.union(1, 2);
console.log(uf.componentCount); // 3
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$
