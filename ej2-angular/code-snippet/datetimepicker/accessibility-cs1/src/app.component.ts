


import { Component, HostListener, ViewChild } from "@angular/core";
import { DateTimePickerComponent } from "@syncfusion/ej2-angular-calendars";

@Component({
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



