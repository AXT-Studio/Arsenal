# getter: componentCount

連結成分の数を取得します。

## 構文

```js
uf.componentCount;
```

## 戻り値

- `number`
    - 現在の連結成分の数を返します。

## 例

```js
import { UnionFind } from 'path/to/union-find'
const uf = new UnionFind(5);
console.log(uf.componentCount); // 5
uf.union(0, 1);
console.log(uf.componentCount); // 4
uf.union(1, 2);
console.log(uf.componentCount); // 3
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
