/**
 * - 一意なIDを生成するためのユーティリティ関数を提供します。
 * @module unique-ids
 */
/* @ts-self-types="./declares/unique-ids.d.ts" */
// @ts-check

/**
 * UUIDv7を生成します。
 * @param {number} [timestamp] - UNIXタイムスタンプ(ミリ秒単位)。省略すると現在の時刻が使用されます。
 * @returns {string} - 生成されたUUIDv7文字列
 */
const getUUIDv7 = (timestamp = Date.now()) => {
    // Validation: タイムスタンプが整数かつ48bit以内であることを確認
    if (
        typeof timestamp !== 'number' ||
        !Number.isInteger(timestamp) ||
        timestamp < 0 ||
        timestamp > 2 ** 48 - 1
    ) {
        throw new TypeError('Timestamp must be a non-negative integer not greater than 2**48-1 (48 bits).');
    }
    // UUIDv7でランダムな部分を残すためのビットマスク用の値を定義
    const RANDOM_PART_MASK = 0x0000000000000FFF3FFFFFFFFFFFFFFFn;
    // とりあえず128bitの乱数をつくってBigIntにする
    const randomUint8Array = new Uint8Array(16);
    crypto.getRandomValues(randomUint8Array);
    const randomHexString = Array.from(randomUint8Array, byte => byte.toString(16).padStart(2, '0')).join(''); // Note: Uint8Array.toHex()がサポートされればそれでOK
    const randomBigInt = BigInt('0x' + randomHexString);
    // UUIDv7文字列の元になる1つのBigIntを作成する
    const uuidBigInt = (
        (BigInt(timestamp) << 80n) | // タイムスタンプを上位48ビットに配置
        (7n << 76n) | // UUIDのバージョン番号
        (2n << 62n) | // UUIDのバリアント
        (randomBigInt & RANDOM_PART_MASK) // ランダム部分
    );
    // UUIDv7文字列を生成する (8文字-4文字-4文字-4文字-12文字の形式)
    return uuidBigInt.toString(16).padStart(32, '0').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5').toLowerCase();
};

export { getUUIDv7 };
