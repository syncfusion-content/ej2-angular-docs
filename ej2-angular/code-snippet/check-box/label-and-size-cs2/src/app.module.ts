import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        CheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }