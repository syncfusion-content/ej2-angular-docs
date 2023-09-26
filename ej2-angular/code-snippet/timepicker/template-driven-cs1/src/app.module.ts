import { DefaultTimePickerComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, TimePickerModule],
declarations: [DefaultTimePickerComponent],
bootstrap: [DefaultTimePickerComponent]
})
export class AppModule { }