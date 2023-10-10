import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids';
import {
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
} from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonModule,
        CheckBoxModule,
        RadioButtonModule,
        SwitchModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PdfExportService, ToolbarService]
})
export class AppModule { }
