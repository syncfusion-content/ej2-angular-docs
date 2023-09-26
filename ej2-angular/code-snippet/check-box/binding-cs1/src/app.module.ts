import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwitchModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SwitchModule,
        CheckBoxModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }