import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule, RadioButtonModule} from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

/**
 * Module
 */

@NgModule({
  imports: [
    BrowserModule,
	  QueryBuilderModule,
    CheckBoxModule,
    DropDownListModule,
    DropDownButtonModule,
    DatePickerModule,
    TextBoxModule,
    NumericTextBoxModule,
    MultiSelectModule,
    RadioButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }