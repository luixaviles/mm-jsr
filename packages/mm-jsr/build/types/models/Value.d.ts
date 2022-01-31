export declare type RealValue = number;
export declare type RatioValue = number;
interface Data {
    min: RealValue;
    max: RealValue;
    real: RealValue;
}
interface FromRatio {
    min: RealValue;
    max: RealValue;
    ratio: RatioValue;
}
/**
 * Value-object representing single value stored in memory.
 * For example: each slider corresponds to one value.
 *
 * Value allows for seamless transition between "real" and "ratio" representation.
 * - Real represents value, that is between config.min and config.max limit,
 * and it is the value end user is interested in.
 * - Ratio represents value relative to config.min and config.max limit: between 0 and 1.
 * It is used mostly internally for computations of slider position and so on.
 */
export declare class Value {
    private real;
    private min;
    private max;
    private constructor();
    /**
     * Limit this value to min-max range (real)
     */
    clampReal(min: RealValue, max: RealValue): Value;
    changeReal(real: RealValue): Value;
    asReal(): RealValue;
    asRatio(): RatioValue;
    isExact(value: Value): boolean;
    static fromReal(data: Data): Value;
    static fromRatio(data: FromRatio): Value;
    private toData;
}
export {};
