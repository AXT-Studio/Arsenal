/**
 * 幾何学的な計算を行うためのクラス・関数群です。
 * @module geometry
 */
/* @ts-self-types="./declares/geometry.d.ts" */
// @ts-check

/**
 * 2次元ベクトルを表すクラスです。
 * - 平面上の点の座標や方向を表現するのに便利です。
 * - ベクトルの加算、減算、内積、外積などの基本的な演算をサポートしています。
 * @param {number} x - x成分
 * @param {number} y - y成分
 * @example
 * ```js
 * import { Vector2D } from 'vector-2d'
 * const v1 = new Vector2D(1, 2);
 * const v2 = new Vector2D(3, 4);
 * // add
 * const v_add = v1.add(v2);
 * console.log(v_add.x, v_add.y); // Expected Log Output : <number> 4 <number> 6
 * // sub
 * const v_sub = v2.sub(v1);
 * console.log(v_sub.x, v_sub.y); // Expected Log Output : <number> 2 <number> 2
 * // dot
 * const dot_product = v1.dot(v2);
 * console.log(dot_product); // Expected Log Output : <number> 11
 * // cross
 * const cross_product = v1.cross(v2);
 * console.log(cross_product); // Expected Log Output : <number> -2
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
    /**
     * ベクトル同士の加算を行います。
     * @param {Vector2D} other - 加算するベクトル
     * @returns {Vector2D} - 加算結果のベクトル
     */
    add(other) {
        return new Vector2D(this.x + other.x, this.y + other.y);
    }
    /**
     * ベクトル同士の減算を行います。
     * @param {Vector2D} other - 減算するベクトル
     * @returns {Vector2D} - 減算結果のベクトル
     */
    sub(other) {
        return new Vector2D(this.x - other.x, this.y - other.y);
    }
    /**
     * ベクトルの内積を計算します。
     * @param {Vector2D} other - 内積を計算するベクトル
     * @returns {number} - 内積の結果
     */
    dot(other) {
        return this.x * other.x + this.y * other.y;
    }
    /**
     * ベクトルの外積を計算します。
     * @param {Vector2D} other - 外積を計算するベクトル
     * @returns {number} - 外積の結果
     */
    cross(other) {
        return this.x * other.y - this.y * other.x;
    }
};

/**
 * 2次元空間における3点の位置関係を判定します。
 * - ベクトルの外積を利用して、3点が反時計回り、時計回り、または一直線上にあるかを判定します。
 * - 3点が反時計回りに配置されている場合は`1`、時計回りに配置されている場合は`-1`、一直線上にある場合は`0`を返します。
 * @param {Vector2D} p0 - 1つ目の点
 * @param {Vector2D} p1 - 2つ目の点
 * @param {Vector2D} p2 - 3つ目の点
 * @returns {0|1|-1} - 位置関係の判定結果
 */
const CCW = (p0, p1, p2) => {
    const a = p1.sub(p0);
    const b = p2.sub(p0);
    const crossProduct = a.cross(b);

    const eps = 1e-8;
    if (crossProduct > eps) return 1;
    if (crossProduct < -eps) return -1;
    return 0;
};

/**
 * 2次元空間における線分の交差判定を行います。
 * - 線分a (a1, a2) と線分b (b1, b2) が交差しているなら`true`、そうでないなら`false`を返します。
 * @param {Vector2D} a1 - 線分aの始点
 * @param {Vector2D} a2 - 線分aの終点
 * @param {Vector2D} b1 - 線分bの始点
 * @param {Vector2D} b2 - 線分bの終点
 * @returns {boolean} - 交差している場合はtrue、そうでない場合はfalse (接してる場合はtrue)
 */
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
