import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Syncfusion ej2-ng-calendars module
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        CalendarModule //declaration of ej2-ng-calendars module into NgModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }