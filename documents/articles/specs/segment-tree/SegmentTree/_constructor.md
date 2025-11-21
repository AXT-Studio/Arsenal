# constructor: new SegmentTree

`SegmentTree`クラスのコンストラクタです。新しい`SegmentTree`インスタンスを作成します。

## 構文

```js
new SegmentTree(e, op, size)
new SegmentTree(e, op, size, initialValues)
```

### 引数

- `e: T`
    - モノイドの単位元です。
- `op: (a: T, b: T) => T`
    - モノイドの二項演算を表す関数です。
- `size: number`
    - セグメント木のサイズです。セグメント木は`size`個の要素を管理します。
- `initialValues?: T[]`
    - 初期値の配列です。省略した場合、すべての要素は単位元`e`で初期化されます。
    - 配列の長さが`size`未満の場合、残りの要素は単位元`e`で初期化されます。
    - 配列の長さが`size`を超える場合、最初の`size`個の要素のみが使用されます。

:::info
- `e`と`op`は以下の条件を満たす必要があります。
    - 結合法則: `T`に含まれるすべての`a, b, c`に対して、`op(op(a, b), c) === op(a, op(b, c))`
    - 単位元の存在: `T`に含まれるすべての`a`に対して、`op(a, e) === op(e, a) === a`
:::

### 戻り値

- `SegmentTree`
    - 新しく作成された`SegmentTree`インスタンスを返します。

## 例

```js
import { SegmentTree } from 'path/to/segment-tree';
// 例: numberの最大値 (e = -Infinity, a･b = Math.max(a, b))
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
// セグメント木のサイズ
console.log(segTree.size); // 100
```

## 計算量

- 時間計算量
    - 最悪: $O(N)$ ($N$は引数`size`の値)
