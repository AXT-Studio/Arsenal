# entrypoint: binary-search

ソート済みの配列の二分探索を行う関数群を提供します。

## exported members

- [`binary_search`](./binary_search.md): 配列`array`に`target`と等しい値が存在するかどうかを、二分探索を用いて判定
- [`lower_bound`](./lower_bound.md): 配列`array`の中で、`target`**以上**と判定される最初の要素のインデックス
- [`upper_bound`](./upper_bound.md): 配列`array`の中で、`target`**より大きい**と判定される最初の要素のインデックス

## Usage

- Web Browsers
    ```js
    // Adhoc import
    import { binary_search, lower_bound, upper_bound } from "https://esm.sh/jsr/@ayaexptech/arsenal/binary-search";
    ```
- Deno Adhoc Import
    ```ts
    import { binary_search, lower_bound, upper_bound } from "jsr:@ayaexptech/arsenal/binary-search";
    ```
- View...
    - [Source Code on GitHub](https://github.com/ayaexptech/Arsenal/tree/main/src/binary-search)
    - [Docs on JSR.io](https://jsr.io/@ayaexptech/arsenal/doc/binary-search)
