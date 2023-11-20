import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ToolbarService, ExcelExportService,DetailRowService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ExcelExportService, ToolbarService, DetailRowService]
})
export class AppModule { }