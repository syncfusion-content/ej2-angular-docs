import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { TooltipAllModule } from "@syncfusion/ej2-angular-popups";

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule, TooltipAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }