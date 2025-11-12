# constructor: new BinaryHeapLite

`BinaryHeapLite`クラスのコンストラクタです。新しい`BinaryHeapLite`インスタンスを作成します。

## 構文

```js
new BinaryHeapLite()
new BinaryHeapLite(compareFn)
new BinaryHeapLite(compareFn, initialValues)
```

### 引数

- `compareFn: (a: T, b: T) => number` (省略可能)
    - 要素の優先度を比較するための関数です。
    - `a`の優先度が`b`より高い場合は負の値、`b`の優先度が`a`より高い場合は正の値、等しい場合は0を返す必要があります。
    - 省略した場合、数値の昇順で比較する関数(`(a, b) => a - b`)が使用されます。
- `initialValues: T[]` (省略可能)
    - 初期要素として使用する配列です。
    - ここで与えた要素は、全体で$O(N)$の時間計算量でヒープに追加されます。 (※$N$は`initialValues`の要素数)
        - $K$個の要素を個別に`push`する場合は$O(K \log K)$かかるため、最初に大量の要素を追加する場合はこの引数を使用するほうが高速です。
    - 省略した場合、1つも要素を持たない(空の)`BinaryHeapLite`インスタンスが作成されます。

### 戻り値

- `BinaryHeapLite<T>`
    - 新しく作成された`BinaryHeapLite`インスタンスを返します。

## 例

```js
import { BinaryHeapLite } from 'path/to/binary-heap'

const heap = new BinaryHeapLite();
heap.push(5);
heap.push(2);
heap.push(8);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

```js
import { BinaryHeapLite } from 'path/to/binary-heap';
const initialValues = [5, 2, 8];
const heap = new BinaryHeapLite((a, b) => a - b, initialValues);
console.log(heap.pop()); // 2
console.log(heap.pop()); // 5
console.log(heap.pop()); // 8
```

## 計算量

- 時間計算量
    - `initialValues`を指定しない場合
        - 最悪: $O(1)$
    - `initialValues`を指定した場合
        - 最悪: $O(N)$ ($N$は`initialValues`の要素数)
