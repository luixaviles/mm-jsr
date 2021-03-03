import { useOnMove } from '@/events/useOnMove';
import { StateDto } from '@/models/State';
import { Module } from '@/modules/Module';

export class ModuleLabels extends Module {
  private labels: HTMLElement[] = [];

  public destroy () {
    this.labels.forEach(l => l.remove());
  }

  public initView () {
    this.labels = this.config.initialValues.map((_, index) => {
      const slider = document.createElement('div');
      slider.classList.add('jsr_label');
      slider.style.left = '0';

      useOnMove(slider, x => this.handleMove(index, x));

      return slider;
    });

    this.labels.forEach(label => this.renderer.addChild(label));
  }

  public render (state: StateDto): VoidFunction {
    return () => {
      state.values.forEach((value, i) => {
        this.labels[i].style.left = `${value.asRatio() * 100}%`;
        this.labels[i].innerHTML = value.asReal().toFixed(this.config.stepDecimals);
      });
    };
  }

  private handleMove (index: number, x: number) {
    this.input.setRatioValue(index, this.renderer.xToRelative(x));
  }
}