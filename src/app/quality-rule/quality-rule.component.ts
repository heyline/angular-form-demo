import {Component} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";
import {MyData, MyDataError} from "../app.component";

@Component({
  selector: 'app-quality-rule',
  templateUrl: './quality-rule.component.html'
})
export class QualityRuleComponent implements ControlValueAccessor {

  constructor(public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  fromControl = this.ngControl;

  value1?: string;
  value2?: string;

  onChange: any = () => {
  };

  onTouch: any = () => {
  };

  writeValue(obj: MyData | null): void {
    if (obj) {
      this.value1 = obj.value1
      this.value2 = obj.value2
    }
  }

  value1Changed(value: string) {
    this.value1 = value;
    this.onValueChange()
  }

  value2Changed(value: string) {
    this.value2 = value;
    this.onValueChange()
  }

  private onValueChange() {
    const data = {
      value1: this.value1,
      value2: this.value2
    } as MyData

    this.onChange(data);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  protected readonly MyDataError = MyDataError;
}
