export function binary_search<T>(array: T[], target: T, compareFn?: (a: T, b: T) => number): boolean;
export function lower_bound<T>(array: T[], target: T, compareFn?: (a: T, b: T) => number): number;
export function upper_bound<T>(array: T[], target: T, compareFn?: (a: T, b: T) => number): number;
