import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { Column, EditSettingsModel, ToolbarItems,  TreeGridComponent,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import {  SaveEventArgs } from '@syncfusion/ej2-angular-grids';
@Component({
    imports: [
    TreeGridAllModule,DropDownListModule 
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [toolbar]='toolbar' [editSettings]='editSettings' (actionBegin)="actionBegin($event)" idMapping='TaskID' parentIdMapping='parentID'>
                    <e-columns>
                        <e-column field='TaskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                            <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                            <e-column field="Task_FeedbackDetails" headerText="project Feedback" textAlign="Left" width="120">
                                <ng-template #editTemplate let-data>
                                    <ejs-dropdownlist [(ngModel)]="taskData.Task_FeedbackDetails" [dataSource]="dropDownEnumValue" [fields]="dropdownFields" popupHeight="150px"></ejs-dropdownlist>
                                </ng-template>
                            </e-column>
                            <e-column field='Duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public taskData?: ProjectDetails|any ;
    public dropDownEnumValue: string[] = [];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public dropdownFields: Object = { text: 'Task_FeedbackDetails', value: 'Task_FeedbackDetails' };

    ngOnInit(): void {
        this.data = projectData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row',showDeleteConfirmDialog: true, };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.dropDownEnumValue = Object.keys(Feedback).filter((key: string) => !isNaN(Number((Feedback as any)[key])));
    }
    actionBegin(args: SaveEventArgs) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          this.taskData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
          (args.data as ProjectDetails)['Task_FeedbackDetails'] = (this.taskData as ProjectDetails)['Task_FeedbackDetails'];
        }
      }
}

export interface ProjectDetails {
    TaskID: number;
    TaskName: string;
    Task_FeedbackDetails: Feedback;
    Duration:number;
    
  }
  
  export enum Feedback {
    Positive = 0,
    Negative = 1,
  }

