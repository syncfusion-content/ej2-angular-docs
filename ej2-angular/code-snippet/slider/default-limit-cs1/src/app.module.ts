import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SliderModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }