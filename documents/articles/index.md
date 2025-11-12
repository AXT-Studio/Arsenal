# AyaExpTech Arsenal

AyaExpTech Arsenalは、JavaScript向けの汎用ユーティリティライブラリです。
収録内容が競技プログラミングに偏っていますが、日常的な開発にも役立つ関数やデータ構造を提供します。

## Usage

AyaExpTech Arsenalは、JSR.ioで公開されています。

https://jsr.io/@ayaexptech/arsenal

- Web: `esm.sh`経由でJSRパッケージを読み込むことができます。
    - 例: `import { lower_bound } from 'https://esm.sh/jsr/@ayaexptech/arsenal@0.1.0/binary-search';`
- Deno: DenoはJSR.ioをネイティブにサポートしています。
    - 例: `import { lower_bound } from "jsr:@ayaexptech/arsenal@0.1.0/binary-search";`
- Node.js, Bun, Cloudflare Workers, etc.: JSRはnpmの互換レイヤーを提供しているため、以下のようにインポートできます。
    - 例: `npx jsr add @ayaexptech/arsenal` -> `import { lower_bound } from "@ayaexptech/arsenal@0.1.0/binary-search";`

## License

copyright (c) 2025- AyaExpTech  
Released under the [MIT License](https://opensource.org/license/mit).

Author
- Ayasaka-Koto

Supported LLMs
- GitHub Copilot Chat (Model: GPT-4.1, GPT-5 mini)
- Google Gemini (https://gemini.google.com, Model: Gemini 2.5 Pro)

