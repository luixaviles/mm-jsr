import { StateDto } from "../models/State";
import { Module } from "./Module";
export interface ModuleGridGetLinesCountParams {
    /** Width of the container */
    containerWidth: number;
}
export interface ModuleGridShouldShowLabelParams {
    /** Line number currently displayed */
    i: number;
    /** Number of all lines */
    linesCount: number;
}
export interface ModuleGridSettings {
    /** Color of grid text and lines. Can be any CSS valid color string */
    color: string;
    /** Height of grid lines (in pixels, no unit) */
    height: number;
    /** Font size of grid text (in pixels, no unit) */
    fontSize: number;
    /** Font family of grid text (should be supported by the browser) */
    fontFamily: string;
    /** Vertical distance between text and lines (in pixels, no unit) */
    textPadding: number;
    /** Formatter used to format values before rendering them as text */
    formatter: (realValue: number) => string;
    /** Returns count of lines, that should be rendered for grid */
    getLinesCount: (opt: ModuleGridGetLinesCountParams) => number;
    /** Function that determines whether line label should be drawn or not */
    shouldShowLabel: (params: ModuleGridShouldShowLabelParams) => boolean;
}
/**
 * Module showing grid (by default beneath rail) giving overview
 * what values are where.
 * - clickable
 * - uses canvas for rendering, to not pollute DOM
 *
 * Uses `.jsr_grid` as grid parent CSS class.
 */
export declare class ModuleGrid extends Module {
    private grid;
    private context;
    private settings;
    constructor(settings?: Partial<ModuleGridSettings>);
    destroy(): void;
    initView(): void;
    render(_: StateDto): VoidFunction;
    private drawGrid;
    private handleWindowResize;
    private handleClick;
    private assertSettings;
}
