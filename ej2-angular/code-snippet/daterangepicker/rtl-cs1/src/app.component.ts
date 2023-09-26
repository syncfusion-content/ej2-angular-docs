


import { Component } from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as hetimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, hetimeZoneNames);

@Component({
    selector: 'app-root',
    template: `<ejs-daterangepicker locale='he' [enableRtl]='isRTL'></ejs-daterangepicker>`
})

export class AppComponent {
    public isRTL: boolean = true;
    constructor() {
    }
    ngOnInit(): void {
        L10n.load({
            'he': {
                'daterangepicker': { placeholder: 'בחר טווח',
                 today:'היום',
        startLabel: 'תווית התחלה',
        endLabel: 'ח',
        applyText: 'להחיל טקסט',
        cancelText: 'בטל טקסט',
        selectedDays: 'ימים נבחרים',
        days: 'أימים',
        customRange: 'טווח מותאם אישית'
         }
        }
    });
}
}



