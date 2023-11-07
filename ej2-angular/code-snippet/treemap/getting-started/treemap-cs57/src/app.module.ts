import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TreeMapModule, TreeMapLegendService, TreeMapAllModule } from '@syncfusion/ej2-angular-treemap';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, TreeMapModule, TreeMapAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
	providers: [TreeMapLegendService]
})
export class AppModule { }
