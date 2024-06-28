import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { Component, OnInit,  } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
imports: [
        
        TreeGridModule,
        ButtonModule,
        DropDownListAllModule
    ],

providers: [PageService,
                SortService,
                FilterService],
standalone: true,
    selector: 'app-container',
    template: `<button ej-button class="e-flat" (click)="add()">Add</button>
                <button ej-button class="e-flat" (click)="delete()">Delete</button>
                <ejs-treegrid #treegrid [dataSource]="data" childMapping="subtasks" height="350" [treeColumnIndex]="1" [allowPaging]="true" [pageSettings]="pageSettings">
                    <e-columns>
                        <e-column field="taskID" headerText="Task ID" width="90" textAlign="Right"></e-column>
                        <e-column field="taskName" headerText="Task Name" width="200"></e-column>
                        <e-column field="startDate" headerText="Start Date" width="110" format="yMd" textAlign="Right"></e-column>
                        <e-column field="endDate" headerText="End Date" width="110" format="yMd" textAlign="Right"></e-column>
                        <e-column field="duration" headerText="Duration" width="100" textAlign="Right"></e-column>
                        <e-column field="progress" headerText="Progress" width="80" textAlign="Right"></e-column>
                        <e-column field="priority" headerText="Priority" width="90"></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    pageSettings: any;

    ngOnInit(): void {
        this.data = sampleData;
    }
    add(): void {
    const rdata: object = {
      taskID: 102,
      taskName: 'New record',
      startDate: new Date(8367642e5),
      endDate: new Date(8467642e5),
      duration: 15,
      progress: 100,
      priority: 'Normal',
    };
    (this.treegrid?.dataSource as object[]).unshift(rdata);
    this.treegrid?.refresh();
  }
  delete(): void {
    const selectedRow: number = this.treegrid?.getSelectedRowIndexes()[0] as number;
    if (this.treegrid?.getSelectedRowIndexes().length) {
      (this.treegrid?.dataSource as object[]).splice(selectedRow, 1);
    } else {
      alert('No records selected for delete operation');
    }
    this.treegrid?.refresh();
  }
}



