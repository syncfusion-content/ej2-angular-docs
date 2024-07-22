import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule, DocumentEditorContainerAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { AppComponent } from './app.component';



/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        DocumentEditorAllModule,
        DocumentEditorContainerAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
