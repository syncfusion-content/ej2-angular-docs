import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ProgressBarModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }