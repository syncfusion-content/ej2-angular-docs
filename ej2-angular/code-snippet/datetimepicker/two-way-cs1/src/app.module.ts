import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DateTimePickerModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }