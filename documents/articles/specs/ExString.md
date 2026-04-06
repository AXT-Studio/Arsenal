# class: ExString

文字列操作を行うためのユーティリティクラスです。

:::info TOC
[[toc]]
:::

## Members

### `ExString.runLengthEncode(str: string): { char: string; count: number }[]`

指定された文字列をランレングス圧縮します。

#### 引数

- `str: string`

#### 戻り値

- `{ char: string; count: number }[]`

#### 例

```js
import { ExString } from 'path/to/ex-string';
const input = "aaabbc";
const result = ExString.runLengthEncode(input);
console.log(result);
// 出力: [ { char: 'a', count: 3 }, { char: 'b', count: 2 }, { char: 'c', count: 1 } ]
```

#### 計算量

- 時間計算量
    - 最悪: $O(n)$
