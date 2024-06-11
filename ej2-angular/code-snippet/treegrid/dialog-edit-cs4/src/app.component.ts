import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { CheckBoxAllModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent, Column } from '@syncfusion/ej2-angular-treegrid';
import { SaveEventArgs, EditEventArgs } from '@syncfusion/ej2-angular-grids';
import { FormGroup, NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    imports: [TreeGridModule, CheckBoxAllModule, ButtonModule, DropDownListAllModule, 
            NumericTextBoxModule, CommonModule, ReactiveFormsModule, FormsModule,],

    providers: [PageService,
                SortService,
                FilterService,
                EditService,
                ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (actionComplete)="actionComplete($event)" childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='approved' headerText='approved' textAlign='Right' width=80 type="boolean" [displayAsCheckBox]="true"></e-column>
                    </e-columns>
                    <ng-template #editSettingsTemplate let-data>
                        <div ngForm #orderForm="ngForm" >
                            <div id="tab0" class="tab"  [hidden]="currentTab !== 0">
                             <!-- Tab 0 Content -->
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': taskID.invalid && (taskID.dirty || taskID.touched)}">
                                    <input [(ngModel)]="data.taskID" required id="taskID" name="taskID" type="text" [attr.disabled]="!data.isAdd ? '' : null" #taskID="ngModel">
                                    <span class="e-float-line"></span>
                                    <label class="e-float-text e-label-top" for="taskID"> Task ID</label>
                                </div>
                                <div id="taskIDError" *ngIf='taskID.invalid && (taskID.dirty || taskID.touched)'>
                                    <label class="e-error" id="taskID-info" style="display: block;">*Task ID is required</label>
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
                                    <label class="e-error" id="taskName-info" style="display: block;">*Task Name is required</label>
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab1" class="tab" [hidden]="currentTab !== 1">
                                <!-- Tab 2 content -->
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <div class="e-float-input e-control-wrapper" [ngClass]="{'e-error': duration.invalid && (duration.dirty || duration.touched)}">
                                    <div>
                                    <label class="e-float-text e-label-top" for="duration">Duration</label>
                                </div>
                                <!-- Use ejs-numerictextbox for numeric input -->
                                    <ejs-numerictextbox style="margin-top:10px" (ngModel)="data.duration"  id="duration" name="duration" #duration="ngModel" floatLabelType= 'Always'></ejs-numerictextbox>
                                </div>
                                
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <!-- Use ejs-dropdownlist for priority -->
                                <ejs-dropdownlist id="priority" name="priority" (ngModel)="data.priority" [dataSource]="priorityDistinctData" [fields]="{ text: 'priority', value: 'priority' }" placeholder="Ship City" popupHeight="300px" floatLabelType="Always"></ejs-dropdownlist>
                            </div>
                        </div>
                    </div>
      

                    <div id="tab2" class="tab" [hidden]="currentTab !== 2">
                        <!-- Tab 2 Content -->
                        
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <ejs-checkbox #approved name="approved" id="approved" label="approved" [checked]="data.approved"></ejs-checkbox>
                        </div>
                    </div>
                </div>
                <div id='footer'>
                    <div style="float: left;">
                        <button ejs-button type="button" cssClass="e-info e-btn" (click)="previousBtn()" id="btn" *ngIf="currentTab !== 0">Previous</button>
                            </div>
                                <div style="float: right;">
                                    <button ejs-button  style="margin-right:10px" type="button"  cssClass="e-info e-btn" (click)="saveBtn()" >Save</button>
                                    <button ejs-button  type="button" cssClass="e-info e-btn" (click)='nextBtn()' *ngIf="currentTab !== 2" id="btn" [disabled]="(taskName.invalid || taskID.invalid)">next</button>
                                </div>
                    </div>
                </div>
            </ng-template>
        </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public priorityDistinctData = ['Low', 'High', "Critical", 'Normal'];
    @ViewChild('treegrid') treegrid?: TreeGridComponent;
    public currentTab = 0;
    @ViewChild('orderForm') orderForm?: NgForm;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete'];
    }

    actionComplete(args: any) {
        if ((args.requestType === 'beginEdit') || (args.requestType === 'add')) {
          (args as any).form.ej2_instances[0].rules = {}; // Disable default validation.
          (args.dialog as any).element.classList.add('hide-default-buttons');
          // Set initial Focus
          if (args.requestType === 'beginEdit') {
            (args?.form?.elements.namedItem('taskName') as HTMLInputElement).focus();
          }
          this.currentTab = 0;
        }
      }
      saveBtn() {
        if (this.orderForm?.valid ) {
          (this.treegrid as TreeGridComponent).endEdit();
        }
      }
    
      nextBtn() {
        if (this.orderForm?.valid ) {
          this.currentTab++;
          this.removeFocusFromButton()
        }
      }
    
      previousBtn() {
        if (this.orderForm?.valid) {
          this.currentTab--;
          this.removeFocusFromButton()
        }
      }
    
      removeFocusFromButton() {
        const nextButton = document.getElementById('btn') as HTMLButtonElement;
        if (nextButton) {
          nextButton.blur();
        }
      }
}



