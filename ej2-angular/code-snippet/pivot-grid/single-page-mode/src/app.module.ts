import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PivotViewAllModule } from '@syncfusion/ej2-angular-pivotview';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        PivotViewAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
