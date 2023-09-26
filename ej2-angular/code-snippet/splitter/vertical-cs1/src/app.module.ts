import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SplitterModule } from '@syncfusion/ej2-angular-layouts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, FormsModule, SplitterModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}