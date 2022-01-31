interface Options {
    onMouseDown: (e: MouseEvent) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: (e: MouseEvent) => void;
}
/**
 * Helper for handling down/up/move events.
 */
export declare const useOnMouse: (el: HTMLElement, { onMouseDown, onMouseMove, onMouseUp }: Options) => void;
export {};
