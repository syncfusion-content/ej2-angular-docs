import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, SortService, ColumnMenuService, PageService, FilterService, ResizeService  } from '@syncfusion/ej2-angular-treegrid';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule,],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid height='250' allowSorting='true' allowPaging='true' [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks' [filterSettings]='filterSettings' [allowFiltering]='true' showColumnMenu="true">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=140></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=240></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=160></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=150></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=150></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    providers: [SortService, ColumnMenuService, PageService, ColumnMenuService, FilterService, ResizeService ]
})
export class AppComponent implements OnInit {

    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public data?: object[];
    public filterSettings: FilterSettingsModel = { type: 'Menu' };

    ngOnInit(): void {
        this.data = sampleData;
    }
}



