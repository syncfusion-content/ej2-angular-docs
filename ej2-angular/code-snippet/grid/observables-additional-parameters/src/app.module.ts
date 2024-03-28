import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageService, SortService, GroupService, PdfExportService, ExcelExportService, FilterService, EditService, ToolbarService, AggregateService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,HttpClientModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService,
                GroupService,
                PdfExportService, ExcelExportService,
                AggregateService,HttpClient ]
})
export class AppModule { }
