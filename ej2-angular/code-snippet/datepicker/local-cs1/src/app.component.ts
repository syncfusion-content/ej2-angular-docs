

import { Component } from "@angular/core";
import { DatePickerComponent } from "@syncfusion/ej2-angular-calendars";
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as detimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames);


@Component({
  selector: 'app-root',
  template: `<ejs-datepicker locale='de'></ejs-datepicker>`
})
export class AppComponent {
  ngOnInit(): void {
    /*loads the localization text*/
    L10n.load({
      'de': {
        'datepicker': {
          placeholder: 'Wählen Sie ein Datum aus',
          today:'heute'
        }
      }
    });
  }
  constructor() {}
}


