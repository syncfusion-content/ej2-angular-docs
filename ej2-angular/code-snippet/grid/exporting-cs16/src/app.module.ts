import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        TextBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PdfExportService, ToolbarService]
})
export class AppModule { }
