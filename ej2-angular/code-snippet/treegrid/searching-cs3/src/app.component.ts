
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, ToolbarService, } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridComponent, ToolbarItems,SearchSettingsModel } from '@syncfusion/ej2-angular-treegrid'; 
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule, DropDownListAllModule 
    ],
    providers: [FilterService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<div style="display: flex">
                  <label style="padding:  10px 10px 26px 0">Change the search operators:</label>
                  <ejs-dropdownlist style="margin-top:5px" id="value" #dropdown index="0" width="100" [dataSource]="ddlData" [fields]='fields' (change)="valueChange($event)"></ejs-dropdownlist>
                </div>
    
                <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='230' [toolbar]='toolbarOptions' childMapping='subtasks' [searchSettings]='searchSettings' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    public searchSettings?: SearchSettingsModel
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public fields?: object = { text: 'text', value: 'value' };
    public ddlData?: object[] = [
      { text: 'startswith', value: 'startswith' },
      { text: 'endswith', value: 'endswith' },
      { text: 'wildcard', value: 'wildcard' },
      { text: 'like', value: 'like' },
      { text: 'equal', value: 'equal' },
      { text: 'not equal', value: 'notequal' },
    ];
    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Search'];
        this.searchSettings = { operator: 'contains' };
      }
      valueChange(args: ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).searchSettings.operator = args.value as string; 
      }
}



