export class Deque<T> {
    constructor(array?: T[]);
    unshift(value: T): void;
    push(value: T): void;
    shift(): T | undefined;
    pop(): T | undefined;
    first(): T | undefined;
    last(): T | undefined;
    isEmpty(): boolean;
    toArray(): T[];
    readonly size: number;
}
