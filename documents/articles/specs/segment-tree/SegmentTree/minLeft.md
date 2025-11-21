# method: minLeft

指定した終了インデックスから左方向に探索し、与えられた条件を満たす最小の左端インデックスを取得します。

## 構文

```js
segTree.minLeft(r, fn)
```

### 引数

- `r: number`
    - 探索を開始するインデックスです。`1`以上`size`以下の範囲で指定します。
- `fn: (product: T) => boolean`
    - モノイド積の結果に対して適用する関数です。
    - ある区間のモノイド積`product`を引数に取り、`boolean`を返す関数を指定します。
    - `fn(e)`は常に`true`を返す必要があります。

### 戻り値

- `number`
    - 条件を満たす最小の左端インデックスを返します。
    - 返されるインデックスは`0`以上`r`以下の範囲にあります。

## 例

```js
import { SegmentTree } from 'path/to/segment-tree';
// 例: numberの最小値 (e = Infinity, a･b = Math.min(a, b))
const segTree = new SegmentTree(Infinity, (a, b) => Math.min(a, b), 100);
// 値の設定
segTree.set(0, 10);
segTree.set(1, 20);
// 条件を満たす最小の左端を取得
const minLeft = segTree.minLeft(2, (x) => x > 15);
console.log(minLeft); // 1 (区間[1, 2)の最小値は20で条件を満たすが、区間[0, 2)の最小値は10で条件を満たさない)
```

## 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)
