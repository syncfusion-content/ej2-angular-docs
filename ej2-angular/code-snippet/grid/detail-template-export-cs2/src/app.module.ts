import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DetailRowService, ExcelExportService, ToolbarService } from '@syncfusion/ej2-angular-grids';
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
    providers: [DetailRowService, ExcelExportService, ToolbarService]
})
export class AppModule { }