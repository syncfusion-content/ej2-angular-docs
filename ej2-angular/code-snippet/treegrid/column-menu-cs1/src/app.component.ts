import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { ResizeService, FilterService, SortService, PageService, ColumnMenuService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid height='250' [dataSource]='data' [allowResizing]='true' [treeColumnIndex]='1' childMapping='subtasks'  showColumnMenu="true"  [allowFiltering]="true" [allowSorting]="true" [filterSettings]="filterSettings">
                  <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=140></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=240></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=160></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=150></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=150></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    providers: [FilterService, PageService, SortService, ResizeService, ColumnMenuService]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = { type: 'Menu' };
    }
}




