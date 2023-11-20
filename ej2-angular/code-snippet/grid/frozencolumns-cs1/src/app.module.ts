import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, FreezeService, SelectionService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule, RatingAllModule } from '@syncfusion/ej2-angular-inputs';
import {  ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        NumericTextBoxAllModule,
        RatingAllModule,
        ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FreezeService, SelectionService, EditService, ToolbarService]
})
export class AppModule { }
