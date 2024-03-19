import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapsModule, PolygonService, MapsTooltipService } from '@syncfusion/ej2-angular-maps';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, MapsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PolygonService, MapsTooltipService]

})
export class AppModule { }