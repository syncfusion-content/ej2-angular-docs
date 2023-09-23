import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
setCulture('de');
setCurrencyCode('EUR');

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