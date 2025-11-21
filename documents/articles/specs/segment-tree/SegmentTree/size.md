# getter: size

`SegmentTree`クラスのセグメント木のサイズを取得します。

## 構文

```js
segTree.size
```

### 戻り値

- `number`
    - セグメント木のサイズを返します。

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
    - 最悪: $O(1)$
