import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, FormsModule, TextBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}