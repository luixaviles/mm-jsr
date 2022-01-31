interface Options {
    root: HTMLElement;
    onTouchDown: (e: Touch) => void;
    onTouchMove: (e: Touch) => void;
    onTouchUp: (e: Touch) => void;
}
/**
 * Helper for handling touch events (down, move, up, just like mouse)
 */
export declare const useOnTouch: (el: HTMLElement, { onTouchDown, onTouchMove, onTouchUp, root }: Options) => void;
export {};
