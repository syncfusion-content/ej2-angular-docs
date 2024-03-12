import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { MapsTooltipService, ZoomService } from '@syncfusion/ej2-angular-maps';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, MapsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
     providers: [MapsTooltipService, ZoomService]
   
})
export class AppModule { }