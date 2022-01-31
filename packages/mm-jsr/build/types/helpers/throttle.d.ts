/**
 * Throttling function.
 */
export declare const throttle: <P, T extends (...args: any[]) => P>(f: T, time: number) => (...args: Parameters<T>) => void;
