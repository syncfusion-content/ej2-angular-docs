import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageModule } from '@syncfusion/ej2-angular-notifications';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, MessageModule, ButtonModule
    ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }