import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { MarkerService, SelectionService } from '@syncfusion/ej2-angular-maps';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, MapsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
     providers: [MarkerService, SelectionService]
   
})
export class AppModule { }