import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BulletChartModule } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, BulletChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ ]
})
export class AppModule { }