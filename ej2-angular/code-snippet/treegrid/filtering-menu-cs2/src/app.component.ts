import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData ,dropdowndata} from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter,Column } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]="filterSettings" (actionComplete)="actionComplete($event)" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=150></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right'  type="datetime" [format]="formatoptions" width=150></e-column>
                        <e-column field='endDate' headerText='End Date' textAlign='Right'  type="datetime" [format]="formatoptions" width=150></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: Object;
    public formatoptions?: Object;
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {type: 'Menu'};
        this.formatoptions = { type: 'dateTime', format: 'M/d/y HH:mm' };
    }
    public actionComplete(args: { requestType: string; columnName: string }): void {
        if (args.requestType === 'filterafteropen') {
          var columnObj :any= this.treegrid?.getColumnByField(args.columnName);
          if (columnObj.type === 'datetime') {
            var dateObj = (document.getElementById('dateui-' + columnObj.uid) as any)['ej2_instances'][0];
            dateObj.timeFormat = 'HH:mm';
          }
        }
      }
}