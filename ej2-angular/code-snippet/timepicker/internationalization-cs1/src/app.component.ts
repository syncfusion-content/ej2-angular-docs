


import { Component } from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import { enableRipple } from '@syncfusion/ej2-base';

//enable ripple style
enableRipple(true);

loadCldr(numberingSystems, gregorian, numbers);

@Component({
    selector: 'app-root',
    template: `
        <ejs-timepicker [locale]='locale' [value]='dateValue'></ejs-timepicker>
        `
})

export class AppComponent {
    public locale: string = 'de';
    public dateValue: Date = new Date();
    constructor() {}
    ngOnInit(): void {
        L10n.load({
            'de': {
                'timepicker': { placeholder: 'Wählen Sie Zeit' }
            }
        });
    }
}



