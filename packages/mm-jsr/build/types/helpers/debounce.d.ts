/**
 * Typical debounce
 *
 * @see https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940#gistcomment-3684038
 */
export declare const debounce: <T extends (...args: any[]) => any>(callback: T, waitFor: number) => (...args: Parameters<T>) => ReturnType<T>;
