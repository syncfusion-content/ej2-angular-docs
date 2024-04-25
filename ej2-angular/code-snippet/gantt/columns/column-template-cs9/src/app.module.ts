import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { SparklineAllModule, } from '@syncfusion/ej2-angular-charts';
import { ResizeService, SelectionService,   } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule, SparklineAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ResizeService, SelectionService]
})
export class AppModule { }