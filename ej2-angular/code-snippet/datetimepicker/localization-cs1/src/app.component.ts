

import { Component } from "@angular/core";
import { DateTimePickerComponent } from "@syncfusion/ej2-angular-calendars";
import { loadCldr, L10n } from "@syncfusion/ej2-base";
// Here we have referred local json files for preview purpose
import * as numberingSystems from "./numberingSystems.json";
import * as gregorian from "./ca-gregorian.json";
import * as numbers from "./numbers.json";
import * as detimeZoneNames from "./timeZoneNames.json";

loadCldr(numberingSystems, gregorian, numbers, detimeZoneNames);

@Component({
  selector: 'app-root',
  template: `<ejs-datetimepicker [value]='date' locale='de'></ejs-datetimepicker>`
})
export class AppComponent {
  public date: Date = new Date("12/11/2017 1:00 AM");
  ngOnInit(): void {
    /*loads the localization text*/
    L10n.load({
      de: {
        datetimepicker: {
          placeholder: "Wählen Sie ein Datum und eine Uhrzeit aus",
          today:"heute"
        }
      }
    });
  }
  constructor() {}
}


