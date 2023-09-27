import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiagramModule, SymbolPaletteModule } from '@syncfusion/ej2-angular-diagrams';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, DiagramModule, SymbolPaletteModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ ]
})
export class AppModule { }