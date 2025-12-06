# Installation

このセクションでは、AyaExpTech Arsenalの使用手順について説明します。

## Websites

AyaExpTech Arsenalの各モジュールは、[esm.sh](https://esm.sh)を介してWebプロジェクトで使用できます。

- 基本的に、`https://esm.sh/jsr/@ayaexptech/arsenal@<version>/<entrypoint>`の形式でアクセスします。
    - `<version>`は省略可能で、省略した場合は最新バージョンが使用されます。
    - `<entrypoint>`は使用したいモジュールのエントリポイント名です。
    - クエリパラメーターとして`target=`を指定することで、特定のJavaScriptバージョン向けに最適化されたコードを取得できます。
        - 例: `?target=es2024`, `?target=esnext`など
        - 使用可能な`target`は、[esm.shのドキュメント](https://esm.sh/#esbuild-options)を参照してください。

```js
// Adhoc import
import { <exported_member> } from "https://esm.sh/jsr/@ayaexptech/arsenal@<version>/<entrypoint>?target=es2024";
```

## Deno

AyaExpTech Arsenalは[JSR.io](https://jsr.io)で公開されています。
DenoはJSRをネイティブサポートしているため、以下のようにインポートできます。

```js
// Adhoc import
import { <exported_member> } from "jsr:@ayaexptech/arsenal@<version>/<entrypoint>";
```

## Node.js, Bun, Cloudflare Workers, etc.

JSRはnpmの互換レイヤーを提供しているため、以下のようにインポートできます。

```bash
npx jsr add @ayaexptech/arsenal
```
```js
import { <exported_member> } from "@ayaexptech/arsenal/<entrypoint>";
```
