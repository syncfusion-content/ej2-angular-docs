import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
} from '@syncfusion/ej2-angular-buttons';
import { GridModule, PageService, ToolbarService, EditService, GroupService, FilterService, SortService, ReorderService, ColumnMenuService, ColumnChooserService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonModule,
        CheckBoxModule,
        RadioButtonModule,
        SwitchModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService, ToolbarService, EditService, 
        GroupService, FilterService, SortService, 
        ReorderService, ColumnMenuService, ColumnChooserService]
})
export class AppModule { }

