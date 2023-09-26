import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the DashboardLayoutModule for the Dashboard Layout component
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    //declaration of ej2-angular-layouts module into NgModule
    imports: [BrowserModule, DashboardLayoutModule, ButtonModule ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }