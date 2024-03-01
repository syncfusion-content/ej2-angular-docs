import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {
  ColumnMenuService,
  SortService,
  TreeGridComponent,
  PageService,
  SortSettingsModel,
} from '@syncfusion/ej2-angular-treegrid';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-container',
  template: `<ejs-treegrid #treegrid height='315' allowSorting='true' allowPaging='true' [dataSource]='data' [treeColumnIndex]='1' childMapping='subtasks' [sortSettings]='sortSettings' showColumnMenu="true" [columnMenuItems]='columnMenuItems' (columnMenuClick)='columnMenuClick($event)'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=140></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=160></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=160></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=150></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=150></e-column>
                    </e-columns>
                </ejs-treegrid>`,
  providers: [SortService, ColumnMenuService, PageService],
})
export class AppComponent implements OnInit {
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  public data?: object[];
  public columnMenuItems: any = [
    { text: 'Clear Sorting', id: 'treegridclearsorting' },
  ];
  public sortSettings: SortSettingsModel = {
    columns: [{ direction: 'Descending', field: 'taskID' }],
  };

  public columnMenuClick(args: MenuEventArgs) {
    debugger;
    if (args.item.id === 'treegridclearsorting') {
      (this.treegrid as TreeGridComponent).clearSorting();
    }
  }
  ngOnInit(): void {
    this.data = sampleData;
  }
}
