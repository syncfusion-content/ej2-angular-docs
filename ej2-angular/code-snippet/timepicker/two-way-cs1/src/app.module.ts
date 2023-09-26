import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TimePickerModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }