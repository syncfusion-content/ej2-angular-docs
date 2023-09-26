import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SplitButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }