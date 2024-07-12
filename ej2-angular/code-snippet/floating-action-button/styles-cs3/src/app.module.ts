import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FabModule } from '@syncfusion/ej2-angular-buttons'

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        FabModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }