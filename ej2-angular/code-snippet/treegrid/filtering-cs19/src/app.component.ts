
import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService  } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit,ViewChild} from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: ` <button ejs-button cssClass="e-outline" (click)="onSingleValueFilter()">Filter with single value</button>
                <button ejs-button cssClass="e-outline" style="margin-left:5px" (click)="onMultipleValueFilter()">Filter with multiple values</button>
       
                <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]='filterSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' type='date' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

     @ViewChild('treegrid')
     public treegrid:TreeGridComponent | undefined;

    public data?: Object[];
    public filterSettings?: FilterSettingsModel = { type: 'Excel' };
    
    ngOnInit(): void {
        this.data = sampleData;
    }

    onSingleValueFilter() {
      (this.treegrid as TreeGridComponent).clearFiltering();
      // filter TaskID column with single value
      (this.treegrid as TreeGridComponent).filterByColumn('taskID', 'equal', 7); 
  }
  onMultipleValueFilter() {
      (this.treegrid as TreeGridComponent).clearFiltering();
      // filter TaskName column with multiple values
      (this.treegrid as TreeGridComponent).filterByColumn('taskName', 'equal', [
          'Planning Complete',
          'Testing',
          'Design complete',
      ]); 
  }
}



