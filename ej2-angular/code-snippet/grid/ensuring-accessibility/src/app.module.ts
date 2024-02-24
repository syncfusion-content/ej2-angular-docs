import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, ReorderService, FilterService, GroupService, ColumnChooserService, 
AggregateService, ToolbarService, SelectionService, RowDDService,   } from '@syncfusion/ej2-angular-grids';
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
    providers: [PageService,
        SortService,
        ReorderService,
        FilterService,
        GroupService,
        AggregateService,
        ToolbarService,
        SelectionService,
        RowDDService,
        ColumnChooserService  ]
})
export class AppModule { }
