import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        RecurrenceEditorModule,
        DropDownListAllModule,
        NumericTextBoxAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }