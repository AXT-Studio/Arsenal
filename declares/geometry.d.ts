/**
 * 2次元ベクトルを表すクラスです。
 */
export class Vector2D {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(other: Vector2D): Vector2D;
    sub(other: Vector2D): Vector2D;
    dot(other: Vector2D): number;
    cross(other: Vector2D): number;
}

/**
 * 2次元空間における3点の位置関係を判定します。
 * - ベクトルの外積を利用して、3点が反時計回り、時計回り、または一直線上にあるかを判定します。
 * - 3点が反時計回りに配置されている場合は`1`、時計回りに配置されている場合は`-1`、一直線上にある場合は`0`を返します。
 */
export function CCW(p0: Vector2D, p1: Vector2D, p2: Vector2D): 0 | 1 | -1;

/**
 * 2次元空間における線分の交差判定を行います。
 * - 線分a (a1, a2) と線分b (b1, b2) が交差しているなら`true`、そうでないなら`false`を返します。
 */
export function isSegmentsIntersect(
    a1: Vector2D,
    a2: Vector2D,
    b1: Vector2D,
    b2: Vector2D,
): boolean;
