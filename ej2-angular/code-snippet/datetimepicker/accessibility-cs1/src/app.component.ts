import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars'




import { Component, HostListener, ViewChild } from "@angular/core";
import { DateTimePickerComponent } from "@syncfusion/ej2-angular-calendars";

@Component({
imports: [
        
        DateTimePickerModule,
        FormsModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<ejs-datetimepicker #ejDateTimePicker placeholder='Select a date and time'></ejs-datetimepicker>`
})
export class AppComponent {
  @ViewChild("ejDateTimePicker") ejDateTimePicker?: DateTimePickerComponent;
  @HostListener("document:keyup", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === 84 /* t */) {
      // press alt+t to focus the component.
      this.ejDateTimePicker?.focusIn();
    }
  }
  constructor() {}
}



