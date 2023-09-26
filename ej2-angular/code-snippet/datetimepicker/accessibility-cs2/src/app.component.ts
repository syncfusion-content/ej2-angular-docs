


import { Component } from "@angular/core";
import { DateTimePickerComponent } from "@syncfusion/ej2-angular-calendars";

@Component({
  selector: 'app-root',
  template: `<ejs-datetimepicker placeholder='Select a date and time' (renderDayCell)='onRenderCell($event)'></ejs-datetimepicker>`
})
export class AppComponent {
  onRenderCell(args: any) {
    /*Apply selected format to the component*/
    if (args.date.getDay() == 0 || args.date.getDay() == 6) {
      //sets isDisabled to true to disable the date.
      args.isDisabled = true;
    }
  }
  constructor() {}
}



