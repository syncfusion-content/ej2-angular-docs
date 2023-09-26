import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
		DialogModule,RichTextEditorAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }