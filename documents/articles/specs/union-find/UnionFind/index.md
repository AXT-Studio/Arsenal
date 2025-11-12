# class: UnionFind

素集合データ構造(Disjoint Set Union, 通称Union-Find)のクラスです。

## 例

```js
import { UnionFind } from 'path/to/union-find';
// インスタンスを作成
const union_find = new UnionFind(10);
// 要素を統合
union_find.union(0, 1);
union_find.union(1, 2);
// 結合判定
console.log(union_find.connected(0, 2)); // true
console.log(union_find.connected(0, 3)); // false
// 連結成分の数を取得
console.log(union_find.componentCount); // 8
// 要素の代表元を取得
console.log(union_find.find(0) === union_find.find(2)); // true
```
