import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ejs-button  id="small" (click)="btnClick($event)">Grid is Addable
               </button>
               <div class="control-section"  style="padding-top:20px">
                    <ejs-grid [dataSource]='data' [editSettings]='editSettings' 
                    [toolbar]='toolbar' (actionBegin)="actionBegin($event)" height='240px'>
                        <e-columns>
                            <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right'  
                            isPrimaryKey='true'  [validationRules]='orderIDRules' width=100>
                            </e-column>
                            <e-column field='EmployeeName' headerText='Employee Name'
                            [validationRules]='customerNameRules' width=120 format= 'C2'></e-column>
                            <e-column field='Role' headerText='Role' 
                            [validationRules]='roleIDRules' width=120></e-column>
                            <e-column field='EmployeeCountry' headerText='Employee Country' 
                            editType= 'dropdownedit' width=150></e-column>
                        </e-columns>
                    </ejs-grid>
                </div>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public isAddable: boolean = true;
    public orderIDRules?: object;
    public roleIDRules?: object;
    public customerNameRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true };
        this.roleIDRules = { required: true, minLength: 8 };
        this.customerNameRules={required: true }
    }

    actionBegin(args:any) {
        if (args.requestType == 'beginEdit' && args.rowData['Role'] == 'Admin') {
           args.cancel = true;  
        }
        else if (args.requestType == 'delete' && args.data[0]['Role'] == 'Admin') {
                args.cancel = true;
        }
        else if (args.requestType == 'add') {
            if (!this.isAddable) {
                args.cancel = true;
            }
        }
    }
    btnClick(args:any) {
        args.target.innerText == 'GRID IS ADDABLE' ? (args.target.innerText = 'Grid is Not Addable') : (args.target.innerText = 'Grid is Addable');
        this.isAddable = !this.isAddable;
    }
}



