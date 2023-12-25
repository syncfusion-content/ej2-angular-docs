import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CircularGaugeModule, AnnotationsService, GradientService } from '@syncfusion/ej2-angular-circulargauge';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, CircularGaugeModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [GradientService, AnnotationsService]
})
export class AppModule { }