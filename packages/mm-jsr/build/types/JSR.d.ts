import { ValueChangeHandler } from "./Engine";
import { ConfigAttrs } from "./models/Config";
import { Module } from "./modules/Module";
import { ModuleBar } from "./modules/ModuleBar";
import { ModuleGrid } from "./modules/ModuleGrid";
import { ModuleLabel } from "./modules/ModuleLabel";
import { ModuleLimit } from "./modules/ModuleLimit";
import { ModuleRail } from "./modules/ModuleRail";
import { ModuleSlider } from "./modules/ModuleSlider";
export interface JsrConstructor {
    /** Configuration */
    config: ConfigAttrs;
    /** List of modules to use - without them, JSR shows nothing in HTML, but is still usable via API */
    modules: Module[];
}
export declare type ChangeLimitCommand = {
    min?: number;
    max?: number;
};
export declare class JSR {
    private engine;
    constructor(ctor: JsrConstructor);
    /**
     * Set `index` value (real).
     *
     * @param index - index of value to set
     * @param value - real value to set
     * @param options - additional options for external handling
     */
    setRealValue(index: number, value: number, options?: unknown): void;
    /**
     * Set `index` value (ratio).
     *
     * @param index - index of value to set
     * @param value - ratio value to set
     * @param options - additional options for external handling
     */
    setRatioValue(index: number, value: number, options?: unknown): void;
    /**
     * Get `index` value (real).
     *
     * @param index - index of value to get
     * @returns - real value
     */
    getRealValue(index: number): number;
    /**
     * Get `index` value (ratio).
     *
     * @param index - index of value to get
     * @returns - ratio value
     */
    getRatioValue(index: number): number;
    /**
     * Add handler listening of any value change.
     *
     * @param handler - handler listening for value change
     * @returns - returns function that allows to remove handler
     */
    onValueChange(handler: ValueChangeHandler): VoidFunction;
    /**
     * Dynamically change limit.
     *
     * @param command - limit object, that should be applied as new limit
     */
    changeLimit(command: ChangeLimitCommand): void;
    /**
     * Enable JSR by allowing value changes, and removing `.is-disabled` class from the container.
     */
    enable(): void;
    /**
     * Disable JSR by disallowing value changes, and adding `.is-disabled` class to the container.
     */
    disable(): void;
    /**
     * Return whether JSR is enabled or disabled.
     */
    isEnabled(): boolean;
    /**
     * Destroy JSR instance, removing all HTML elements (besides container) and event listeners.
     *
     * @NOTE this function does not remove the instance of JSR itself, therefore
     * it does not remove handler already added to JSR, but one can simple forget about this instance,
     * and let garbage-collector to collect it.
     *
     * It does not removes original container element.
     */
    destroy(): void;
    /** Base module used for creating user's own modules */
    static Module: typeof Module;
    /** Bar module */
    static Bar: typeof ModuleBar;
    /** Grid module */
    static Grid: typeof ModuleGrid;
    /** Label module */
    static Label: typeof ModuleLabel;
    /** Limit module */
    static Limit: typeof ModuleLimit;
    /** Rail module */
    static Rail: typeof ModuleRail;
    /** Slider module */
    static Slider: typeof ModuleSlider;
}
