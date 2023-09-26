import { DefaultDateTimePickerComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, DateTimePickerModule],
declarations: [DefaultDateTimePickerComponent],
bootstrap: [DefaultDateTimePickerComponent]
})
export class AppModule { }