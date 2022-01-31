export interface ConfigAttrs {
    /** Minimum value JSR can accept */
    min: number;
    /** Maximum value JSR can accept */
    max: number;
    /**
     * Step between values (can be float)
     *
     * @example
     * for min: 0, and max: 100, and step: 1 it gives you 101 possible values
     *
     * @example
     * for step: 0.1 it gives you 1001 possible values
     */
    step: number;
    /**
     * Initial values for JSR. Determines number of supported values at all.
     */
    initialValues: number[];
    /**
     * Limit, that allows values to move vary between `limit.min` and `limit.max`.
     * In opposite to required root `min` and `max`, limit can be changed dynamically.
     * Can be displayed visually using {@link ModuleLimit}.
     */
    limit?: {
        min?: number;
        max?: number;
    };
    /**
     * Container, that will contain all the modules.
     */
    container: HTMLElement;
}
export interface ConfigDto extends ConfigAttrs {
    stepDecimals: number;
    valuesCount: number;
}
export declare class Config {
    private attrs;
    private constructor();
    toDto(): Readonly<ConfigDto>;
    get max(): number;
    get min(): number;
    get step(): number;
    /**
     * Return how many decimal places the step has.
     */
    get stepDecimals(): number;
    get valuesCount(): number;
    static createFromInput(attrs: ConfigAttrs): Config;
}
