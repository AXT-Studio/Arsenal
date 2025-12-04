/**
 * 文字列操作を行うためのユーティリティクラスを提供します。
 * @module ex-string
 */
/* ==== 型チェック有効化・型定義ファイルの参照 (Triple-Slash Directives & Deno @ts-self-types) ==== */
// @ts-check
/// <reference path="./../declares/ex-string.d.ts" />
/* @ts-self-types="./../declares/ex-string.d.ts" */

class ExString {
    /**
     * 指定された文字列をランレングス圧縮します。
     * @param {string} str - 圧縮する文字列
     * @returns {{ char: string, count: number }[]} - ランレングス圧縮された結果
     */
    static runLengthEncode(str) {
        if (typeof str !== 'string') {
            throw new TypeError('引数strは文字列である必要があります。');
        }
        if (str.length === 0) {
            return [];
        }
        const result = [{ char: str[0], count: 1 }];
        for (let i = 1; i < str.length; i++) {
            const currentChar = str[i];
            const lastEntry = result[result.length - 1];
            if (currentChar === lastEntry.char) {
                lastEntry.count++;
            } else {
                result.push({ char: currentChar, count: 1 });
            }
        }
        return result;
    }
}

// ================================================================================================
// ES Module Export
// ================================================================================================

export { ExString };
