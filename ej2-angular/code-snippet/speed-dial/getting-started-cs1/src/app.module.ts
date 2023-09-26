import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpeedDialModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SpeedDialModule// Registering EJ2 SpeedDial Module.
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }