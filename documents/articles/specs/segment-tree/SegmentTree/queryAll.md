# method: queryAll

半開区間$[0, n)$のモノイド積(すなわち、全要素のモノイド積)を返します。

## 構文

```js
segTree.queryAll()
```

### 引数

- なし

### 戻り値

- `T`
    - 半開区間$[0, n)$のモノイド積を返します。

## 例

```js
import { SegmentTree } from 'path/to/segment-tree';
// 例: numberの最大値 (e = -Infinity, a･b = Math.max(a, b))
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
// 値の設定
segTree.set(0, 10);
segTree.set(1, 20);
// 全区間モノイド積の取得
console.log(segTree.queryAll()); // 20 (Math.max(10, 20))
```

## 計算量

- 時間計算量
    - 最悪: $O(1)$
