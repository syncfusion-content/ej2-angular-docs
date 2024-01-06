import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService, SortService, PageService]
})
export class AppModule { }
