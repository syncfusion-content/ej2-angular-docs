import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
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
        FormsModule,
        DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }