import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DialogAllModule } from '@syncfusion/ej2-angular-popups';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        FormsModule,
        TabAllModule,
        BrowserModule,
        GridAllModule,
        DialogAllModule,
        DatePickerAllModule,
        DropDownListAllModule,
        NumericTextBoxAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }