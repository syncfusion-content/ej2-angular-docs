import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GridModule, PageService, EditService, ToolbarService, FilterService, SelectionService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService, PageService, FilterService, SelectionService]
})
export class AppModule { }

