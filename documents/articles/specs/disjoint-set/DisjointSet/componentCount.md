# getter: componentCount

連結成分の数を取得します。

## 構文

```js
dsu.componentCount;
```

## 戻り値

- `number`
    - 現在の連結成分の数を返します。

## 例

```js
import { DisjointSet } from 'path/to/disjoint-set'
const uf = new DisjointSet(5);
console.log(dsu.componentCount); // 5
dsu.union(0, 1);
console.log(dsu.componentCount); // 4
dsu.union(1, 2);
console.log(dsu.componentCount); // 3
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
