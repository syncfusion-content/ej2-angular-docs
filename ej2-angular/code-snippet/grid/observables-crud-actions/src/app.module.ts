import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PageService, SortService, FilterService, GroupService, InfiniteScrollService, LazyLoadGroupService,
    EditService, ToolbarService, AggregateService, SearchService, PdfExportService, ExcelExportService,  } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-mem';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService,
                GroupService,
                PdfExportService, 
                ExcelExportService,
                AggregateService,
                InfiniteScrollService, 
                LazyLoadGroupService,
                SearchService,
                HttpClient ]
})
export class AppModule { }
