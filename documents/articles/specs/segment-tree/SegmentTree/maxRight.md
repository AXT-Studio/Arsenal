# method: maxRight

指定した開始インデックスから右方向に探索し、与えられた条件を満たす最大の右端インデックスを取得します。

## 構文

```js
segTree.maxRight(l, fn)
```

### 引数

- `l: number`
    - 探索を開始するインデックスです。`0`以上`size - 1`以下の範囲で指定します。
- `fn: (product: T) => boolean`
    - モノイド積の結果に対して適用する関数です。
    - ある区間のモノイド積`product`を引数に取り、`boolean`を返す関数を指定します。
    - `fn(e)`は常に`true`を返す必要があります。

### 戻り値

- `number`
    - 条件を満たす最大の右端インデックスを返します。
    - 返されるインデックスは`l`以上`size`以下の範囲にあります。

## 例

```js
import { SegmentTree } from 'path/to/segment-tree';
// 例: numberの最大値 (e = -Infinity, a･b = Math.max(a, b))
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
// 値の設定
segTree.set(0, 10);
segTree.set(1, 20);
// 条件を満たす最大の右端を取得
const maxRight = segTree.maxRight(0, (x) => x < 15);
console.log(maxRight); // 1 (区間[0, 1)の最大値は10で条件を満たすが、区間[0, 2)の最大値は20で条件を満たさない)
```

## 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)
