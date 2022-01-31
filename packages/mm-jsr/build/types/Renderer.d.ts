interface Ctor {
    container: HTMLElement;
}
/**
 * Renderer is class responsible for managing core HTML element (`container`)
 * it's position, and for performing efficient render operations.
 */
export declare class Renderer {
    /**
     * Container is primary HTML element that will contain
     * all other HTML elements, that are created by modules.
     */
    private container;
    /** requestAnimationFrame reference */
    private rafId;
    private constructor();
    /**
     * @returns HTML container element
     */
    getContainer(): HTMLElement;
    /**
     * Add HTML child to container
     */
    addChild(child: HTMLElement): void;
    /**
     * Compute relative x in global coordinates relative to
     * container position.
     *
     * @example for container exactly in the middle of the page
     * and cursor excatly in the middle of the container
     * cursor global position put as `x` will return `0.5` as a result.
     */
    positionToRelative(x: number): number;
    /**
     * Compute ratio of `distance` against container size.
     *
     * @example for distance `200` if container has width `400`
     * it will return `0.5` as a result.
     */
    distanceToRelative(distance: number): number;
    /**
     * Enqueue render operation executing all `renderFunctions`.
     */
    render(renderFunctions: VoidFunction[]): void;
    static init(ctor: Ctor): Renderer;
}
export {};
