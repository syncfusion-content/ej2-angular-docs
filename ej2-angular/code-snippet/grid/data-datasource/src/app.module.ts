import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GridModule, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        GridModule,
        ButtonAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        PageService,
        SortService,
        FilterService,
        GroupService
    ]
})
export class AppModule { }