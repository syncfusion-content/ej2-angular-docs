import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { textdata,dd_data} from './datasource';
import { EditSettingsModel, ToolbarItems,EditService, ToolbarService, PageService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,DropDownListModule, FormsModule
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [toolbar]='toolbar' [treeColumnIndex]='2' height='270' [editSettings]='editSettings' (actionBegin)='actionBegin($event)' childMapping='Children' >
                    <e-columns>
                        <e-column field='EmpID' headerText='Employee ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field="EmployeeID"  headerText="ID" width="220">
                            <ng-template #editTemplate let-data>
                                <ejs-dropdownlist [dataSource]='employeeData' [(ngModel)]="taskData.EmployeeID" [fields]='dropdownFields' [itemTemplate]="itemTemplate">
                                    <ng-template #itemTemplate let-data>
                                        <div>
                                            <img class="empImage" width="50px" [src]="'https://ej2.syncfusion.com/demos/src/grid/images/' + data.EmployeeID + '.png'" alt="employee" />
                                            <div class="ename">{{ data.FirstName }}</div>
                                        </div>
                                    </ng-template>
                                </ejs-dropdownlist>
                            </ng-template>
                        </e-column>
                        <e-column field='Name' headerText='Name' width=250></e-column>
                        <e-column field='Country' headerText='Country' width=140></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public employeeData?: object[]=dd_data;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public dropdownFields?: Object;
    public taskData?: object | any;
    
    ngOnInit(): void {
        this.data = textdata;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.dropdownFields = { text: 'EmployeeID', value: 'EmployeeID' };
    }
    actionBegin(args: any) {
        if (args.requestType === 'beginEdit' || args.type === 'edit' || args.requestType === 'add') {
            (this.taskData as object) = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            (args.data as any)['EmployeeID'] = this.taskData['EmployeeID'];
        }
    }

}



