import { StateDto } from "../models/State";
import { Module } from "./Module";
export interface ModuleLabelSettings {
    /** Formatter used to format values before rendering them as text */
    formatter: (realValue: number) => string;
}
/**
 * Module showing labels, that are displaying current value as text (by default beneath values).
 * - draggable, but not clickable
 * - labels merge, when overlapping each-other
 * - merged labels are moveable by dragging individual values
 * - labels never exceed parent, sticking to one of it's sides
 *
 * Uses `.jsr_label` CSS class for each label. Hidden labels use `.is-hidden` class.
 *
 * @note At any point of time, all possible label combinations (single and merged labels) are rendered.
 * This is necessary for simpler code, but also for performance reasons. Merging labels is complex topic.
 * Those labels, that are computed to not be visible, have `.is-hidden` class appended.
 */
export declare class ModuleLabel extends Module {
    private labels;
    private primaryLabels;
    private settings;
    constructor(settings?: Partial<ModuleLabelSettings>);
    destroy(): void;
    initView(): void;
    render(state: StateDto): VoidFunction;
    private applyValues;
    /**
     * @performance
     */
    private fixOverlapping;
    /**
     * @performance
     */
    private fixExceeding;
    private handleMove;
    private doLabelsOverlap;
    private assertSettings;
}
export declare const getPrimaryLabels: (n: number) => string[];
export declare const getAllNeighourLabels: (n: number) => string[][];
export declare const verifyVisibleLabels: (verifiedLabels: string[], labels: string[], doLabelsOverlap: (first: string, second: string) => boolean) => string[];
