
import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[slider-validate]',
    providers: [{ provide: NG_VALIDATORS, useExisting: SliderValidaton, multi: true }]
})


export class SliderValidaton implements Validator {
    validate(c: FormControl): ValidationErrors | any {
        const isValid = c.value > 10;
        return isValid ? null : 'not valid';
    }
}