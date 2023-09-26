import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { RadioButtonAllModule, ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        CommonModule, SpreadsheetAllModule, BrowserModule, TextBoxAllModule, RadioButtonAllModule, DropDownListAllModule, MultiSelectAllModule, ButtonAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }