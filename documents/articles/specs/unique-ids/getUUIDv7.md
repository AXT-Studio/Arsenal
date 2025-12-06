# function: getUUIDv7

UUIDv7を生成します。

### `getUUIDv7(timestamp?: number): string`


#### 引数

- `timestamp: number` (省略可能)
    - UUIDv7のタイムスタンプ部分に使用するミリ秒単位のUNIXタイムスタンプです。
    - 省略した場合、現在の時刻が使用されます。

#### 戻り値

- `string`
    - 生成されたUUIDv7を表す文字列を返します。

#### 例

```js
import { getUUIDv7 } from 'path/to/unique-ids';
const uuid1 = getUUIDv7();
console.log(uuid1); // 例: "019a7071-5fdd-7fcb-9e75-ba83228b7c1d" 
const uuid2 = getUUIDv7(1672531199000); // 2023-01-01 08:59:59 GMT+0900のタイムスタンプ
console.log(uuid2); // 例: "01856aa0-c418-784f-94e1-7271487db7ef"
```

#### 計算量

- 時間計算量
    - $O(1)$
