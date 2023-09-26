import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import {ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { AppComponent } from './app.component';



/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        ToolbarModule,
        DocumentEditorAllModule,
        ComboBoxModule,
        ColorPickerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
