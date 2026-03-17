import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { EditEventArgs, EditService, EditSettingsModel, GridModule, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule,ButtonModule],
    providers: [EditService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<button ejs-button  id="small" (click)="btnClick($event)">Grid is Addable
               </button>
               <div class="control-section"  style="padding-top:20px">
                    <ejs-grid [dataSource]='data' [editSettings]='editSettings' 
                    [toolbar]='toolbar' (actionBegin)="actionBegin($event)" height='240px'>
                        <e-columns>
                            <e-column field='EmployeeID' headerText='Employee ID' textAlign= 'Right' isPrimaryKey='true'  [validationRules]='orderIDRules' width=100></e-column>
                            <e-column field='EmployeeName' headerText='Employee Name' [validationRules]='customerNameRules' width=120 format= 'C2'></e-column>
                            <e-column field='Role' headerText='Role' [validationRules]='roleIDRules' width=120></e-column>
                            <e-column field='EmployeeCountry' headerText='Employee Country' editType= 'dropdownedit' width=150></e-column>
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
        this.roleIDRules = { required: true, minLength: 5 };
        this.customerNameRules = { required: true }
    }

    actionBegin(args: EditEventArgs) {
        if (args.requestType == 'beginEdit' && args.rowData as { Role?: string }['Role'] == 'Admin') {
            args.cancel = true;
        }
        else if (args.requestType == 'delete' && (args as any).data[0].Role == 'Admin') {
            args.cancel = true;
        }
        else if (args.requestType == 'add') {
            if (!this.isAddable) {
                args.cancel = true;
            }
        }
    }
    btnClick(args: MouseEvent) {
        (args.target as HTMLElement).innerText == 'GRID IS ADDABLE' ? ((args.target as HTMLElement).innerText = 'Grid is Not Addable') : ((args.target as HTMLElement).innerText = 'Grid is Addable');
        this.isAddable = !this.isAddable;
    }
}
