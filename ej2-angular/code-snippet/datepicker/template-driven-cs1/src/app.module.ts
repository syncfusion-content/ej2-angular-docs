import { DefaultDatePickerComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, DatePickerModule],
declarations: [DefaultDatePickerComponent],
bootstrap: [DefaultDatePickerComponent]
})
export class AppModule { }