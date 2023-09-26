


import { Component } from '@angular/core';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as artimeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, artimeZoneNames);

@Component({
    selector: 'app-root',
    template: `<ejs-datetimepicker [enableRtl]='true' locale='ar'></ejs-datetimepicker>`
})

export class AppComponent {
    ngOnInit(): void {
       L10n.load({
        'ar': {
          'datetimepicker': {
              placeholder: 'حدد التاريخ والوقت',
              today: "اليوم"
          }
        }
      });
    }
    constructor() {}
}



