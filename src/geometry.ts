// ================================================================================================
// entrypoint: geometry
// 幾何学的な計算を行うためのクラス・関数群です。
// ================================================================================================

// ================================================================
// クラス本体
// ================================================================

/**
 * 2次元ベクトルを表すクラスです。平面上の点の座標や方向を表現するのに使用できます。
 */
class Vector2D {
    x: number;
    y: number;

    /**
     * 新しいVector2Dインスタンスを作成します。
     * @param x - x座標
     * @param y - y座標
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /** ベクトル同士の加算 */
    add(other: Vector2D): Vector2D {
        return new Vector2D(this.x + other.x, this.y + other.y);
    }
    /** ベクトル同士の減算 */
    sub(other: Vector2D): Vector2D {
        return new Vector2D(this.x - other.x, this.y - other.y);
    }
    /** ベクトルの内積 */
    dot(other: Vector2D): number {
        return this.x * other.x + this.y * other.y;
    }
    /** 2次元ベクトルの「外積」に相当するスカラー値 */
    cross(other: Vector2D): number {
        return this.x * other.y - this.y * other.x;
    }
}

/**
 * 2次元空間における3点の位置関係を判定します。
 * @returns 3点が反時計回りに配置されている場合は`1`、時計回りに配置されている場合は`-1`、一直線上にある場合は`0`
 */
const CCW = (p0: Vector2D, p1: Vector2D, p2: Vector2D): 0 | 1 | -1 => {
    const a = p1.sub(p0);
    const b = p2.sub(p0);
    const crossProduct = a.cross(b);

    const eps = 1e-8;
    if (crossProduct > eps) return 1;
    if (crossProduct < -eps) return -1;
    return 0;
};

/**
 * 線分a (a1, a2) と線分b (b1, b2) が交差している(または接している)かを判定します。
 * @returns 交差している場合は`true`、そうでない場合は`false` (接している場合も`true`)
 */
const isSegmentsIntersect = (
    a1: Vector2D,
    a2: Vector2D,
    b1: Vector2D,
    b2: Vector2D,
): boolean => {
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

// ================================================================
// エクスポート
// ================================================================

export { CCW, isSegmentsIntersect, Vector2D };
