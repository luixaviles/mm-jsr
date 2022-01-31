import { StateDto } from "../models/State";
import { Module } from "./Module";
/**
 * Module showing points (shape depends on CSS) where values should be.
 * - draggable
 * - adds keyboard support
 *
 * Uses `.jsr_slider` CSS class for each slider. Additional styles may be applied for `.jsr_slider:focus`
 */
export declare class ModuleSlider extends Module {
    private sliders;
    private destroyEvents;
    destroy(): void;
    initView(): void;
    render(state: StateDto): VoidFunction;
    private handleMove;
    private handleKeyboard;
    private handleKeyboardWithShift;
    private handleKeyboardWithCtrl;
    private handleKeyboardPlain;
}
