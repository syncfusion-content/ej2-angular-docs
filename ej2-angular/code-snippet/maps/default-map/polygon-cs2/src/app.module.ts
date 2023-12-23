import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapsModule, PolygonService, SelectionService, HighlightService } from '@syncfusion/ej2-angular-maps';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, MapsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PolygonService, SelectionService, HighlightService]
   
})
export class AppModule { }