import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { TabAllModule } from '@syncfusion/ej2-angular-navigations';

import { DatePickerComponent } from './date-picker.component';
import { DropDownComponent } from './drop-down.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [TabAllModule, BrowserModule, FormsModule, DatePickerModule ],
  declarations: [AppComponent, DatePickerComponent, DropDownComponent, DropDownListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
