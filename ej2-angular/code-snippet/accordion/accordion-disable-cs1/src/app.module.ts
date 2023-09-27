import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DialogAllModule } from '@syncfusion/ej2-angular-popups';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DialogAllModule,
        AccordionModule,
        DatePickerAllModule,
        NumericTextBoxAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }