import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, DiagramModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
providers: [ ]
})
export class AppModule { }