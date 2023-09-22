import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, CircularGaugeModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }