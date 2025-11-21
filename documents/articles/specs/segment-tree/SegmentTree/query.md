# method: query

指定した区間のモノイド積を取得します。
区間は半開区間`[left, right)`で指定します。

## 構文

```js
segTree.query(left, right)
```

### 引数

- `left: number`
    - 区間の左端のインデックスです。`0`以上`size - 1`以下の範囲で指定します。
- `right: number`
    - 区間の右端のインデックスです。`1`以上`size`以下の範囲で指定します。
    - `right`は`left`より大きい必要があります。

### 戻り値

- `T`
    - 指定した区間`[left, right)`のモノイド積を返します。

## 例

```js
import { SegmentTree } from 'path/to/segment-tree';
// 例: numberの最大値 (e = -Infinity, a･b = Math.max(a, b))
const segTree = new SegmentTree(-Infinity, (a, b) => Math.max(a, b), 100);
// 値の設定
segTree.set(0, 10);
segTree.set(1, 20);
// 区間和の取得
console.log(segTree.query(0, 2)); // 20 (Math.max(10, 20))
```

## 計算量

- 時間計算量
    - 最悪: $O(\log N)$ ($N$はセグメント木のサイズ)
