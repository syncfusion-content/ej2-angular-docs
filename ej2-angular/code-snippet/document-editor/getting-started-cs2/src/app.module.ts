import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { AppComponent } from './app.component';



/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        DocumentEditorAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
