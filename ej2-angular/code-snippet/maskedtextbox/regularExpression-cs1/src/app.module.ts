import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, MaskedTextBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }