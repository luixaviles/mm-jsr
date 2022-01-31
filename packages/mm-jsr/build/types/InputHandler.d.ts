import { ConfigDto } from "./models/Config";
import { StateDto } from "./models/State";
import { Value } from "./models/Value";
interface Ctor {
    config: ConfigDto;
    getState: () => StateDto;
    onChange: (index: number, value: Value, options?: unknown) => void;
}
/**
 * InputHandler is class responsible for manipulating values.
 * Any values, that are modified in the system, should be modified
 * through the InputHandler.
 */
export declare class InputHandler {
    private config;
    private onChange;
    private getState;
    private constructor();
    /**
     * Set real value of value at given index.
     */
    setRealValue(index: number, value: number, options?: unknown): void;
    /**
     * Set ratio value of value at given index.
     */
    setRatioValue(index: number, value: number, options?: unknown): void;
    /**
     * Set ratio value of value closest to the value, that is being set.
     *
     * @example
     * For values [0, 100] if we want to set value 30, the closest value to 30 is 0
     * at index 0. Therefore after this operation we will have values [30, 100]
     */
    setClosestRatioValue(valueToSet: number): void;
    /**
     * Change ratio value as given index by given ratio value.
     *
     * @example
     * newValue = oldValue + value
     */
    changeRatioBy(index: number, value: number): void;
    /**
     * Change real value as given index by given real value.
     *
     * @example
     * newValue = oldValue + value
     */
    changeRealBy(index: number, value: number): void;
    /**
     * Create setter, that allows to change value
     * by a offset, relative to value in the moment
     * of creating the setter.
     *
     * It allows user to not know current value, yet create a hook
     * that will modify value always relatively to the original value.
     *
     * @example
     * values = [25, 75]
     * setter = makeValueRatioOffsetModifier(0)
     * setter(10) -> [35, 75]
     * setter(20) -> [45, 75]
     * setter(-10) -> [25, 75]
     */
    makeValueRatioOffsetModifier(index: number): (offset: number) => void;
    static init(ctor: Ctor): InputHandler;
}
export {};
