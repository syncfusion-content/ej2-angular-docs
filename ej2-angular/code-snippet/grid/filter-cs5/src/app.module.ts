import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { ButtonModule,SwitchModule } from '@syncfusion/ej2-angular-buttons'
import { PageService, FilterService } from '@syncfusion/ej2-angular-grids';
import {  DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonModule,
        SwitchModule,
        DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                FilterService]
})
export class AppModule { }