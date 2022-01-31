export declare class AssertError extends Error {
    constructor(valueName: string, value: AssertionValue, message: string);
}
declare type AssertionValue = string | number | object | AssertionValue[];
declare type AssertFunction = (v: AssertionValue) => false | {
    error: string;
    value: AssertionValue;
};
export declare const assert: (valueName: string, value: AssertionValue, assertFunction: AssertFunction) => void;
export declare const isInstanceOf: (klass: any) => AssertFunction;
export declare const isNumber: AssertFunction;
export declare const isString: AssertFunction;
export declare const isFunction: AssertFunction;
export declare const isPlainObject: AssertFunction;
export declare const isArray: (assertFunction: AssertFunction) => AssertFunction;
export {};
