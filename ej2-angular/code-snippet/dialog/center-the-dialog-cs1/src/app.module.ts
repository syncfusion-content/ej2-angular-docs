import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Dialog, DialogAllModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, DialogAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }