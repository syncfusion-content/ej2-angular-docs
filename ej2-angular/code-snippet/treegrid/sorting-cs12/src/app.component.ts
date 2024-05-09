import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PageService, SortService, FilterService,ToolbarService,TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'

import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sortData } from './datasource';

@Component({
imports: [
        
        TreeGridModule,
        ButtonModule,
        DropDownListAllModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                ToolbarService],
standalone: true,
  selector: 'app-container',
  template: `
           <button ejs-button id="button" cssClass="e-outline" (click)="onExternalSort()"> Clear Sorting </button>
       
            <ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1'  [allowSorting]='true' childMapping='subtasks' [sortSettings]='initialSort'>
                <e-columns>
                    <e-column field='Category' headerText='Category' textAlign='Right' width=140></e-column>
                    <e-column field='orderName' headerText='Order Name' textAlign='Left' width=200></e-column>
                    <e-column field='orderDate' headerText='Order Date' textAlign='Right' format='yMd' width=150></e-column>
                    <e-column field='units' headerText='Units' textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public initialSort?: Object;

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = sortData;
    this.initialSort = {
      columns: [
        { field: 'orderName', direction: 'Ascending' },
        { field: 'Category', direction: 'Descending' },
      ],
    };
  }

  onExternalSort() {
    (this.treegrid as TreeGridComponent).clearSorting();
  }
}
