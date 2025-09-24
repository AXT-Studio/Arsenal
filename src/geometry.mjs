/**
 * 幾何学的な計算を行うためのクラス・関数群です。
 * @module geometry
 */
/* ==== 型チェック有効化・型定義ファイルの参照 (Triple-Slash Directives & Deno @ts-self-types) ==== */
// @ts-check
/// <reference path="./../declares/geometry.d.ts" />
/* @ts-self-types="./../declares/geometry.d.ts" */

/**
 * 2次元ベクトルを表すクラスです。平面上の点の座標や方向を表現するのに便利です。
 * @param {number} x - x成分
 * @param {number} y - y成分
 */
class Vector2D {
    /**
     * @param {number} x - x成分
     * @param {number} y - y成分
     */
    constructor(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new TypeError('x and y must be numbers');
        }
        this.x = x;
        this.y = y;
    }
    /** @type {function(Vector2D): Vector2D} ベクトル同士の加算 */
    add(other) {
        return new Vector2D(this.x + other.x, this.y + other.y);
    }
    /** @type {function(Vector2D): Vector2D} ベクトル同士の減算 */
    sub(other) {
        return new Vector2D(this.x - other.x, this.y - other.y);
    }
    /** @type {function(Vector2D): number} ベクトルの内積 */
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    /** @type {function(Vector2D): number} ベクトルの外積 */
    cross(other) {
        return this.x * other.y - this.y * other.x;
    }
};

/** @type {(p0: Vector2D, p1: Vector2D, p2: Vector2D) => 0|1|-1} 2次元空間における3点の位置関係を判定します。3点が反時計回りに配置されている場合は`1`、時計回りに配置されている場合は`-1`、一直線上にある場合は`0`を返します。 */
const CCW = (p0, p1, p2) => {
    const a = p1.sub(p0);
    const b = p2.sub(p0);
    const crossProduct = a.cross(b);

    const eps = 1e-8;
    if (crossProduct > eps) return 1;
    if (crossProduct < -eps) return -1;
    return 0;
};

/** @type {(a1: Vector2D, a2: Vector2D, b1: Vector2D, b2: Vector2D) => boolean} - 線分a (a1, a2) と線分b (b1, b2) が交差している(または接している)なら`true`、そうでないなら`false`を返します。 */
const isSegmentsIntersect = (a1, a2, b1, b2) => {
    const t1 = CCW(a1, a2, b1);
    const t2 = CCW(a1, a2, b2);
    const t3 = CCW(b1, b2, a1);
    const t4 = CCW(b1, b2, a2);

    // 一般的なケース：互いの線分をまたいでいる
    if (t1 * t2 < 0 && t3 * t4 < 0) {
        return true;
    }

    // 特殊なケース：3点または4点が一直線上に並ぶ場合の処理
    // a1-a2-b1 が一直線上で、b1が線分a1-a2上にある
    if (t1 === 0 && (a1.sub(b1)).dot(a2.sub(b1)) <= 0) return true;
    // a1-a2-b2 が一直線上で、b2が線分a1-a2上にある
    if (t2 === 0 && (a1.sub(b2)).dot(a2.sub(b2)) <= 0) return true;
    // b1-b2-a1 が一直線上で、a1が線分b1-b2上にある
    if (t3 === 0 && (b1.sub(a1)).dot(b2.sub(a1)) <= 0) return true;
    // b1-b2-a2 が一直線上で、a2が線分b1-b2上にある
    if (t4 === 0 && (b1.sub(a2)).dot(b2.sub(a2)) <= 0) return true;

    return false;
};

export {
    Vector2D,
    CCW,
    isSegmentsIntersect
};
