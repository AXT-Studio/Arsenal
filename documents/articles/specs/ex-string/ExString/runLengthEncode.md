# static method: runLengthEncode

指定された文字列をランレングス圧縮します。

## 構文

```js
ExString.runLengthEncode(str)
```

### 引数

- `str: string`
    - 圧縮する対象の文字列です。

### 戻り値

- `{ char: string; count: number }[]`
    - 圧縮された結果を表すオブジェクトの配列です。
    - 各オブジェクトは、連続する文字とその出現回数を含みます。

## 例

```js
import { ExString } from 'path/to/ex-string';
const input = "aaabbc";
const result = ExString.runLengthEncode(input);
console.log(result);
// 出力: [ { char: 'a', count: 3 }, { char: 'b', count: 2 }, { char: 'c', count: 1 } ]
```

## 計算量

> 入力される文字列の長さを`n`とします。

- 時間計算量
    - 最悪: $O(n)$
