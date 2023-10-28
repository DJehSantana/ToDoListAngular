import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[futureDate][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FutureDateDirective, multi: true }
  ]
})
export class FutureDateDirective implements Validator {

  constructor() { }
  validate(c: AbstractControl): { [key: string]: any; } {
    const value = new Date(c.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return value < today ? { 'futureDate': { valid: false } } : null;
  }
}
