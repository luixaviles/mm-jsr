import { StateDto } from "../models/State";
import { Module } from "./Module";
/**
 * Module visualising the limit applied via {@link ConfigAttrs.limit}.
 *
 * Uses `.jsr_limit` CSS class.
 */
export declare class ModuleLimit extends Module {
    private limit;
    destroy(): void;
    initView(): void;
    render(state: StateDto): VoidFunction;
}
