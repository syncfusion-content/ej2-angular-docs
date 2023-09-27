import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ToolbarAllModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonAllModule  } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        FormsModule,
        ToolbarAllModule,
        BrowserModule,
        DatePickerAllModule,
        NumericTextBoxAllModule,
        ButtonAllModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }