

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { FilterSearchBeginEventArgs, } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<ejs-treegrid [dataSource]='data' [treeColumnIndex]='1' height='273' [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Left' width=90></e-column>
                    <e-column field='priority' headerText='Priority' textAlign='Left' width=90></e-column>
                  </e-columns>
                </ejs-treegrid>`,
    styles:[`.e-excel-ascending,
    .e-excel-descending,
    .e-separator.e-excel-separator {
      display: none;
    }`]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
  
    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Excel'};
       
    }
   
}


