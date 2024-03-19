import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TextAreaModule} from '@syncfusion/ej2-angular-inputs';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TextAreaModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }