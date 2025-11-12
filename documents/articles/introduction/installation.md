# Installation

このセクションでは、AyaExpTech Arsenalの使用手順について説明します。

## Web

AyaExpTech Arsenalの各モジュールは、[esm.sh](https://esm.sh)を介してWebプロジェクトで使用できます。
アクセスすべきURLの形式は以下の通りです。

```
https://esm.sh/jsr/@ayaexptech/arsenal/<entrypoint>
https://esm.sh/jsr/@ayaexptech/arsenal@<version>/<entrypoint>
```

:::details 使用例
例えば、[entrypoint: binary-search](./../../specs/binary-search/)の[`lower_bound`関数](./../../specs/binary-search/lower_bound.md)を使用したい場合、以下のようにインポートできます。

```js
import { lower_bound } from 'https://esm.sh/jsr/@ayaexptech/arsenal/binary-search';
```

バージョンを指定したい場合、以下のようにインポートします。

```js
import { lower_bound } from 'https://esm.sh/jsr/@ayaexptech/arsenal@0.7.0/binary-search';
```
:::

## Deno

DenoはJSRをネイティブサポートしているため、以下のようにインポートできます。

```js
// Adhoc import
import { lower_bound } from "jsr:@ayaexptech/arsenal@0.7.0/binary-search";
```

Deno環境では`d.ts`も自動的に読み込まれるため、型情報も利用可能です。

## Node.js, Bun, Cloudflare Workers, etc.

JSRはnpmの互換レイヤーを提供しているため、以下のようにインポートできます。

```bash
npx jsr add @ayaexptech/arsenal
```
```js
import { lower_bound } from "@ayaexptech/arsenal@0.7.0/binary-search";
```
