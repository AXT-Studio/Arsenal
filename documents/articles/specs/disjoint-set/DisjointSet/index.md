# class: DisjointSet

素集合データ構造(Disjoint Set Union, 通称Union-Find)のクラスです。

## 例

```js
import { DisjointSet } from 'path/to/disjoint-set';
// インスタンスを作成
const dsu = new DisjointSet(10);
// 要素を統合
dsu.union(0, 1);
dsu.union(1, 2);
// 結合判定
console.log(dsu.connected(0, 2)); // true
console.log(dsu.connected(0, 3)); // false
// 連結成分の数を取得
console.log(dsu.componentCount); // 8
// 要素の代表元を取得
console.log(dsu.find(0) === dsu.find(2)); // true
```
