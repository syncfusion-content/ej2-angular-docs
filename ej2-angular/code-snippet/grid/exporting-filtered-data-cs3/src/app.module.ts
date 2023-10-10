import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, SelectionService,ToolbarService, PdfExportService,PageService, FilterService } from '@syncfusion/ej2-angular-grids';
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
    providers: [ SelectionService,ToolbarService, PdfExportService,PageService, FilterService]
})
export class AppModule { }