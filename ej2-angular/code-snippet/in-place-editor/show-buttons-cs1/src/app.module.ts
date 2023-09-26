import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor';
import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, InPlaceEditorAllModule, CheckBoxModule, ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }