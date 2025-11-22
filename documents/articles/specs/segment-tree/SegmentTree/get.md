# method: get

指定したインデックスの値を取得します。
インデックスは`0`から`size - 1`までの範囲で指定します。

## 構文

```js
segTree.get(index)
```

### 引数

- `index: number`
    - 値を取得する要素のインデックスです。`0`から`size - 1`までの範囲で指定します。

### 戻り値

- `T`
    - 指定したインデックスの値を返します。
    - constructorの`initialValues`引数で初期化されておらず、かつ`set`メソッドで値が設定されていない要素の場合、単位元`e`が返されます。

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
    - 最悪: $O(1)$
