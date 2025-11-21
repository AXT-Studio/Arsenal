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
- Google Gemini (https://gemini.google.com, Model: Gemini 2.5 Pro, Gemini 3.0 Pro)

## Documents

各種仕様などのドキュメントは以下のリンクから参照できます。

- [公式ドキュメント (日本語)](https://arsenal.axtech.dev/)

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

詳細は[公式ドキュメントのInstallation](https://arsenal.axtech.dev/introduction/installation.md)を参照してください。

## Contributing

- バグ報告
    - [GitHub Issues](https://github.com/AXT-Studio/Arsenal/issues)よりお願いします。
- 機能追加
    - 本リポジトリ自体が綾坂ことの学習目的を兼ねているため、外部からの機能追加は原則受け付けていません。ご了承ください。
- ドキュメントの翻訳
    - そのうち手を付けます。しばらくお待ちください。
