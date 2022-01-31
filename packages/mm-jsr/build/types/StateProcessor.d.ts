import { ChangeLimitCommand, StateDto } from "./models/State";
import { Value } from "./models/Value";
import { ConfigDto } from "./models/Config";
interface Ctor {
    config: ConfigDto;
}
/**
 * StateProcessor is responsible for State object manipulation.
 *
 * It uses *extensions* to manipulate the state each time, something changes.
 */
export declare class StateProcessor {
    private state;
    private config;
    private constructor();
    changeLimit(command: ChangeLimitCommand): StateDto;
    updateValue(index: number, value: Value): {
        newState: StateDto;
        oldState: StateDto;
    };
    getState(): StateDto;
    /**
     * Apply all extensions to state.
     */
    private process;
    /**
     * Internal process function used by `process` function.
     */
    private internalProcess;
    static init(ctor: Ctor): StateProcessor;
}
export {};
