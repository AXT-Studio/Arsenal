/**
 * 文字列操作を行うためのユーティリティクラスを提供します。
 */
export declare class ExString {
    /**
     * 指定された文字列をランレングス圧縮します。
     */
    static runLengthEncode(str: string): { char: string; count: number }[];
}
