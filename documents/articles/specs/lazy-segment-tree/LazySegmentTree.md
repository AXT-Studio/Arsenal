# class: LazySegmentTree

遅延評価セグメント木を提供します。

:::tip 遅延評価セグメント木について
長さNの配列に対して、「区間全要素への作用」と「区間のモノイド積」の計算を$O(\log N)$で行えます。
ただし、以下が定義できることが求められます。

- 配列の要素の型 `S`
- 区間総モノイド積に関して、以下が定義できること
    - `S`に対するモノイド演算 `op: (a: S, b: S) => S`
        - `op`は結合律、すなわち`op(a, op(b, c)) === op(op(a, b), c)`を満たす必要があります。
    - `op`の単位元 `e: S`
        - `e`は任意の`s: S`に対して`op(s, e) === s`かつ`op(e, s) === s`を満たす必要があります。
- 区間作用に関して、以下が定義できること
    - 「作用」がパラメーターとして求める情報の型 `F`
    - 配列の要素`s: S`に対して行う「作用」を表す関数 `mapping: (s: S, f: F) => S`
        - 要素`s`に対して`f`で示される作用を適用した結果の値を返します。
    - 作用において「何もしない」ことを表す単位元 `id: F`
        - 任意の`s: S`に対して`mapping(s, id) === s`を満たす必要があります。
    - 2つの作用を1つにまとめる関数 `composition: (newF: F, oldF: F) => F` (引数の順序注意)
        - 任意の`s: S`および`f1, f2: F`に対して`mapping(mapping(s, f1), f2) === mapping(s, composition(f2, f1))`を満たす必要があります。
:::

::::warning 使用時の注意点
- 配列は0-basedインデックスで管理されます。
    - つまり、最初の要素はインデックス`0`、最後の要素はインデックス`size - 1`となります。

:::details 要素・作用がPrimitiveでない場合の速度低下について
`S`や`F`がPrimitiveでない場合、オーバーヘッドが発生しパフォーマンスが低下する可能性があります。
(計算量のオーダー自体は変わりませんが、“定数倍が重くなる”可能性があります。)

競技プログラミングで使用する場合、例えば以下のような事象が発生します。

