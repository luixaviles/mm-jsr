import { Value } from "./Value";
interface Data {
    values: Value[];
    limit?: {
        min?: Value;
        max?: Value;
    };
}
export interface StateDto extends Data {
}
export declare type ChangeLimitCommand = {
    min?: Value;
    max?: Value;
};
/**
 * State object stores information about values, and limits,
 * and any other values, that can be dynamically changed in the system.
 */
export declare class State {
    readonly values: Value[];
    readonly limit?: {
        min?: Value;
        max?: Value;
    };
    private constructor();
    updateValues(values: Value[]): State;
    changeLimit(command: ChangeLimitCommand): State;
    /**
     * If value exists (by instance) in @state, and doesn't exist in this.state,
     * it is marked as changed.
     */
    findChangedValues(state: State): number[];
    static fromData(data: Data): State;
    toDto(): StateDto;
    private toData;
}
export {};
