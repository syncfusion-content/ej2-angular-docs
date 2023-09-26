import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        RadioButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }