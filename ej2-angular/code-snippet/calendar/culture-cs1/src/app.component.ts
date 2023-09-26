


import { Component } from '@angular/core';
import { loadCldr, L10n } from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

@Component({
    selector: 'app-root',
    template: `
    <!-- Sets the value, locale -->
    <ejs-calendar [value]='dateValue' locale='de'></ejs-calendar>`
})

export class AppComponent {
   public dateValue: Object = new Date();
    ngOnInit(): void {
    /*loads the localization text*/
    L10n.load({
      'de': {
        'calendar': {
           today:"heute"
        }
      }
    });
  }
    constructor() {
    }
}


