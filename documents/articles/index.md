# AyaExpTech Arsenal

AyaExpTech Arsenalは、JavaScript向けの汎用ユーティリティライブラリです。
収録内容が競技プログラミングに偏っていますが、日常的な開発にも役立つ関数やデータ構造を提供します。

## Usage

AyaExpTech Arsenalは[JSR.io](https://jsr.io/@ayaexptech/arsenal)で公開されています。

- Web: `esm.sh`からimport
    ```js
    import { lower_bound } from 'https://esm.sh/jsr/@ayaexptech/arsenal@0.7.0/binary-search';
    ```
- Deno: JSRネイティブサポート
    ```js
    // Adhoc import
    import { lower_bound } from "jsr:@ayaexptech/arsenal@0.7.0/binary-search";
    ```
- Node.js, Bun, Cloudflare Workers, etc.: JSR npm互換レイヤー
    ```bash
    npx jsr add @ayaexptech/arsenal
    ```
    ```js
    import { lower_bound } from "@ayaexptech/arsenal@0.7.0/binary-search";
    ```

## License

copyright (c) 2025- AyaExpTech  
Released under the [MIT License](https://opensource.org/license/mit).

Author
- Ayasaka-Koto

Supported LLMs
- GitHub Copilot Chat (Model: GPT-4.1, GPT-5 mini)
- Google Gemini (https://gemini.google.com, Model: Gemini 2.5 Pro)

