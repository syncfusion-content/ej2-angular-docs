import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, InPlaceEditorAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }