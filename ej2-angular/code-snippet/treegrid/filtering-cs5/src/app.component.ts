

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterBarMode, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns'
@Component({
    imports: [
    TreeGridAllModule, DropDownListAllModule
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<div class='input-container'>
                    <label for='fields' class='label'>Select Filter Mode</label>
                    <ejs-dropdownlist #field id='fields' [dataSource]='filterModesData' (change)='onModeChange($event)'></ejs-dropdownlist>
                </div>
    
                <ejs-treegrid [dataSource]='data' height='230' [treeColumnIndex]='1'  [allowFiltering]='true' [filterSettings]='filterSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public filterSettings?: FilterSettingsModel;
    public filterModesData:any = ['Immediate', 'OnEnter'];

    ngOnInit(): void {
        this.data = sampleData;
        this.filterSettings = {
          type:'FilterBar'
       }
    }
    onModeChange(args: ChangeEventArgs): void {
      this.filterSettings = {
          mode: args.value as FilterBarMode,
      }
  };
}


