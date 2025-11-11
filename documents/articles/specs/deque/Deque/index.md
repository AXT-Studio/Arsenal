# class: Deque

先頭と末尾の両方から効率的に要素の追加・削除が可能なデータ構造である「双方向キュー (Deque: Double-Ended Queue)」です。

## 例

```js
import { Deque } from 'path/to/deque';
// Dequeクラスのインスタンスを作成（初期値あり）
const deque = new Deque(['B', 'C']);
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C" ]
// push: 末尾に要素を追加
deque.push('D');
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C", "D" ]
// unshift: 先頭に要素を追加
deque.unshift('A');
console.log(deque.toArray()); // Expected Log Output : <object> [ "A", "B", "C", "D" ]
// size: 要素数を取得
console.log(deque.size);      // Expected Log Output : <number> 4
// first/last: 先頭と末尾の要素を参照（削除はしない）
console.log(deque.first());   // Expected Log Output : <string> "A"
console.log(deque.last());    // Expected Log Output : <string> "D"
// shift: 先頭から要素を削除して取得
const shiftedItem = deque.shift();
console.log(shiftedItem);     // Expected Log Output : <string> "A"
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C", "D" ]
// pop: 末尾から要素を削除して取得
const poppedItem = deque.pop();
console.log(poppedItem);      // Expected Log Output : <string> "D"
console.log(deque.toArray()); // Expected Log Output : <object> [ "B", "C" ]
// 残りの要素をすべて削除
deque.shift();
deque.shift();
// isEmpty: Dequeが空かどうかを確認
console.log(deque.isEmpty()); // Expected Log Output : <boolean> true
console.log(deque.size);      // Expected Log Output : <number> 0
// 空のDequeから値を取得しようとするとundefinedが返る
console.log(deque.pop());     // Expected Log Output : <undefined> undefined
console.log(deque.first());   // Expected Log Output : <undefined> undefined
```
