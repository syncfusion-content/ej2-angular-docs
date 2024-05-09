import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    standalone: true,
    providers: [FilterService],
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='275' [treeColumnIndex]='1'  [allowFiltering]='true' [filterSettings]="filterSettings" childMapping='subtasks' >
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public filterSettings?: Object;

  ngOnInit(): void {
    this.data = sampleData;
    this.filterSettings = {
      type: 'Excel',
      columns: [
        {
          field: 'taskName',
          matchCase: false,
          operator: 'startswith',
          predicate: 'or',
          value: 'plan',
        },
        {
          field: 'taskName',
          matchCase: false,
          operator: 'startswith',
          predicate: 'or',
          value: 'design',
        },
      ],
    };
  }
}
