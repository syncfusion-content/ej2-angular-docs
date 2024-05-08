import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component } from "@angular/core";
import { DateTimePickerComponent } from "@syncfusion/ej2-angular-calendars";

@Component({
imports: [
        
        DateTimePickerModule,
        FormsModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<ejs-datetimepicker placeholder='Select a date and time' [value]='date' [min]='minDate' [max]='maxDate'></ejs-datetimepicker>`
})
export class AppComponent {
  public date: Date = new Date("5/25/2017 4:00 PM");
  public minDate: Date = new Date("5/5/2017 2:00 PM");
  public maxDate: Date = new Date("5/25/2017 3:00 PM");
  constructor() {}
}



