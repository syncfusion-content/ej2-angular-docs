import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule, EditService, ToolbarService, TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { TabAllModule } from '@syncfusion/ej2-angular-navigations'
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataUtil } from '@syncfusion/ej2-data';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent, DialogEditEventArgs } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'
import { ButtonModule, CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons'

@Component({
imports: [
    CommonModule,
        ButtonModule,
        CheckBoxAllModule,
        TabAllModule,
        TreeGridAllModule,
        DropDownListAllModule, ReactiveFormsModule, FormsModule
    ],

providers: [EditService, ToolbarService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #grid [dataSource]='data' height='225' childMapping='subtasks' allowPaging='true' [editSettings]='editSettings' [toolbar]='toolbar' (actionComplete)='actionComplete($event)'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' width='120' textAlign='Right' [isPrimaryKey]='true'></e-column>
                        <e-column field='taskName' headerText='Task Name' width='120'></e-column>
                        <e-column field='priority' headerText='Priority' width='150'></e-column>
                        <e-column field='approved' headerText='Approved' width='100' type='boolean' [displayAsCheckBox]='true'></e-column>
                    </e-columns>
                    <ng-template #editSettingsTemplate let-data>
                        <div ngForm #taskForm="ngForm">
                            <ejs-tab #tab id="tab_wizard" showCloseButton=false (selecting)='selecting($event)'>
                                <e-tabitems>
                                    <e-tabitem [header]="{ 'text': 'Details' }" >
                                        <ng-template #content>
                                            <div id="tab1">
                                                <div class="form-row">
                                                <div class="form-group col-md-6">
                                                <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskID.invalid && (taskID.dirty || taskID.touched)}">
                                                    <input [(ngModel)]="data.taskID" required id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null" #taskID="ngModel">
                                                    <span class="e-float-line"></span>
                                                    <label class="e-float-text e-label-top" for="taskID"> Task ID</label>
                                                </div>
                                                <div id="taskIDError" *ngIf='taskID.invalid && (taskID.dirty || taskID.touched)'>
                                                    <label class="e-error" for="taskID" id="taskID-info" style="display: block;">*Task ID is required</label>
                                                </div>
                                                </div>
                                                </div>
                                                <div class="form-row">
                                                <div class="form-group col-md-6">
                                                <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskName.invalid && (taskName.dirty || taskName.touched)}">
                                                    <input [(ngModel)]="data.taskName" required id="taskName" name="taskName" type="text" #taskName="ngModel">
                                                    <span class="e-float-line"></span>
                                                    <label class="e-float-text e-label-top" for="taskName">Task Name</label>
                                                </div>
                                                <div id="taskNameError" *ngIf='taskName.invalid && (taskName.dirty || taskName.touched)'>
                                                    <label class="e-error" for="taskName" id="taskName-info" style="display: block;">*Customer Name is required</label>
                                                </div>
                                                </div>
                                                </div>
                                            <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)="nextBtn()" >next</button>
                                        </div>
                                    </ng-template>
                                </e-tabitem>
                                <e-tabitem [header]="{ 'text': 'Verify' }">
                                    <ng-template #content>
                                        <div id="tab2">
                                        <div class="form-row" >
                                        <div class="form-group col-md-6">
                                            <ejs-dropdownlist id="priority" name="priority" [(ngModel)]="data.priority" [dataSource]='priorityDistinctData' [fields]="{text: 'priority', value: 'priority' }" placeholder="Priority" popupHeight='300px' floatLabelType='Always'></ejs-dropdownlist>
                                        </div>
                                        </div>
                                        <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <ejs-checkbox #approved name="approved" id="approved" label="Approved" [checked]="data.approved" ></ejs-checkbox>
                                        </div>
                                        </div>
                                            <button ejs-button type="button" cssClass="e-info e-btn" style="float: right" (click)='submitBtn()'>submit</button>
                                        </div>
                                    </ng-template>
                                </e-tabitem>
                            </e-tabitems>
                        </ejs-tab>
                        </div>
                    </ng-template>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: any;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public priorityDistinctData?: Object;
    @ViewChild('grid')
    grid?: TreeGridComponent;
    @ViewChild('taskForm')
    taskForm?: FormGroup;
    @ViewChild('tab')
    tabObj: any;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete','Update','Cancel'];
        this.priorityDistinctData = DataUtil.distinct(sampleData, 'priority', true );
    }

    actionComplete(args: any) {
        if (((args as any).requestType === 'beginEdit' || (args as any).requestType === 'add')) {
            // Disable default validation.
            (args as any).form.ej2_instances[0].rules = {};
            const dialogInstance = (args as any).dialog;
            dialogInstance.buttons = [];
        }
    }

    nextBtn() {
        this.moveNext();
    }

    selecting(e: any) {
       
        if(e.isSwiped){
            e.cancel = true;
        }
        if(e.selectingIndex === 1) {
           e.cancel = !this.taskForm?.valid;
        }
    }

    moveNext() {
        if (this.taskForm?.valid) {
            this.tabObj.select(1);
        }
    }

    submitBtn() {
        if (this.taskForm?.valid) {
            this.grid?.endEdit();
        }
    }
}