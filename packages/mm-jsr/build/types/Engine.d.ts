import { InputHandler } from "./InputHandler";
import { Config, ConfigAttrs } from "./models/Config";
import { ChangeLimitCommand } from "./models/State";
import { Value } from "./models/Value";
import { Module } from "./modules/Module";
import { Renderer } from "./Renderer";
import { StateProcessor } from "./StateProcessor";
interface SetupCommand {
    config: ConfigAttrs;
    modules: Module[];
}
export declare type ValueChangeHandler = (v: {
    index: number;
    real: number;
    ratio: number;
}, options?: unknown) => void;
/**
 * Engine initializes and connects all modules together.
 */
export declare class Engine {
    readonly config: Config;
    readonly stateProcessor: StateProcessor;
    readonly inputHandler: InputHandler;
    readonly renderer: Renderer;
    readonly modules: Module[];
    /** Store for handlers for value change event */
    private valueChangeHandlers;
    /** Disabled Engine doesn't react on value change events */
    private enabled;
    constructor(setup: SetupCommand);
    addValueChangeHandler(handler: ValueChangeHandler): VoidFunction;
    enable(): void;
    disable(): void;
    isEnabled(): boolean;
    /**
     * Dynamically change limit in which values can operate.
     */
    changeLimit(command: ChangeLimitCommand): void;
    /**
     * Create Value object from real value.
     */
    produceRealValue(value: number): Value;
    /**
     * Initialize views of all modules.
     */
    private initView;
    /**
     * Internal handler for reacting on any value changed.
     * Updates the state, triggers value change event handlers.
     */
    private onValueChange;
    private renderState;
}
export {};
