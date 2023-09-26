import { DefaultDateRangePickerComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, DateRangePickerModule],
declarations: [DefaultDateRangePickerComponent],
bootstrap: [DefaultDateRangePickerComponent]
})
export class AppModule { }