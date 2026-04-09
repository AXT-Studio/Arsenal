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

### `ExString.getZArray(s: string): number[]`

指定された文字列のZ Arrayを構築します。

#### 引数

- `s: string`

#### 戻り値

- `number[]`
    - Z Array (「文字列sの各文字から始まる接尾辞と、文字列s自体の、最長共通接頭辞の長さ」をまとめた配列)

#### 例

```js
import { ExString } from 'path/to/ex-string';
const input = "abcaba";
const zArray = ExString.getZArray(input);
console.log(zArray);
// 出力: [3, 0, 0, 2, 0, 1]
```

#### 計算量

- 時間計算量
    - 最悪: $O(n)$

### `ExString.getSuffixArray(s: string | number[]): number[]`

指定された文字列のSuffix Arrayを構築します。

#### 引数

- `s: string | number[]`

#### 戻り値

- `number[]`
    - Suffix Array (「文字列sの接尾辞を辞書順に並べたときの、各接尾辞の開始位置」をまとめた配列)

#### 例

```js
import { ExString } from 'path/to/ex-string';
const input = "abcaba";
const suffixArray = ExString.getSuffixArray(input);
console.log(suffixArray);
// 出力: [5, 3, 0, 4, 1, 2]
```

#### 計算量

- 時間計算量
    - 最悪: $O(n)$

### `ExString.getLCPArray(s: string, sa: number[]): number[]`

指定された文字列とそのSuffix ArrayからLCP Arrayを構築します。

#### 引数

- `s: string`
    - 文字列
- `sa: number[]`
    - Suffix Array (「文字列sの接尾辞を辞書順に並べたときの、各接尾辞の開始位置」をまとめた配列)

#### 戻り値

- `number[]`
    - LCP Array (「文字列sの接尾辞を辞書順に並べたときの、隣り合う接尾辞同士の最長共通接頭辞の長さ」をまとめた配列)

#### 例

```js
import { ExString } from 'path/to/ex-string';
const input = "abcaba";
const suffixArray = ExString.getSuffixArray(input);
const lcpArray = ExString.getLCPArray(input, suffixArray);
console.log(lcpArray);
// 出力: [1, 2, 0, 1, 0]
```

#### 計算量

- 時間計算量
    - 最悪: $O(n)$
