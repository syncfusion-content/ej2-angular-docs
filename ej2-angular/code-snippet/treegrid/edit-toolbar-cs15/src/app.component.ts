

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { MultiSelect } from '@syncfusion/ej2-dropdowns';
import { TreeGridComponent, Column, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { IEditCell } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='315' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='priority' headerText='Priority' [edit]="editOptions" textAlign='Right' width=130></e-column>
                    </e-columns>
                </ejs-treegrid>`
})

export class AppComponent implements OnInit {
    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public editOptions?: IEditCell;
    public elem?: HTMLElement;
    public toolbarOptions?: ToolbarItems[];
    public multiSelectObj?: MultiSelect;
    public multiselectDatasource = [
        { priority: 'Low', Id: '1' },
        { priority: 'High', Id: '2' },
        { priority: 'Critical', Id: '3' },
        { priority: 'Normal', Id: '4' }
    ];
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editSettings = {
            allowEditing: true,
            allowAdding: true,
            allowDeleting: true,
            newRowPosition: 'Below',
            mode: 'Cell',
        };
        this.editOptions = {
            create: () => {
                this.elem = document.createElement('input');
                return this.elem;
            },
            read: () => {
                return (this.multiSelectObj as MultiSelect).value.join(',');
            },
            destroy: () => {
                (this.multiSelectObj as MultiSelect).destroy();
            },
            write: (args: { rowData: Object; column: Column } | any) => {
                let multiSelectVal = args.rowData[args.column.field]
                ? args.rowData[args.column.field].split(',')
                : [];
                this.multiSelectObj = new MultiSelect({
                value: multiSelectVal,
                dataSource: this.multiselectDatasource,
                fields: { value: 'priority', text: 'priority' },
                floatLabelType: 'Never',
                mode: 'Box'
                });
                this.multiSelectObj.appendTo(this.elem);
            }
        }
    }
}
