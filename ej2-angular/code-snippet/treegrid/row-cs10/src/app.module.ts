import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SwitchModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,TreeGridModule,
        DialogModule,
        SwitchModule,
        CheckBoxModule,
        DropDownListAllModule,
        NumericTextBoxAllModule,
        ButtonModule,
        ChipListModule,
        DatePickerAllModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }