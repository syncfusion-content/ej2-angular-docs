import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { enableRipple } from '@syncfusion/ej2-base';
import { FormsModule } from '@angular/forms';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        RadioButtonModule,
        ButtonModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }