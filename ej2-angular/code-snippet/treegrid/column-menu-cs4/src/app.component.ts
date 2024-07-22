import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {
  TreeGridComponent,
  SortService,
  ColumnMenuService,
  PageService,
  FilterService,
  FilterSettingsModel,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid height='315' allowSorting='true' allowPaging='true' [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks' [columnMenuItems]='columnMenuItems' [filterSettings]='filterSettings' [allowFiltering]='true' showColumnMenu="true"  (columnMenuClick)='columnMenuClick($event)'>
                  <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=140></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=160></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=160></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=150></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=150></e-column>
                    </e-columns>
                </ejs-treegrid>`,
  providers: [
    SortService,
    ColumnMenuService,
    PageService,
    ColumnMenuService,
    FilterService,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  public data?: object[];
  public filterSettings: FilterSettingsModel = { type: 'Menu' };
  public columnMenuItems: any = [
    'SortAscending',
    'SortDescending',
    'Group',
    'Ungroup',
    'Filter',
    {
      text: 'Sub Menu',
      items: [
        { text: 'Option 1', id: 'option1' },
        { text: 'Option 2', id: 'option2' },
        { text: 'Option 3', id: 'option3' },
        {
          text: 'Nested Sub Menu',
          items: [
            { text: 'Nested Option 1', id: 'nestedoption1' },
            { text: 'Nested Option 2', id: 'nestedoption2' },
          ],
        },
      ],
    },
  ];
  ngOnInit(): void {
    this.data = sampleData;
  }
  public columnMenuClick(args: any) {
    if (args.item.id === 'option1') {
      // custom function
    }
  }
}
