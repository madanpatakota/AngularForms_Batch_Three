import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appFirstamEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: new FirstamEmailDirective(),
      multi: true,
    },
  ],
})

//i can get the element reference....
//you have to validate the that element
// and check the data and we have to send back the our
// referece
export class FirstamEmailDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): any {
    let value: string = control.value;
    if (value.indexOf('firstam.com') > -1) {
      return null;
    } else {
      return {
        isFirstamRequired: true,
      };
    }
  }
}
