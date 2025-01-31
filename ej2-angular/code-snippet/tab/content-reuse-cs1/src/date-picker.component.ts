import { Component, Input, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class DatePickerComponent  {
  target: string = (document.querySelector('.e-toolbar-item.e-active .e-tab-text') as Element).innerHTML;
     
}
