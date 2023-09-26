

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { DialogEditEventArgs, SaveEventArgs } from '@syncfusion/ej2-angular-grids';
import { Dialog } from '@syncfusion/ej2-angular-popups';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { DataUtil } from '@syncfusion/ej2-data';
import { ReactiveFormsModule ,  FormsModule} from '@angular/forms';
import { Browser } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-container',
   template: `<ejs-treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [toolbar]='toolbar' [editSettings]='editSettings' childMapping='subtasks' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
    <e-columns>
        <e-column field='taskID' headerText='Task ID' width='120' textAlign='Right' isPrimaryKey='true' ></e-column>
        <e-column field='taskName' headerText='Task Name' width='225' ></e-column>
        <e-column field='startDate' headerText='Start Date' width='150' format="yMd" ></e-column>
        <e-column field='duration' headerText='Duration' width='90'   textAlign='Right' ></e-column>
        <e-column field='progress' headerText='Progress' width='90' textAlign='Right' ></e-column>
    </e-columns>

    <ng-template #editSettingsTemplate let-data>
            <div [formGroup]="taskForm">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskID.invalid && (taskID.dirty || taskID.touched)}">
                            <input formControlName="taskID" data-msg-containerid='taskIDError' id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null">
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="taskID"> Task ID</label>
                        </div>
                        <div id="taskIDError" [style.visibility]='((taskID.invalid && (taskID.dirty || taskID.touched)) || (taskID.invalid && submitClicked))? "visible": "hidden"'>
                            <label class="e-error" for="taskID" id="taskID-info" style="display: block;">*Task ID is required</label>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskName.invalid && (taskName.dirty || taskName.touched)}">
                            <input formControlName="taskName" data-msg-containerid='taskNameError' id="taskName" name="taskName" type="text">
                            <span class="e-float-line"></span>
                            <label class="e-float-text e-label-top" for="taskName">Task Name</label>
                        </div>
                        <div id="taskNameError" [style.visibility]='((taskName.invalid && (taskName.dirty || taskName.touched)) || (taskName.invalid && submitClicked))? "visible": "hidden"'>
                            <label class="e-error" for="taskName" id="taskName-info" style="display: block;">*Task Name is required</label>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <ejs-numerictextbox formControlName="duration" id="duration" placeholder="Duration" format="##" floatLabelType='Always'></ejs-numerictextbox>
                    </div>
                    <div class="form-group col-md-6">
                        <ejs-datepicker id="startDate" formControlName="startDate" placeholder="Start Date" floatLabelType='Always'></ejs-datepicker>
                        <div id="startDateError" [style.visibility]='((startDate.invalid && (startDate.dirty || startDate.touched)) || (startDate.invalid && submitClicked)) ? "visible": "hidden"'>
                            <label class="e-error" for="startDate" id="startDate-info" style="display: block;">*Start Date is required</label>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <ejs-dropdownlist id="progress" formControlName="progress" [dataSource]='progressDistinctData' [fields]="{text: 'progress', value: 'progress' }" placeholder="Progress" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
                    </div>
                </div>
            </div>
        </ng-template>
</ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public taskForm?: FormGroup | any;
    public progressDistinctData?: Object;
    public priorityDistinctData?: Object;
    public submitClicked: boolean = false;
toolbar: any;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true , mode: 'Dialog' , newRowPosition: 'Below'};
        this.toolbarOptions = ['Add', 'Edit', 'Delete'];
        this.progressDistinctData = DataUtil.distinct(sampleData, 'progress', true);
        this.priorityDistinctData = DataUtil.distinct(sampleData, 'priority', true );
    }

    createFormGroup(data: ITaskModel): FormGroup {
        return new FormGroup({
            taskID: new FormControl(data.taskID, Validators.required),
            startDate: new FormControl(data.startDate, this.dateValidator()),
            taskName: new FormControl(data.taskName, Validators.required),
            duration: new FormControl(data.duration),
            progress: new FormControl(data.progress),
            priority: new FormControl(data.priority),
        });
    }

    dateValidator(): Object {
        return (control: FormControl): null | Object  => {
            return control.value && control.value.getFullYear &&
            (1900 <= control.value.getFullYear() && control.value.getFullYear() <=  2099) ? null : { OrderDate: { value : control.value}};
        };
    }

    actionBegin(args: SaveEventArgs | any): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.submitClicked = false;
            this.taskForm = this.createFormGroup(args.rowData);
        }
        if (args.requestType === 'save') {
            this.submitClicked = true;
            if ((this.taskForm as FormGroup).valid) {
                args.data = (this.taskForm as FormGroup).value;
            } else {
                args.cancel = true;
            }
        }
    }

    actionComplete(args: DialogEditEventArgs): void {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Set initial Focus
            if (args.requestType === 'beginEdit') {
                ((args.form as HTMLFormElement ).elements.namedItem('taskName') as HTMLInputElement).focus();
            } else if (args.requestType === 'add') {
                ((args.form as HTMLFormElement).elements.namedItem('taskID') as HTMLInputElement).focus();
            }
        }
    }

    get taskID(): AbstractControl  { return (this.taskForm as FormGroup).get('taskID') as AbstractControl; }

    get taskName(): AbstractControl { return (this.taskForm as FormGroup).get('taskName') as AbstractControl; }

    get startDate(): AbstractControl { return (this.taskForm as FormGroup).get('startDate') as AbstractControl; }
}
export interface ITaskModel {
    taskID?: number;
    taskName?: string;
    startDate?: Date;
    duration?: number;
    progress?: number;
    priority?: string;
}



