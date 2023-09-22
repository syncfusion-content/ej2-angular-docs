import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        NumericTextBoxAllModule, DatePickerAllModule, DropDownListAllModule, ReactiveFormsModule, FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService]
})
export class AppModule { }