import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { PageService, SortService, FilterService, GroupService, ToolbarService, ExcelExportService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,
                GroupService,
                ToolbarService,
                ExcelExportService]
})
export class AppModule { }
