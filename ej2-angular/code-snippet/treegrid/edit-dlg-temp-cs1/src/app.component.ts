

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { DialogEditEventArgs, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-container',
   template: `<ejs-treegrid [dataSource]='data' height='225' childMapping='subtasks' [treeColumnIndex]='1'allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
        <e-columns>
            <e-column field='taskID' headerText='Task ID' width='120' textAlign='Right' isPrimaryKey='true' ></e-column>
            <e-column field='taskName' headerText='Task Name' width='225' ></e-column>
            <e-column field='startDate' headerText='Start Date' width='150' format="yMd" ></e-column>
            <e-column field='approved' headerText='Approved' type='boolean' editType='booleanedit' [displayAsCheckBox]='true' width='90' textAlign='Right' ></e-column>
        </e-columns>
        <ng-template #editSettingsTemplate let-data>
        <div ngForm #taskForm="ngForm">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskID.invalid && (taskID.dirty || taskID.touched)}">
                        <input [(ngModel)]="taskData.taskID" required id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null" #taskID="ngModel">
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="taskID"> Task ID</label>
                    </div>
                    <div id="taskIDError" *ngIf='taskID.invalid && (taskID.dirty || taskID.touched)'>
                        <label class="e-error" id="taskID-info" style="display: block;">*Task ID is required</label>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskName.invalid && (taskName.dirty || taskName.touched)}">
                        <input [(ngModel)]="taskData.taskName" required id="taskName" name="taskName" type="text" #taskName="ngModel">
                        <span class="e-float-line"></span>
                        <label class="e-float-text e-label-top" for="taskName">Task Name</label>
                    </div>
                    <div id="taskNameError" *ngIf='taskName.invalid && (taskName.dirty || taskName.touched)'>
                        <label class="e-error" id="taskName-info" style="display: block;">*Task Name is required</label>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <ejs-numerictextbox [(ngModel)]="taskData.progress" name="progress" id="progress" placeholder="Progress" floatLabelType='Always'></ejs-numerictextbox>
                </div>
                <div class="form-group col-md-6">
                    <ejs-datepicker id="startDate" name="startDate" required [(ngModel)]="taskData.startDate" placeholder="Start Date" floatLabelType='Always'></ejs-datepicker>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <ejs-numerictextbox [(ngModel)]="taskData.duration" name="duration" id="duration" placeholder="Duration" floatLabelType='Always'></ejs-numerictextbox>
                </div>
                <div class="form-group col-md-3">
                <ejs-checkbox #approved label='Approved' [(ngModel)]="taskData.approved" [ngModelOptions]="{standalone: true}" [checked]="taskData.approved"></ejs-checkbox>
                </div>
            </div>
        </div>
    </ng-template>
        </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public editSettings?: Object;
    public toolbar?: string[];
    public pageSettings?: Object;
    public taskData?: ITaskModel | any;
    @ViewChild('taskForm')
    public taskForm?: FormGroup;
    public progressDistinctData?: Object;
    public priorityDistinctData?: Object;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , mode: 'Dialog' ,newRowPosition: 'Below'};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.pageSettings = { pageCount: 5 };
        this.progressDistinctData = DataUtil.distinct(sampleData, 'progress', true);
        this.priorityDistinctData = DataUtil.distinct(sampleData, 'priority', true );
    }

    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.taskData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            if ((this.taskForm as FormGroup).valid) {
                args.data = this.taskData;
            } else {
                args.cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Disable the Validation Rules
            // Disable the Validation Rules
            (args.form as HTMLFormElement)['ej2_instances'][0].rules = {};
            // Set initial Focus
            if (args.requestType === 'beginEdit') {
                ((args.form as HTMLFormElement).elements.namedItem('taskName') as HTMLInputElement).focus();
            } else if (args.requestType === 'add') {
                ((args.form as HTMLFormElement).elements.namedItem('taskID') as HTMLInputElement).focus();
            }

        }
    }

    public focusIn(target: HTMLElement): void {
        (target.parentElement as HTMLElement).classList.add('e-input-focus');
    }

    public focusOut(target: HTMLElement): void {
        (target.parentElement as HTMLElement).classList.remove('e-input-focus');
    }
}
export interface ITaskModel {
    taskID?: number;
    taskName?: string;
    startDate?: Date;
    duration?: number;
    progress?: number;
    priority?: string;
    approved?: boolean;
}



