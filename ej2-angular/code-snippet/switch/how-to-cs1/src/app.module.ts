import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SwitchModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }