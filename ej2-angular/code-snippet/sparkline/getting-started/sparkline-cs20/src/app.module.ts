import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, SparklineModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
	providers: [SparklineTooltipService]
})
export class AppModule { }