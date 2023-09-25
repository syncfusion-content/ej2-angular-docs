

import { Component, OnInit, ViewChild } from '@angular/core';
import { foreignKeyData, dropData } from './datasource';
import { TreeGridComponent,EditService, ToolbarService, ITreeData, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import {  QueryCellInfoEventArgs, Column, IEditCell } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-container',
    providers: [ToolbarService, EditService],
    template: `<ejs-treegrid #treegridObj [dataSource]='data' childMapping='Children'  [treeColumnIndex]='1' [editSettings]='editSettings' [toolbar]='toolbar' (queryCellInfo)='queryCellInfo($event)' [height]='273' >
        <e-columns>
            <e-column field='EmpID' headerText='EmpID' width='70' textAlign='Right' isPrimaryKey='true' ></e-column>
            <e-column field='Name' headerText='Employee Name' width='70' ></e-column>
            <e-column field='Contact' headerText='Contact' width='90' textAlign='Right'></e-column>
            <e-column field='DOB' headerText='DOB' textAlign='Right' [format]='formatOptions' editType= 'datepickeredit' width='70'></e-column>
            <e-column field='EmployeeID' headerText='Employee ID' editType= 'dropdownedit' [edit]='employeeParams'  width='70'></e-column>
            <e-column field='Country' headerText='Country' width='90' textAlign='Right'></e-column>
        </e-columns>
    </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data: Object[] = [];
    public formatOptions?: Object;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public employeeParams?: IEditCell;

    ngOnInit(): void {
        this.data = foreignKeyData;
        this.formatOptions = { format: 'y/M/d', type: 'date' };
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        // Bind ForeignKey DataSource for dropdown using editParams
         this.employeeParams = {
          params: {
                dataSource: new DataManager(dropData),
                fields: { text: "EmployeeName", value: "EmployeeID" },
                query: new Query()
            }  
         };
    }
    queryCellInfo(args: QueryCellInfoEventArgs | any) {
        if ((args.column as Column).field === "EmployeeID") {
            for (var i = 0; i < dropData.length; i++) {
                let data: Object[] = args.data as Object[];
                if (data[(args.column).field] === (dropData as any)[i]["EmployeeID"]) {
                    (args.cell as HTMLElement).innerText = (dropData as any)[i]["EmployeeName"]; // assign the foreignkey field value to the innertext
                }
            }
        }
    }

}



