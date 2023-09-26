import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        CalendarModule,
        DatePickerModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }