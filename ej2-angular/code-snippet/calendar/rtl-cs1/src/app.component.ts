import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CalendarModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from '@angular/core';
import { loadCldr, L10n} from '@syncfusion/ej2-base';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

@Component({
imports: [
        
        CalendarModule //declaration of ej2-angular-calendars module into NgModule
    ],


standalone: true,
    selector: 'app-root',
    template: `
         <!-- Sets the value, locale,enableRtl -->
        <ejs-calendar [value]='dateValue' locale='ar' enableRtl='true'></ejs-calendar>
        `
})

export class AppComponent {
   public dateValue: Object = new Date();
    ngOnInit(): void {
       L10n.load({
        'ar': {
          'calendar': { today: "اليوم"}
        }
      });
    }
    constructor() {
    }
}


