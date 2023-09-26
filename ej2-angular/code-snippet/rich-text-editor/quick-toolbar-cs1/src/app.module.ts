import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditor, RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        RichTextEditorAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
