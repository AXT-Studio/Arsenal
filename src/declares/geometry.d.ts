export class Vector2D {
    x: number;
    y: number;
    constructor(x: number, y: number);
    add(other: Vector2D): Vector2D;
    sub(other: Vector2D): Vector2D;
    dot(other: Vector2D): number;
    cross(other: Vector2D): number;
}

export function CCW(p0: Vector2D, p1: Vector2D, p2: Vector2D): 0 | 1 | -1;
export function isSegmentsIntersect(a1: Vector2D, a2: Vector2D, b1: Vector2D, b2: Vector2D): boolean;
