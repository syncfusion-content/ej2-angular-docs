import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, CircularChart3DAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [CircularChart3DAllModule]
})
export class AppModule { }