- `S`や`F`を`number`で定義することができる問題では、十分高速に動作する。
    - 例: 競プロ典型90問『029 - Long Bricks』([問題](https://atcoder.jp/contests/typical90/tasks/typical90_ac), [AC提出](https://atcoder.jp/contests/typical90/submissions/71594101))
- `S`や`F`を`object`等で定義する必要がある問題では、定数倍オーバーヘッドによりTLEする。
    - 例: AtCoder Library Practice Contest 『K - Range Affine Range Sum』([問題](https://atcoder.jp/contests/practice2/tasks/practice2_k), [TLE提出](https://atcoder.jp/contests/practice2/submissions/71536145))

使用時には十分注意してください。
:::
::::

### `new LazySegmentTree<S, F>(e: S, op: (a: S, b: S) => S, mapping: (s: S, f: F) => S, id: F, composition: (newF: F, oldF: F) => F, size: number, initialValues?: S[]): LazySegmentTree<S, F>`

`LazySegmentTree`クラスのコンストラクタです。新しい`LazySegmentTree`インスタンスを作成します。

#### 引数

- `e: S`
    - \[区間総積\] モノイド演算の単位元を指定します。
- `op: (a: S, b: S) => S`
    - \[区間総積\] モノイド演算を表す関数を指定します。
- `mapping: (s: S, f: F) => S`
    - \[区間作用\] 作用を行う関数を指定します。
- `id: F`
    - \[区間作用\] 作用において「何もしない」ことを表す単位元を指定します。
- `composition: (newF: F, oldF: F) => F`
    - \[区間作用\] 2つの作用を1つにまとめる関数を指定します。
        - つまり、2つの作用を表すパラメーターを受け取り、その2つを連続して適用した場合と同じ効果を持つ1つの作用を表すパラメーターを返すことが求められます。
        - 引数の順序に注意してください。
            - `composition(f2, f1)`は「まず`f1`を適用し、その後に`f2`を適用する」ことを意味します。
- `size: number`
    - セグメント木の管理する要素数を指定します。
- `initialValues?: S[]`
    - 初期値の配列を指定します。省略した場合、単位元`e`で初期化されます。
    - 配列の長さが`size`に満たない場合、残りの要素は単位元`e`で埋められます。

#### 戻り値

- `LazySegmentTree<S, F>`
    - 新しく作成された`LazySegmentTree`インスタンスを返します。

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
// 例: 作用: 作用の値が現在の値を超えるなら更新、区間総積: 区間の最大値
const lazySegTree = new LazySegmentTree(
    /*           e = */ 0, // 最小でも0であるユースケースだとする
    /*          op = */ (a, b) => Math.max(a, b),
    /*     mapping = */ (s, f) => Math.max(s, f),
    /*          id = */ 0,
    /* composition = */ (newF, oldF) => Math.max(newF, oldF),
    /*        size = */ 100
);
// 遅延評価セグメント木のサイズ
console.log(lazySegTree.size); // 100
```

#### 計算量

- 時間計算量
    - 最悪: $O(N)$ ($N$は引数`size`の値)

### `LazySegmentTree<S, F>.prototype.apply(l: number, r: number, f: F): void`

配列の`l`番目から`r-1`番目までの要素に対して、`f`で表される作用を適用します。

#### 引数

- `l: number`
    - 作用を適用する区間の開始インデックス (0-based, 含む)
- `r: number`
    - 作用を適用する区間の終了インデックス (0-based, 含まない)
- `f: F`
    - 適用する作用を表すパラメーター

#### 戻り値

- なし

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// 区間[10, 20)の要素に対して、値15を適用
lazySegTree.apply(10, 20, 15);
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `LazySegmentTree<S, F>.prototype.query(l: number, r: number): S`

配列の`l`番目から`r-1`番目までの要素の区間総モノイド積を計算して返します。

#### 引数

- `l: number`
    - 区間総積を計算する区間の開始インデックス (0-based, 含む)
- `r: number`
    - 区間総積を計算する区間の終了インデックス (0-based, 含まない)

#### 戻り値

- `S`
    - 指定された区間の区間総モノイド積を返します。

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// 区間[10, 20)の要素に対して、値15を適用
lazySegTree.apply(10, 20, 15);
// 区間[15, 25)の要素に対して、値30を適用
lazySegTree.apply(15, 25, 30);
// 区間[15, 20)の区間総積を計算
const result = lazySegTree.query(15, 20);
console.log(result); // Expected output: <number> 30
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `LazySegmentTree<S, F>.prototype.queryAll(): S`

配列全体の区間総モノイド積を計算して返します。

#### 引数

- なし

#### 戻り値

- `S`
    - 配列全体の区間総モノイド積を返します。

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// 区間[10, 20)の要素に対して、値15を適用
lazySegTree.apply(10, 20, 15);
// 区間[15, 25)の要素に対して、値30を適用
lazySegTree.apply(15, 25, 30);
// 配列全体の区間総積を計算
const result = lazySegTree.queryAll();
console.log(result); // Expected output: <number> 30
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$

### `get LazySegmentTree<S, F>.prototype.maxRight(l: number, fn: (s: S) => boolean): number`

半開区間$[l, r)$について、`l`を指定値に固定したとき、条件`fn`を満たす最大の`r`を返します。

#### 引数

- `l: number`
    - 探索開始インデックス ($0 \leq l \leq \texttt{size}$)
- `fn: (s: S) => boolean`
    - 区間総積に対する判定関数。`fn(e)`は`true`である必要があります。

#### 戻り値

- `number`
    - 条件を満たす最大の右端インデックス (範囲: `l`以上`size`以下)

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// 区間[10, 20)の要素に対して、値15を適用
lazySegTree.apply(10, 20, 15);
// 区間[15, 25)の要素に対して、値30を適用
lazySegTree.apply(15, 25, 30);
// l = 5から始めて、区間総積が20未満である最大のrを探索
const maxRight = lazySegTree.maxRight(5, (x) => x < 20);
console.log(maxRight); // Expected output: <number> 15
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `get LazySegmentTree<S, F>.prototype.minLeft(r: number, fn: (s: S) => boolean): number`

半開区間$[l, r)$について、`r`を指定値に固定したとき、条件`fn`を満たす最小の`l`を返します。

#### 引数

- `r: number`
    - 探索開始インデックス ($0 \leq r \leq \texttt{size}$)
- `fn: (s: S) => boolean`
    - 区間総積に対する判定関数。`fn(e)`は`true`である必要があります。

#### 戻り値

- `number`
    - 条件を満たす最小の左端インデックス (範囲: `0`以上`r`以下)

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// 区間[10, 20)の要素に対して、値15を適用
lazySegTree.apply(10, 20, 15);
// 区間[15, 25)の要素に対して、値30を適用
lazySegTree.apply(15, 25, 30);
// r = 30から始めて、区間総積が20未満である最小のlを探索
const minLeft = lazySegTree.minLeft(30, (x) => x < 20);
console.log(minLeft); // Expected output: <number> 25
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `LazySegmentTree<S, F>.prototype.applyAt(index: number, f: F): void`

指定されたインデックスの要素に対して、`f`で表される作用を適用します。
`lazySegTree.apply(index, index + 1, f)`のエイリアスです。

#### 引数

- `index: number`
    - 作用を適用する要素のインデックス (0-based)
- `f: F`
    - 適用する作用を表すパラメーター

#### 戻り値

- なし

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// インデックス10の要素に対して、値15を適用
lazySegTree.applyAt(10, 15);
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `LazySegmentTree<S, F>.prototype.get(index: number): S`

配列の`index`番目の要素の値を取得します。
`lazySegTree.query(index, index + 1)`のエイリアスです。

#### 引数

- `index: number`
    - 取得する要素のインデックス (0-based)

#### 戻り値

- `S`
    - 指定されたインデックスの要素の値を返します。

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// インデックス10の要素に対して、値15を適用
lazySegTree.applyAt(10, 15);
// インデックス10の要素の値を取得
const value = lazySegTree.get(10);
console.log(value); // Expected output: <number> 15
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `LazySegmentTree<S, F>.prototype.set(index: number, value: S): void`

指定されたインデックスの要素を`value`に更新します。

#### 引数

- `index: number`
    - 更新する要素のインデックス (0-based)
- `value: S`
    - 新しい値

#### 戻り値

- なし

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// インデックス10の要素に対して、値15を適用
lazySegTree.applyAt(10, 15);
// インデックス10の要素を値20に更新
lazySegTree.set(10, 20);
// インデックス10の要素の値を取得
const value = lazySegTree.get(10);
console.log(value); // Expected output: <number> 20
```

#### 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)

### `get LazySegmentTree<S, F>.prototype.size(): number`

セグメント木のサイズを取得します。

#### 引数

- なし

#### 戻り値

- `number`
    - セグメント木のサイズ(constructorの`size`引数で指定した値)を返します。

#### 例

```js
import { LazySegmentTree } from 'path/to/lazy-segment-tree';
const lazySegTree = new LazySegmentTree(
    0,
    (a, b) => Math.max(a, b),
    (s, f) => Math.max(s, f),
    0,
    (newF, oldF) => Math.max(newF, oldF),
    100
);
// 遅延評価セグメント木のサイズ
console.log(lazySegTree.size); // Expected output: <number> 100
```

#### 計算量

- 時間計算量
    - 最悪: $O(1)$
