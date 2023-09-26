

import { Component, OnInit, ViewChild } from '@angular/core';
import { projectData } from './datasource';
import { TreeGridComponent, EditSettingsModel, ToolbarItems,  EditService, ToolbarService  } from '@syncfusion/ej2-angular-treegrid';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    providers: [EditService, ToolbarService],
    template: `<ejs-treegrid #treegridObj [dataSource]='data' idMapping='TaskID' parentIdMapping='parentID' [treeColumnIndex]='1' [editSettings]='editSettings' [toolbar]='toolbar' [height]='273'>
        <e-columns>
            <e-column field='TaskID' headerText='Task ID' isPrimaryKey='true' width='70' textAlign='Right'></e-column>
            <e-column field='TaskName' headerText='Task Name' width='100' ></e-column>
            <e-column field='StartDate' headerText='Start Date' width='100' format="yMd" textAlign='Right' editType='datepickeredit'></e-column>
            <e-column field='EndDate' headerText='End Date' width='90' format="yMd" textAlign='Right'  editType='datepickeredit'></e-column>
            <e-column field='Priority' headerText='Priority' width='90' editType= 'dropdownedit' [edit]='priorityParams'></e-column>
            <e-column field='Duration' headerText='Duration' width='90' textAlign='Right' editType='dropdownedit' [edit]='durationParams'></e-column>
            <e-column field='Progress' headerText='Progress' width='90' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public priorityParams ?: IEditCell;
    public durationParams ?: IEditCell;
    public priorityElem ?: HTMLElement;
    public priorityObj ?: DropDownList;

    public durationElem ?: HTMLElement;
    public durationObj ?: DropDownList;

    @ViewChild('treegridObj')
    public treegridObj?: TreeGridComponent;

    public priorityData: { [key: string]: Object }[] = [
      { priorityName: 'Normal', priorityId: '1' },
      { priorityName: 'High', priorityId: '2' }
    ];
    public durationData : { [key: string]: Object }[] = [
            { durationValue: 2, priorityId: '1', durationId: 2 },
            { durationValue: 3, priorityId: '1', durationId: 3 },
            { durationValue: 4, priorityId: '1', durationId: 4 },
            { durationValue: 11, priorityId: '2', durationId: 11 },
            { durationValue: 15, priorityId: '2', durationId: 15 },
            { durationValue: 20, priorityId: '2', durationId: 20 }
    ];

    ngOnInit(): void {
        this.data = projectData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.priorityParams = {
            create:()=>{
            this.priorityElem = document.createElement('input');
                return this.priorityElem;
            },
            read:()=>{
                return this.priorityObj?.text;
            },
            destroy:()=>{
                this.priorityObj?.destroy();
            },
            write:()=>{
                this.priorityObj = new DropDownList({
                dataSource: new DataManager(this.priorityData),
                fields: { value: 'priorityId', text: 'priorityName' },
                change: () => {
                (this.durationObj as DropDownList).enabled = true;
                let tempQuery: Query = new Query().where('priorityId', 'equal', this.priorityObj?.value);
                (this.durationObj as DropDownList).query = tempQuery;
                (this.durationObj as any).text = undefined;
                this.durationObj?.dataBind();
            },
            placeholder: 'Select a priority',
            floatLabelType: 'Never'
            });
            this.priorityObj.appendTo(this.priorityElem);
        }};
        this.durationParams = {
            create:()=>{
                this.durationElem = document.createElement('input');
                return this.durationElem;
            },
            read:()=>{
                return this.durationObj?.text;
            },
            destroy:()=>{
                this.durationObj?.destroy();
            },
            write:()=>{
                this.durationObj = new DropDownList({
                dataSource: new DataManager(this.durationData),
                fields: { value: 'durationId', text: 'durationValue' },
                enabled: false,
                placeholder: 'Select a duration',
                floatLabelType: 'Never'
            });
            this.durationObj.appendTo(this.durationElem);
        }}
    }


}
