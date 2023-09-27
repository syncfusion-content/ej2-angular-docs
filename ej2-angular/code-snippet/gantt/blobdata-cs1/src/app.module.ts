import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule ,ExcelExportService,ExcelExport, GanttAllModule} from '@syncfusion/ej2-angular-gantt';
import { ToolbarService, PdfExportService, SelectionService } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule,GanttAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ToolbarService, PdfExportService, SelectionService, ExcelExportService]
})
export class AppModule { }