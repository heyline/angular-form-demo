import {Component} from '@angular/core';
import {AbstractControl, NonNullableFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

export type MyData = {
  value1?: string;
  value2?: string;
};

export enum MyDataError {
  value1Error = "value1Error",
  value2Error = "value2Error"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public validateForm!: UntypedFormGroup;

  validatorFn = (control: AbstractControl) => {
    const myData = control.value as MyData;

    if (!(myData?.value1))
      return {[MyDataError.value1Error]: "value1 error"};

    if (!(myData?.value2))
      return {[MyDataError.value2Error]: "value2 error"};

    return {};
  };

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      myData: [null, [this.validatorFn]]
    });

    this.validateForm.valueChanges.subscribe(r => {
      console.error(r)
    })

  }

}
