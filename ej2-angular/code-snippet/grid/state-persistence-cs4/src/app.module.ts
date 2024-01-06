import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, GroupService, FilterService, ToolbarService, SortService, EditService, } from '@syncfusion/ej2-angular-grids';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [GroupService, ToolbarService, SortService, EditService, FilterService,]
})
export class AppModule { }