import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';


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
    providers: [ExcelExportService, ToolbarService]
})
export class AppModule { }