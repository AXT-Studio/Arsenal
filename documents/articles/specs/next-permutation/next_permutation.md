# function: next_permutation

ある配列について、呼び出されるたびに配列の次の順列を返すジェネレーター関数です。
for-ofなどを使って順列全列挙を行うことができます。

## 構文

```js
next_permutation(array);
```

## 引数

- `array: T[]`
    - 順列を生成する元となる配列です。

## 戻り値

- `Generator<T[]>`
    - 配列の次の順列を生成するジェネレーターを返します。

## 例

```js
const array = [1, 2, 3];
const gen = next_permutation(array);
for (const perm of gen) {
    console.log(perm);
}
// 出力:
// [1, 2, 3]
// [1, 3, 2]
// [2, 1, 3]
// [2, 3, 1]
// [3, 1, 2]
// [3, 2, 1]
```

## 計算量

- 時間計算量
    - 各順列の生成: $O(N)$ ($N$は配列の要素数)
    - 順列全列挙: $O(N! \times N)$ (順列の総数が$N!$であるため)
