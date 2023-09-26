


import { Component, ViewChild } from "@angular/core";
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
  template: `
  <ejs-datepicker id="datepicker" #dateObj locale="de" width="245px" (change)="onChange($event) "format="dd MMMM yyyy"></ejs-datepicker>
  <div class="valuestring">
    <span>Parsed value</span>: <br />
    <span id="parsed"></span>
    <br /><br />
    <span>Formatted value </span>: <br />
    <span id="formatted"></span>
  </div>`
})
export class AppComponent {

  @ViewChild('dateObj')
  public dateObj?: any;

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

  onChange(args: any) {
    if (args.value) {
      (document.getElementById('parsed') as HTMLElement ).innerText = this.dateObj.globalize.parseDate(this.dateObj.inputElement.value, {
        format: 'dd MMMM yyyy',
        type: 'dateTime',
        skeleton: 'yMd',
      });
      (document.getElementById('formatted') as HTMLElement ).innerText = this.dateObj.globalize.formatDate(this.dateObj.value, {
        format: 'dd MMMM yyyy',
        type: 'dateTime',
        skeleton: 'yMd',
      });
    } else {
      (document.getElementById('parsed') as HTMLElement ).innerText = '';
      (document.getElementById('formatted') as HTMLElement ).innerText = '';
    }
  }
}



