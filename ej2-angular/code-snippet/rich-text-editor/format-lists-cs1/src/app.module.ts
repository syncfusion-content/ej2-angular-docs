import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        RichTextEditorAllModule,
        FormsModule,
		ButtonModule,
        ReactiveFormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
