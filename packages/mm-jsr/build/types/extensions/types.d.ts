import { ConfigDto } from "../models/Config";
import type { State } from "../models/State";
export interface Changelog {
    changedValues: number[];
}
export declare type Extension = (config: ConfigDto, state: State, changelog: Changelog) => State;
