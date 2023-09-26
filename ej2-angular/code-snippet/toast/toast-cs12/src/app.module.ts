import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { ButtonModule, CheckBoxModule , RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ToastModule, ButtonModule, CheckBoxModule , RadioButtonModule, DropDownListModule, DatePickerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }