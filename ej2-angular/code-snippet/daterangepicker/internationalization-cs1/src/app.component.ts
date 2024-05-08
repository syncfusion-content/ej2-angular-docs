import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as detimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames);

@Component({
imports: [
        
        DateRangePickerModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<ejs-daterangepicker locale='de'></ejs-daterangepicker>`
})

export class AppComponent {
    constructor() {
    }
    ngOnInit(): void {
        L10n.load({
            'de': {
                'daterangepicker': { placeholder: 'Wählen Sie einen Bereich aus',
                today:"heute",
                startLabel: 'Wählen Sie Startdatum',
                endLabel: 'Wählen Sie Enddatum',
                applyText: 'Sich bewerben',
                cancelText: 'Stornieren',
                selectedDays: 'Ausgewählte Tage',
                days: 'Tage',
                customRange: 'benutzerdefinierten Bereich'
                }
            }
        });
    }
}



