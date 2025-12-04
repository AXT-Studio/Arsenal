// ================================================================================================
// entrypoint: ex-string
// 文字列操作を行うためのユーティリティクラスです。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

class ExString {
    /**
     * 指定された文字列をランレングス圧縮します。
     * @param str - 圧縮する文字列
     * @returns ランレングス圧縮された結果
     */
    static runLengthEncode(str: string): { char: string; count: number }[] {
        if (typeof str !== "string") {
            throw new TypeError("引数strは文字列である必要があります。");
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

// ================================================================
// エクスポート
// ================================================================

export { ExString };
