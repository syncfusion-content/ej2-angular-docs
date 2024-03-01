

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Cell, Column, HeaderCellInfoEventArgs } from '@syncfusion/ej2-treegrid';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'  (headerCellInfo)="onHeaderCellInfo($event)">
                  <e-columns>
                    <e-column field='taskID' headerText='Task ID' [allowSorting]="false" textAlign='Right' width=120></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' [allowFiltering]="false" textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                  </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
    public onHeaderCellInfo(args:HeaderCellInfoEventArgs  ) {
        if ((args.cell as Cell<Column> ).column.field == 'startDate') {
          (args.node as Element).classList.add('customcss');
        }
      }
}



