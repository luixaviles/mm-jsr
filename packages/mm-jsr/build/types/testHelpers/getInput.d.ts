import { ConfigAttrs } from "../models/Config";
import { State } from "../models/State";
export declare const getInput: ({ initialValues, min, max, step, limit, ...configInput }: Partial<ConfigAttrs>) => {
    config: Readonly<import("../models/Config").ConfigDto>;
    state: State;
};
