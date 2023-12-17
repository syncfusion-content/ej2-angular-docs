import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Chart3DModule } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, Chart3DModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [Chart3DModule]
})
export class AppModule { }