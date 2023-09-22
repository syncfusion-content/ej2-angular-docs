import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService, SortService, FilterService, GroupService, ReorderService, ToolbarService, ResizeService, } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [GroupService, PageService, SortService, ReorderService, FilterService, ToolbarService, ResizeService]
})
export class AppModule { }