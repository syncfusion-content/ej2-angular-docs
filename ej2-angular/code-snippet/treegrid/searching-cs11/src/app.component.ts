


import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, ToolbarService, } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild,ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, SearchSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { QueryCellInfoEventArgs, SearchEventArgs } from '@syncfusion/ej2-angular-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule,
    ],
    standalone: true,
    providers: [FilterService, ToolbarService],
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<button ejs-button id='clear' (click)='clearSearch()'>Clear Search</button>
                <ejs-treegrid #treegrid [dataSource]='data' height='230' [treeColumnIndex]='1' [toolbar]='toolbarOptions' [searchSettings]='searchOptions' childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
   
     public searchOptions?: SearchSettingsModel;
    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
   
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Search'];
         this.searchOptions = { fields: ['taskName'], operator: 'contains', key: 'plan', ignoreCase: true};
   
    }
    clearSearch() {
      (this.treegrid as TreeGridComponent).searchSettings.key = '';
  }
  }