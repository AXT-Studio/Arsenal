# entrypoint: geometry

幾何学的な計算を行うためのクラスや関数を提供します。

## exported members

- [`Vector2D`](./Vector2D.md): 2次元ベクトルを表すクラス
- [`CCW`](./CCW.md): 2次元平面上の3点の位置関係を判定する関数
- [`isSegmentsIntersect`](./isSegmentsIntersect.md): 2つの線分が交差しているかを判定する関数

## Usage

- Web Browsers
    ```js
    // Adhoc import
    import { Vector2D, CCW, isSegmentsIntersect } from "https://esm.sh/jsr/@ayaexptech/arsenal/geometry";
    ```
- Deno Adhoc Import
    ```ts
    import { Vector2D, CCW, isSegmentsIntersect } from "jsr:@ayaexptech/arsenal/geometry";
    ```
- View...
    - [Source Code on GitHub](https://github.com/AXT-Studio/Arsenal/blob/main/src/geometry.ts)
    - [Docs on JSR.io](https://jsr.io/@ayaexptech/arsenal/doc/geometry)
