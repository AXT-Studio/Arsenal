# method: set

指定したインデックスに値を設定します。
インデックスは`0`から`size - 1`までの範囲で指定します。

## 構文

```js
segTree.set(index, value)
```

### 引数

- `index: number`
    - 値を設定する要素のインデックスです。`0`から`size - 1`までの範囲で指定します。
- `value: T`
    - 設定する値です。

### 戻り値

- `void`
    - 値を設定するだけで、戻り値はありません。

## 例

```js
import { SegmentTree } from 'path/to/segment-tree';
// 例: numberの最大値 (e = -Infinity, a･b = Math.max(a, b))
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
// 値の設定
segTree.set(0, 10);
segTree.set(1, 20);
// 値の取得
console.log(segTree.get(0)); // 10
console.log(segTree.get(1)); // 20
console.log(segTree.get(2)); // -Infinity (初期値はe)
```

## 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)
