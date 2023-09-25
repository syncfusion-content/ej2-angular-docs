import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        RecurrenceEditorModule,
        DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }