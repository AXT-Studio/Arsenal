# method: countAllComparisons

Treapインスタンス内において、キーが`key`(未満|以下|超過|以上)である要素の数をそれぞれカウントして取得します。

## 構文

```js
treap.countAllComparisons(key)
```

### 引数

- `key: K`
    - 比較対象のキー。

### 戻り値

- `{ less: number; lessEqual: number; greater: number; greaterEqual: number }`
    - 以下4つのプロパティを持つオブジェクト。
        - `less`: キーが`key`**未満**である要素の数
        - `lessEqual`: キーが`key`**以下**である要素の数
        - `greater`: キーが`key`**超過**である要素の数
        - `greaterEqual`: キーが`key`**以上**である要素の数

## 例

```js
import { Treap } from 'path/to/treap';
const treap = new Treap((a, b) => a - b);
treap.insert(1, 'one');
treap.insert(3, 'three');
treap.insert(5, 'five');
console.log(treap.countAllComparisons(2));
// Expected Log Output : { less: 1, lessEqual: 1, greater: 2, greaterEqual: 2 }
console.log(treap.countAllComparisons(3));
// Expected Log Output : { less: 1, lessEqual: 2, greater: 1, greaterEqual: 2 }
console.log(treap.countAllComparisons(4));
// Expected Log Output : { less: 2, lessEqual: 2, greater: 1, greaterEqual: 1 }
```

## 計算量

> $n$をTreap内の要素数とします。

- 時間計算量
    - 期待: $O(\log n)$
    - 最悪: $O(n)$
