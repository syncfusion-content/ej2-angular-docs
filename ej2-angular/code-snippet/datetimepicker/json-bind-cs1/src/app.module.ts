import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Syncfusion ej2-angular-calendars module
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DateTimePickerModule //declaration of ej2-angular-calendars module into NgModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }