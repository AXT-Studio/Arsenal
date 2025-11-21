# class: SegmentTree

セグメント木を表すクラスです。

:::info
- セグメント木は、モノイド、具体的には以下の条件を満たすような集合$S$と二項演算$\cdot$に対して利用できます。
    - 結合法則: $(a \cdot b) \cdot c = a \cdot (b \cdot c) \quad \forall \{ a, b, c \} \subset S$
    - 単位元の存在: $\exists e \in S \quad \text{such that} \forall a \in S, a \cdot e = e \cdot a = a$
:::

## 例

```js
import { SegmentTree } from 'path/to/segment-tree';

// 例: numberの最大値 (e = -Infinity, a･b = Math.max(a, b))
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
// セグメント木のサイズ
console.log(segTree.size); // 100
// 値の設定
segTree.set(0, 10);
segTree.set(1, 20);
// 値の取得
console.log(segTree.get(0)); // 10
console.log(segTree.get(1)); // 20
console.log(segTree.get(2)); // -Infinity (初期値はe)
// 区間和の取得
console.log(segTree.query(0, 2)); // 20 (Math.max(10, 20))
// 全要素の最大値の取得
console.log(segTree.queryAll()); // 20
// 条件を満たす最大の右端を取得
const maxRight = segTree.maxRight(0, (x) => x < 15);
console.log(maxRight); // 1 (区間[0, 1)の最大値は10で条件を満たすが、区間[0, 2)の最大値は20で条件を満たさない)
// 条件を満たす最小の左端を取得
const minLeft = segTree.minLeft(2, (x) => x < 15);
console.log(minLeft); // 1 (区間[1, 2)の最大値は20で条件を満たさないが、区間[0, 2)の最大値は10で条件を満たす)
```
