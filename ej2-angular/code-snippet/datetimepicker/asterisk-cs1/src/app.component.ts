import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component } from "@angular/core";

@Component({
imports: [
        
        DateTimePickerModule,
        FormsModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<ejs-datetimepicker floatLabelType="auto" placeholder="Enter date"></ejs-datetimepicker>`
})
export class AppComponent {
  constructor() {}
}

