import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SliderValidaton } from './sliderValidation';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SliderModule,
        FormsModule
    ],
    declarations: [AppComponent, SliderValidaton],
    bootstrap: [AppComponent]
})
export class AppModule { }