import { StateDto } from "../models/State";
import { Module } from "./Module";
/**
 * Module showing horizontal bar.
 * - clickable
 *
 * Uses `.jsr_rail` CSS class.
 */
export declare class ModuleRail extends Module {
    private rail;
    destroy(): void;
    initView(): void;
    render(_: StateDto): VoidFunction;
    private handleClick;
}
