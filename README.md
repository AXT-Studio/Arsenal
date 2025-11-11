# AyaExpTech Arsenal

JavaScript向けの汎用ユーティリティライブラリです。
(若干競技プログラミングに寄っています)

## License

copyright (c) 2025- AyaExpTech  
Released under the [MIT License](https://opensource.org/license/mit).

Author
- Ayasaka-Koto

Supported LLMs
- GitHub Copilot Chat (Model: GPT-4.1, GPT-5 mini)
- Google Gemini (https://gemini.google.com, Model: Gemini 2.5 Pro)

## Documents

各種仕様などのドキュメントは以下のリンクから参照できます。

- [公式ドキュメント (日本語)](https://arsenal.axtech.dev/)

## Usage

AyaExpTech Arsenalは、JSR.ioで公開されています。

https://jsr.io/@ayaexptech/arsenal

### Web

`esm.sh`経由でJSRパッケージを読み込むことができます。

```js
import { lower_bound } from 'https://esm.sh/jsr/@ayaexptech/arsenal/binary-search';
```

### Deno

DenoはJSRをネイティブサポートしているため、以下のようにインポートできます。

```js
// Adhoc import
import { lower_bound } from "jsr:@ayaexptech/arsenal@^0.1/binary-search";
```

### Node.js, Bun, Cloudflare Workers, etc.

JSRはnpmの互換レイヤーを提供しているため、以下のようにインポートできます。

```bash
npx jsr add @ayaexptech/arsenal
```
```js
import { lower_bound } from "@ayaexptech/arsenal/binary-search";
```
