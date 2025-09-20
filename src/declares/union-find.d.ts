export class UnionFind {
    constructor(size: number);
    find(x: number): number;
    union(x: number, y: number): boolean;
    connected(x: number, y: number): boolean;
    readonly componentCount: number;
}
