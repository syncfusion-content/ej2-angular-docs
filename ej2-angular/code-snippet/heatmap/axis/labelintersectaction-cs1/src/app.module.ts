import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeatMapModule, TooltipService } from '@syncfusion/ej2-angular-heatmap';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, HeatMapModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [TooltipService]
})
export class AppModule { }
