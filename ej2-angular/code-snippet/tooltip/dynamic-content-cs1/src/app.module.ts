import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { AppComponent } from './app.component';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TooltipModule, RadioButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }