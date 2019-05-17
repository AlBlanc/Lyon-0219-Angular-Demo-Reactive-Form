import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

export const wildEmailValidator: ValidatorFn = (control: AbstractControl) => {
    let errors = {};

    if (control.value && !control.value.endsWith('@wild.school')) {
        errors['notWild'] = (control.value as string).split('@')[1];
    }

    return errors ? errors : null;
}

@Directive({
    selector: '[wildEmail][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useValue: wildEmailValidator, multi: true }
      ]
})
export class WildEmailDirective {

}