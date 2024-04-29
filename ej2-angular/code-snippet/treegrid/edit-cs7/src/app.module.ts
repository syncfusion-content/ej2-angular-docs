import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService, EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        ButtonModule,
        DropDownListAllModule,CheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,
                EditService,ToolbarService]
})
export class AppModule { }