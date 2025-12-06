# class: SegmentTree

セグメント木を提供します。
長さ`size`個の要素を持ち、要素の1点更新と区間のモノイド積を$O(\log N)$で行えます。

:::info TOC
[[toc]]
:::

## Members

### `new SegmentTree<T>(e: T, op: (a: T, b: T) => T, size: number, initialValues?: T[]): SegmentTree<T>`

`SegmentTree`クラスのコンストラクタです。新しい`SegmentTree`インスタンスを作成します。

#### 引数

- `e: T`
    - モノイドの単位元です。
- `op: (a: T, b: T) => T`
    - モノイドの二項演算を表す関数です。
- `size: number`
    - セグメント木の管理する要素数です。
- `initialValues?: T[]`
    - 初期値の配列です。省略した場合、単位元`e`で初期化されます。

:::info
- `e`と`op`は結合法則と単位元の性質を満たす必要があります。
:::

#### 戻り値

- `SegmentTree<T>`
    - 新しく作成された`SegmentTree`インスタンスを返します。

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
// 例: numberの最大値 (e = -Infinity, a･b = Math.max(a, b))
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
// セグメント木のサイズ
console.log(segTree.size); // 100
```

#### 計算量

- 時間計算量
    - 最悪: $O(N)$ ($N$は引数`size`の値)

### `SegmentTree<T>.prototype.set(index: number, value: T): void`

指定したインデックスの要素を`value`に更新します。

#### 引数

- `index: number`
    - 更新する要素のインデックス (0-based)
- `value: T`
    - 新しい値

#### 戻り値

- なし

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
segTree.set(0, 10);
segTree.set(1, 20);
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `SegmentTree<T>.prototype.get(index: number): T`

指定したインデックスの値を取得します。

#### 引数

- `index: number`
    - 値を取得する要素のインデックスです。`0`から`size - 1`までの範囲で指定します。

#### 戻り値

- `T`
    - 指定したインデックスの値を返します。
    - 初期化されていない要素は単位元`e`を返します。

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
segTree.set(0, 10);
console.log(segTree.get(0)); // 10
console.log(segTree.get(2)); // -Infinity
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `SegmentTree<T>.prototype.query(left: number, right: number): T`

半開区間`[left, right)`のモノイド積を計算して返します。

#### 引数

- `left: number`
    - 区間の左端のインデックス (0-based, 含む)
- `right: number`
    - 区間の右端のインデックス (0-based, 含まない)

#### 戻り値

- `T`
    - 指定した区間`[left, right)`のモノイド積

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
segTree.set(0, 10);
segTree.set(1, 20);
console.log(segTree.query(0, 2)); // 20
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$

### `SegmentTree<T>.prototype.queryAll(): T`

半開区間$[0, n)$のモノイド積(全要素のモノイド積)を返します。

#### 引数

- なし

#### 戻り値

- `T`
    - 全要素のモノイド積を返します。

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
segTree.set(0, 10);
segTree.set(1, 20);
console.log(segTree.queryAll()); // 20
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `get SegmentTree<T>.prototype.size(): number`

セグメント木の要素数を取得します。

#### 戻り値

- `number`
    - セグメント木のサイズを返します。

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
console.log(segTree.size); // 100
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `SegmentTree<T>.prototype.maxRight(l: number, fn: (product: T) => boolean): number`

半開区間`[l, r)`に対して、条件`fn`を満たす最大の`r`を返します。

#### 引数

- `l: number`
    - 探索開始インデックス (0 <= l <= size)
- `fn: (product: T) => boolean`
    - モノイド積に対する判定関数。`fn(e)`は`true`である必要があります。

#### 戻り値

- `number`
    - 条件を満たす最大の右端インデックス (範囲: `l`以上`size`以下)

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
segTree.set(0, 10);
segTree.set(1, 20);
const maxRight = segTree.maxRight(0, (x) => x < 15);
console.log(maxRight); // 1
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$

### `SegmentTree<T>.prototype.minLeft(r: number, fn: (product: T) => boolean): number`

半開区間`[l, r)`に対して、条件`fn`を満たす最小の`l`を返します。

#### 引数

- `r: number`
    - 探索の終了インデックス (0 <= r <= size)
- `fn: (product: T) => boolean`
    - モノイド積に対する判定関数。`fn(e)`は`true`である必要があります。

#### 戻り値

- `number`
    - 条件を満たす最小の左端インデックス (範囲: `0`以上`r`以下)

#### 例

```js
import { SegmentTree } from 'path/to/segment-tree';
const segTree = new SegmentTree(Infinity, (a, b) => Math.min(a, b), 100);
segTree.set(0, 10);
segTree.set(1, 20);
const minLeft = segTree.minLeft(2, (x) => x > 15);
console.log(minLeft); // 1
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$
