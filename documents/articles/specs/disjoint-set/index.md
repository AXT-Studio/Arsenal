# entrypoint: disjoint-set

素集合データ構造(Disjoint Set Union, 通称Union-Find)を提供します。

:::info
AyaExpTech Arsenalで提供されるDisjoint Set Unionは、経路圧縮とUnion by Sizeを行っています。
:::

## exported members

- [`DisjointSet`](./DisjointSet.md): 素集合データ構造の実装クラス

## Usage

- Web Browsers
    ```js
    // Adhoc import
    import { DisjointSet } from "https://esm.sh/jsr/@ayaexptech/arsenal/disjoint-set";
    ```
- Deno Adhoc Import
    ```ts
    import { DisjointSet } from "jsr:@ayaexptech/arsenal/disjoint-set";
    ```
- View...
    - [Source Code on GitHub](https://github.com/AXT-Studio/Arsenal/blob/main/src/disjoint-set.ts)
    - [Docs on JSR.io](https://jsr.io/@ayaexptech/arsenal/doc/disjoint-set)
