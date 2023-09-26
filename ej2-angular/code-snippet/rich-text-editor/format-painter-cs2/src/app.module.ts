import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        RichTextEditorModule,
        DialogModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
