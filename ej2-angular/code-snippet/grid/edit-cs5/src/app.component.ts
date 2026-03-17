import { columnDataType, data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { BeforeBatchAddArgs, BeforeBatchDeleteArgs, CellEditArgs, EditService, EditSettingsModel, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [ 
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        ButtonModule
        ],
    providers: [EditService, ToolbarService, SortService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<div style="padding:0px 0px 20px 0px">
                <button ejs-button id="sample" (click)="btnClick($event)">Grid is Addable</button> 
               </div> 
               <ejs-grid  [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' (cellEdit)="cellEdit($event)" 
               (beforeBatchAdd)="beforeBatchAdd($event)" (beforeBatchDelete)="beforeBatchDelete($event)" height='240px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' [validationRules]='orderIDRules' 
                    isPrimaryKey='true' width=100></e-column>
                    <e-column field='Role' headerText='Role' [validationRules]='roleRules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 [validationRules]='freightRules' format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public isAddable?: boolean = true;
    public orderIDRules?: Object;
    public roleRules?: Object;
    public freightRules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true, number: true };
        this.roleRules = {required: true };
        this.freightRules =  { min:1, max:1000 };
    }
    cellEdit(args: CellEditArgs) {
        if ((args.rowData as columnDataType)['Role'] == 'Admin') {
            args.cancel = true;
        }
    }
    beforeBatchAdd(args: BeforeBatchAddArgs) {
        if (!this.isAddable) {
            args.cancel = true;
        }
    }
    beforeBatchDelete(args: BeforeBatchDeleteArgs) {
        if ((args.rowData as columnDataType)['Role'] == 'Admin') {
            args.cancel = true;
        }
    }
    btnClick(args: MouseEvent) {
        (args.target as HTMLElement).innerText == 'GRID IS ADDABLE' ? ((args.target as HTMLElement).innerText = 'Grid is Not Addable') : ((args.target as HTMLElement).innerText = 'Grid is Addable');
        this.isAddable = !this.isAddable;
    }
}
