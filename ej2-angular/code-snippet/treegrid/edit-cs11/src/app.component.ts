

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule, NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";

@Component({
    imports: [
    TreeGridAllModule,ButtonModule,
    NumericTextBoxAllModule, TextBoxModule, 
    DropDownListModule
    ],
    providers: [EditService, ToolbarService,PageService],
    standalone: true,
    selector: 'app-container',
    template: ` <div class="row" >
                    <div class="col-xs-6 col-md-3">
                        <div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="taskedit">Task ID</label>
                                <input class="form-control" [(ngModel)]="selectedProduct.taskID" type="number" disabled />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="tasknameedit">Task Name</label>
                                <ejs-textbox [(value)]="selectedProduct.taskName"></ejs-textbox>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="durationedit">Duration</label>
                                <ejs-numerictextbox [(value)]="selectedProduct.duration"></ejs-numerictextbox>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="priorityedit">Priority</label>
                                <ejs-dropdownlist [(value)]="selectedProduct.priority" [dataSource]="dropdown" [fields]="dropdownFields"></ejs-dropdownlist>
                            </div>
                        </div>
                        </div>
                        <button ejs-button id="btn" (click)="save()">Save</button>
                    </div>
                    <div class="col-xs-6 col-md-9">
                        <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' (rowSelected)="rowSelectHandler($event)" [editSettings]='editSettings' childMapping='subtasks' >
                            <e-columns>
                                <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                                <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                                <e-column field='priority' headerText='Priority'  editType= 'dropdownedit'  width=90></e-column>
                                <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                            </e-columns>
                        </ejs-treegrid>
                    </div>
                </div>`
})
export class AppComponent implements OnInit {

    
    public data?: Object[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public dropdown: Object[] = [
        {priority:"High"},
        {priority:"Normal"},
        {priority:"Low"},
        {priority:"Critical"},
      ];
      public selectedProduct: Task = new Task();
      public dropdownFields: Object = { text: 'priority', value: 'priority' };
      public editSettings: Object = { allowEditing: true,mode:"Row"};
    ngOnInit(): void {
        this.data = sampleData;
    }
    save(): void {
        const index = (this.treegrid as TreeGridComponent).getSelectedRowIndexes()[0];
        (this.treegrid as TreeGridComponent).updateRow(index, this.selectedProduct);
       }
    
      rowSelectHandler(args: RowSelectEventArgs ): void {
        (this as any).selectedProduct = { ...args.data }; 
      } 
}

export class Task {
    taskID?: number;
    taskName?: string;
    duration?: number;
    priority?: string;
  }

