import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }