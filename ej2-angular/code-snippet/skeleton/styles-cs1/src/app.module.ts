import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SkeletonModule } from '@syncfusion/ej2-angular-notifications';

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, 
        SkeletonModule
    ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }