# class: MaxFlow

Dinic's algorithm を用いて最大流問題を解くためのクラスです。

:::info TOC
[[toc]]
:::

## Members

### `new MaxFlow(n: number): MaxFlow`

`MaxFlow`クラスのコンストラクタです。頂点数`n`のフローネットワークを初期化します。

#### 引数

- `n: number`
	- グラフの頂点数です。頂点番号は`0`から`n - 1`を使用します。

#### 戻り値

- `MaxFlow`
	- 新しく作成された`MaxFlow`インスタンスを返します。

#### 例

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(4);
```

#### 計算量

- 時間計算量
	- 最悪: $O(V)$ ($V$は頂点数)

### `MaxFlow.prototype.addEdge(from: number, to: number, cap: number): number`

有向辺`from -> to`を容量`cap`で追加します。戻り値は、追加した辺を識別するための番号です。

#### 引数

- `from: number`
	- 辺の始点です。`0 <= from < n` を満たす必要があります。
- `to: number`
	- 辺の終点です。`0 <= to < n` を満たす必要があります。
        - `from`と`to`は同じ値でも構いません（自己ループを追加できます）。
- `cap: number`
	- 辺の容量です。`0 <= cap` を満たす必要があります。

#### 戻り値

- `number`
	- 追加した辺の番号 (`0`始まり) を返します。
	- この番号は`getEdge`や`changeEdge`で使用できます。

#### 例

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(4);
const edgeId = maxFlow.addEdge(0, 1, 5);
console.log(edgeId); // 0
```

#### 計算量

- 時間計算量
	- 最悪: $O(1)$

### `MaxFlow.prototype.flow(s: number, t: number, max?: number): number`

頂点`s`から頂点`t`への最大流量を計算して返します。`max`を指定すると、流量の上限をその値に制限します。

:::warning
このメソッドは、内部で関数再帰による深さ優先探索(DFS)を使用しています。
このため、JavaScriptエンジンの再帰呼び出しの上限に達する可能性があります。
大規模なグラフを扱う場合は注意してください。
(必要なコールスタックの深さは、概ね頂点数に比例します。)
:::

#### 引数

- `s: number`
	- 流量の始点 (source) です。
- `t: number`
	- 流量の終点 (sink) です。
- `max?: number`
	- 流量の上限です。省略時は`Infinity`として扱われます。

#### 戻り値

- `number`
	- 実際に流せた流量を返します。

#### 例

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(4);
maxFlow.addEdge(0, 1, 3);
maxFlow.addEdge(0, 2, 2);
maxFlow.addEdge(1, 2, 1);
maxFlow.addEdge(1, 3, 2);
maxFlow.addEdge(2, 3, 4);

console.log(maxFlow.flow(0, 3)); // 5
```

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(3);
maxFlow.addEdge(0, 1, 10);
maxFlow.addEdge(1, 2, 10);

console.log(maxFlow.flow(0, 2, 6)); // 6
```

#### 計算量

- 時間計算量
	- 最悪: $O(V^2 E)$ ($V$は頂点数、$E$は辺数)

:::info
`flow`は残余グラフを更新するため、同じインスタンスに対して複数回呼び出すと状態を引き継いで追加で流します。
:::

### `MaxFlow.prototype.minCut(s: number): boolean[]`

残余グラフにおいて、頂点`s`から到達可能な頂点を表す配列を返します。

#### 引数

- `s: number`
	- 始点の頂点番号です。

#### 戻り値

- `boolean[]`
	- 長さ`n`の配列を返します。
	- `result[i] === true`のとき、頂点`i`は頂点`s`から容量が正の辺だけを通って到達可能です。

#### 例

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(4);
maxFlow.addEdge(0, 1, 2);
maxFlow.addEdge(0, 2, 1);
maxFlow.addEdge(1, 3, 1);
maxFlow.addEdge(2, 3, 1);

maxFlow.flow(0, 3);
const reachable = maxFlow.minCut(0);
console.log(reachable); // 例: [true, true, false, false]
```

#### 計算量

- 時間計算量
	- 最悪: $O(V + E)$

:::info
通常は`flow`実行後に`minCut`を呼び出して、最小カットの`source`側頂点集合を取得します。
:::

### `MaxFlow.prototype.getEdge(i: number): { from: number; to: number; cap: number; flow: number }`

`i`番目に追加した辺の情報を返します。

#### 引数

- `i: number`
	- 辺番号 (`0`始まり) です。`addEdge`の戻り値で指定します。

#### 戻り値

- `{ from: number; to: number; cap: number; flow: number }`
	- `from`: 辺の始点
	- `to`: 辺の終点
	- `cap`: 元の容量
	- `flow`: 現在その辺に流れている流量

#### 例

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(2);
const edgeId = maxFlow.addEdge(0, 1, 7);
maxFlow.flow(0, 1, 4);

console.log(maxFlow.getEdge(edgeId));
// { from: 0, to: 1, cap: 7, flow: 4 }
```

#### 計算量

- 時間計算量
	- 最悪: $O(1)$

### `MaxFlow.prototype.getEdges(): { from: number; to: number; cap: number; flow: number }[]`

これまでに追加したすべての辺の情報を、追加順で返します。

#### 引数

- なし

#### 戻り値

- `{ from: number; to: number; cap: number; flow: number }[]`
	- 各辺について`from`, `to`, `cap`, `flow`を持つ配列です。

#### 例

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(3);
maxFlow.addEdge(0, 1, 3);
maxFlow.addEdge(1, 2, 2);
maxFlow.flow(0, 2);

console.log(maxFlow.getEdges());
```

#### 計算量

- 時間計算量
	- 最悪: $O(E)$ ($E$は追加した辺の本数)

### `MaxFlow.prototype.changeEdge(i: number, cap: number, flow: number): void`

`i`番目に追加した辺の容量と流量を強制的に更新します。

#### 引数

- `i: number`
	- 辺番号 (`0`始まり) です。
- `cap: number`
	- 設定後の容量です。
- `flow: number`
	- 設定後の流量です。

#### 戻り値

- なし

#### 例

```js
import { MaxFlow } from 'path/to/max-flow';

const maxFlow = new MaxFlow(2);
const edgeId = maxFlow.addEdge(0, 1, 10);

maxFlow.changeEdge(edgeId, 10, 3);
console.log(maxFlow.getEdge(edgeId));
// { from: 0, to: 1, cap: 10, flow: 3 }
```

#### 計算量

- 時間計算量
	- 最悪: $O(1)$

:::warning
`changeEdge`は値の整合性を自動検証しません。通常は`0 <= flow <= cap`を満たす値を指定してください。
:::
