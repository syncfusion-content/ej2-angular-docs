import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Syncfusion Timeline module from layouts package.
import {  TimelineModule, TimelineAllModule } from "@syncfusion/ej2-angular-layouts";

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    //declaration of ej2-angular-layouts module into NgModule
    imports: [BrowserModule, TimelineModule, TimelineAllModule ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }