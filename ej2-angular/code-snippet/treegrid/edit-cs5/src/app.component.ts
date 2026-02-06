import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { FormsModule } from '@angular/forms';
import { Column, EditSettingsModel,ToolbarItems, TreeGridComponent,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule,DropDownListAllModule, FormsModule
    ],
    standalone: true,
    providers: [EditService, ToolbarService, PageService],
    selector: 'app-container',
    template: `     <ejs-treegrid #treegrid [dataSource]='data'  [treeColumnIndex]='1' height='230' [toolbar]='toolbar' [editSettings]='editSettings' (actionBegin)="actionBegin($event)" childMapping='subtasks' >
                        <e-columns>
                            <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                            <e-column field='priority' headerText='Priority' width=90>
                                <ng-template #template let-data>
                                    <a href="#">{{data.priority}}</a>
                                </ng-template>
                                <ng-template #editTemplate let-data>
                                    <ejs-dropdownlist [dataSource]='selectDatasource' [(ngModel)]='taskData.priority' [fields]="fields" popupHeight="150px"></ejs-dropdownlist>
                                </ng-template>
                            </e-column>
                            <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        </e-columns>
                    </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    public selectDatasource = [
        { text: 'High', value: 'High' },
        { text: 'Low', value: 'Low' },
        { text: 'Critical', value: 'Critical' },
        { text: 'Normal', value: 'Normal' },
    ];
    public taskData?: object | any;
    public fields = { value: 'value', text: 'text' };
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.taskData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['priority'] = this.taskData['priority'];
        }
    }
}