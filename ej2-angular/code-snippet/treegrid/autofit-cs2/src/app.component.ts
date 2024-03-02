

import { Component, OnInit,ViewChild  } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent,TreeActionEventArgs, } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' [allowPaging]="true"
                 [toolbar]="toolbarItems" (actionComplete)="onActionComplete($event)" [showColumnChooser]= 'true' >
                    <e-columns>
                      <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                      <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                      <e-column field='startDate' headerText='Start Date' textAlign='Right'  width=160 [format]='formatoption'></e-column>
                      <e-column field='duration' headerText='Duration' textAlign='Right' format='c2' type='number' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent; 
  public toolbarItems?: string[];

  ngOnInit(): void {
    this.data = sampleData;
    this.toolbarItems = ['ColumnChooser'];
  }

  public onActionComplete({ requestType }: TreeActionEventArgs): void {
    if (requestType === 'columnstate') {
      (this.treegrid as TreeGridComponent).autoFitColumns();
    }
  }
}





