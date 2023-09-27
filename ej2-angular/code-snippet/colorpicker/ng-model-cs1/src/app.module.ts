import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ColorPickerModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }