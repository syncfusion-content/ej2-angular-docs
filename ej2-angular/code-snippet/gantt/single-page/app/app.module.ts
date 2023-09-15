import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ToolbarService, PdfExportService, SelectionService } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ToolbarService, PdfExportService, SelectionService]
})
export class AppModule { }