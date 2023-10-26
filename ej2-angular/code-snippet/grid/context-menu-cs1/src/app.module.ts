import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {
    ContextMenuService, PageService, ResizeService, SortService, GroupService, EditService,
    PdfExportService, ExcelExportService
} from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ContextMenuService,
        PageService,
        ResizeService,
        SortService,
        GroupService,
        EditService,
        PdfExportService,
        ExcelExportService]
})
export class AppModule { }
