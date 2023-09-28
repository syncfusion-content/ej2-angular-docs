

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Browser } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    templateUrl: './template.html',
    styleUrls:['./index.css']
})

export class AppComponent {
    private cValue: string = "#1de4d7";

    get value(): string {
        if (Browser.info.name === 'msie' && this.cValue.length > 7) {
            return this.cValue.substring(0, this.cValue.length - 2);
        } else {
            return this.cValue;
        }
    }

    @Input('value')
    set value(value: string) {
        this.cValue = value;
    }
}


