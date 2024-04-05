import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule, ToolbarService, SelectionService, EditService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { DropDownListAllModule  } from '@syncfusion/ej2-angular-dropdowns';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,ButtonModule,
        TreeGridModule,DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ToolbarService, 
        SelectionService,
        EditService]
})
export class AppModule { }