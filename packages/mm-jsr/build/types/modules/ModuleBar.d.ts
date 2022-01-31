import { StateDto } from "../models/State";
import { Module } from "./Module";
/**
 * Module showing bar between values.
 * - does not require Sliders to be enabled.
 * - bar is moveable horizontally, allowing to move neighbouring values simultaneously.
 * - bar is clickable, allowing for standard behavior.
 *
 * Uses `.jsr_bar` CSS class.
 */
export declare class ModuleBar extends Module {
    private bars;
    destroy(): void;
    initView(): void;
    render(state: StateDto): VoidFunction;
    private addMoveHandler;
}
