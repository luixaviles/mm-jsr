import { InputHandler } from "../InputHandler";
import { ConfigDto } from "../models/Config";
import { StateDto } from "../models/State";
import { Renderer } from "../Renderer";
export interface ModuleArgs {
    renderer: Renderer;
    config: ConfigDto;
    input: InputHandler;
}
/**
 * If user wants to create his/her own module,
 * it needs to extend this module, and implement all abstract methods.
 */
export declare abstract class Module {
    protected renderer: Renderer;
    protected config: ConfigDto;
    protected input: InputHandler;
    /**
     * Tells, how the module should be destroyed.
     * This usually involves removing all created HTML elements,
     * and event handlers, that were attached to other than removed elements.
     */
    abstract destroy(): void;
    /**
     * Tells, how the module should render.
     * This function is called everytime something changes within the application.
     */
    abstract render(state: StateDto): VoidFunction;
    /**
     * Called once, when JSR is ready to append this module to HTML DOM.
     * All element creation and event handler should be bind here.
     */
    abstract initView(): void;
    /**
     * Initial configuration of a module, providing it with dependencies.
     * Called internally.
     *
     * @private
     */
    init(args: ModuleArgs): this;
}
