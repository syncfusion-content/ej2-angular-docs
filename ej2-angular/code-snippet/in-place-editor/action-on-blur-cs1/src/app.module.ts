import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InPlaceEditorAllModule } from '@syncfusion/ej2-angular-inplace-editor';
import { DropDownListAllModule  } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, InPlaceEditorAllModule, DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }