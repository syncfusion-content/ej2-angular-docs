import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { TooltipAllModule } from "@syncfusion/ej2-angular-popups";

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        ButtonModule,
        TooltipAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService]
})
export class AppModule { }