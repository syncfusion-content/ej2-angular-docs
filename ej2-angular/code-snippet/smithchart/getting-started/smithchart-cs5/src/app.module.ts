import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SmithchartModule, TooltipRenderService, SmithchartLegendService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, SmithchartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [TooltipRenderService, SmithchartLegendService]
})
export class AppModule { }