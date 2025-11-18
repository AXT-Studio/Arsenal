# class: Treap

平衡二分探索木の実装の一つである Treap です。

## 例

```js
import { Treap } from 'path/to/treap';
// new: Treapクラスのインスタンスを作成 (キー比較の関数が必要です)
const treap = new Treap((a, b) => a - b);
// insert: 要素を追加
treap.insert(7, 'seven');
treap.insert(5, 'five');
treap.insert(3, 'three');
treap.insert(9, 'nine');
treap.insert(8, 'eight');
treap.insert(8, 'EIGHT'); // 同じキーで追加を試みた場合はvalueが上書きされる
// get: 要素を取得
console.log(treap.get(5)); // Expected Log Output : <string> "five"
console.log(treap.get(8)); // Expected Log Output : <string> "EIGHT"
console.log(treap.get(10)); // Expected Log Output : <undefined> undefined
// size: 要素数を取得
console.log(treap.size); // Expected Log Output : <number> 5
// lowerBound: 指定したキー以上の最小のキーを持つ要素を取得
const lbNode = treap.lowerBound(6);
console.log(lbNode.key, lbNode.value); // Expected Log Output : <number> 7 <string> "seven"
// upperBound: 指定したキーより大きい最小のキーを持つ要素を取得
const ubNode = treap.upperBound(8);
console.log(ubNode.key, ubNode.value); // Expected Log Output : <number> 9 <string> "nine"
// kthElement: k番目に小さい要素を取得 (0-based index)
const kthNode = treap.kthElement(1);
console.log(kthNode.key, kthNode.value); // Expected Log Output : <number> 5 <string> "five"
// erase: 要素を削除
treap.erase(3);
console.log(treap.size()); // Expected Log Output : <number> 4
console.log(treap.get(3)); // Expected Log Output : <undefined> undefined
```
