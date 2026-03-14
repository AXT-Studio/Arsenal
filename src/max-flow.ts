// ================================================================================================
// entrypoint: max-flow
// 最大流問題を解くためのクラスを提供する
// ================================================================================================

// ================================================================
// import
// ================================================================

import { Deque } from "./deque.ts";

// ================================================================
// 型定義
// ================================================================

interface InternalEdge {
    to: number;
    rev: number;
    cap: number;
}

interface PublicEdge {
    from: number;
    to: number;
    cap: number;
    flow: number;
}

// ================================================================
// クラス本体
// ================================================================

class MaxFlow {
    /** 探索用: グラフの隣接リスト表現 */
    #graph: InternalEdge[][];
    /** 公開用: [i番目に追加された辺のfrom, graph[from]内のindex] */
    #pos: [number, number][];
    /**
     * 新しいMaxFlowインスタンスを生成する
     * @param n - グラフの頂点数
     * @constructor
     */
    constructor(n: number) {
        this.#graph = Array.from({ length: n }, () => []);
        this.#pos = [];
    }
    /**
     * フローネットワークに、点fromから点toへの容量capの辺を追加する。
     * また、この辺が何番目に追加された辺かを返す。
     * @param from - 辺の始点
     * @param to - 辺の終点
     * @param cap - 辺の容量
     * @return 何番目に追加された辺か (0-indexed)
     */
    addEdge(from: number, to: number, cap: number): number {
        const m = this.#pos.length;
        this.#pos.push([from, this.#graph[from].length]);
        this.#graph[from].push({ to, rev: this.#graph[to].length, cap });
        this.#graph[to].push({
            to: from,
            rev: this.#graph[from].length - 1,
            cap: 0,
        });
        return m;
    }
    /**
     * 点sから点tへの最大流量を求める。ただし、流量の上限をmax(未指定時はInfinity)とする。
     * @param s - 流量の始点
     * @param t - 流量の終点
     * @param max - 流量の上限 (デフォルトはInfinity)
     * @return 点sから点tへの最大流量
     */
    flow(s: number, t: number, max: number = Infinity): number {
        let flow = 0;
        while (true) {
            // BFSでレベルグラフ(点sからの距離)を構築する
            const level = Array(this.#graph.length).fill(-1);
            level[s] = 0;
            const queue = new Deque<number>();
            queue.push(s);
            while (queue.size > 0) {
                const v = queue.shift() as number;
                for (const e of this.#graph[v]) {
                    if (e.cap > 0 && level[e.to] < 0) {
                        level[e.to] = level[v] + 1;
                        queue.push(e.to);
                    }
                }
            }
            // もうsからtに到達できない場合は、これ以上流せないので終了
            if (level[t] < 0) {
                break;
            }
            // DFSで増加パスを探して流す
            const iter = Array(this.#graph.length).fill(0);
            /** 現在地v、ボトルネックの容量f(、目的地t)でDFS */
            const dfs = (v: number, f: number): number => {
                if (v === t) {
                    return f;
                }
                for (; iter[v] < this.#graph[v].length; iter[v]++) {
                    const e = this.#graph[v][iter[v]];
                    if (e.cap > 0 && level[v] < level[e.to]) {
                        const d = dfs(e.to, Math.min(f, e.cap));
                        if (d > 0) {
                            e.cap -= d;
                            this.#graph[e.to][e.rev].cap += d;
                            return d;
                        }
                    }
                }
                return 0;
            };
            let f;
            while ((f = dfs(s, max - flow)) > 0) {
                flow += f;
            }
            // flowがmaxに達したら、これ以上流せないので終了
            if (flow >= max) {
                break;
            }
        }
        return flow;
    }
    /**
     * 点sから点i(0 <= i < n)について、(残余グラフにおいて)点sから点iに(容量0の辺を通らずに)到達可能かどうかを返す配列を返す。
     * @param s - 始点
     * @return 点sから点i(0 <= i < n)について、(残余グラフにおいて)点sから点iに(容量0の辺を通らずに)到達可能かどうかを返す配列
     */
    minCut(s: number): boolean[] {
        const visited = Array(this.#graph.length).fill(false);
        const queue = new Deque<number>();
        queue.push(s);
        visited[s] = true;
        while (queue.size > 0) {
            const v = queue.shift() as number;
            for (const e of this.#graph[v]) {
                if (e.cap > 0 && !visited[e.to]) {
                    visited[e.to] = true;
                    queue.push(e.to);
                }
            }
        }
        return visited;
    }
    /**
     * n番目に追加された辺の情報を返す。
     * @param i - 辺の番号 (0-indexed)
     * @return n番目に追加された辺の情報 {from, to, cap, flow} capは辺の容量、flowは現在流れている流量
     */
    getEdge(i: number): PublicEdge {
        const [from, index] = this.#pos[i];
        const e = this.#graph[from][index];
        const rev = this.#graph[e.to][e.rev];
        return { from, to: e.to, cap: e.cap + rev.cap, flow: rev.cap };
    }
    /**
     * すべての辺の情報を返す。
     * @return すべての辺の情報 {from, to, cap, flow} の配列 capは辺の容量、flowは現在流れている流量
     */
    getEdges(): PublicEdge[] {
        const edges: PublicEdge[] = [];
        for (let i = 0; i < this.#pos.length; i++) {
            edges.push(this.getEdge(i));
        }
        return edges;
    }
    /**
     * i番目に追加した辺の容量をcapに、流量をflowに(強制的に)変更する。flowはcapを超えてはならない。
     * @param i - 辺の番号 (0-indexed)
     * @param cap - 辺の容量
     * @param flow - 流量 (capを超えてはならない)
     */
    changeEdge(i: number, cap: number, flow: number): void {
        const [from, index] = this.#pos[i];
        const e = this.#graph[from][index];
        const rev = this.#graph[e.to][e.rev];
        e.cap = cap - flow;
        rev.cap = flow;
    }
}

// ================================================================
// モジュールエクスポート
// ================================================================

export { MaxFlow };
