import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge';
import { AnnotationsService } from '@syncfusion/ej2-angular-lineargauge';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, LinearGaugeModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ AnnotationsService ]
})
export class AppModule { }