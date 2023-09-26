import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';
import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';


enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SplitButtonModule,
        ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }