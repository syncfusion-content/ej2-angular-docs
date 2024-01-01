import { Component, OnInit } from '@angular/core';
import { data, columnDataType } from './datasource';
import { BeforeBatchAddArgs, BeforeBatchDeleteArgs, CellEditArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<div style="padding:0px 0px 20px 0px">
                <button ejs-button id="sample" (click)="btnClick($event)">Grid is Addable</button> 
               </div> 
               <ejs-grid  [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' (cellEdit)="cellEdit($event)" 
               (beforeBatchAdd)="beforeBatchAdd($event)" (beforeBatchDelete)="beforeBatchDelete($event)" height='240px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' [validationRules]='orderidrules' 
                    isPrimaryKey='true' width=100></e-column>
                    <e-column field='Role' headerText='Role' [validationRules]='rolerules' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 [validationRules]='freightrules' format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public isAddable?: boolean = true;
    public orderidrules?: Object;
    public rolerules?: Object;
    public freightrules?: Object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.orderidrules = { required: true, number: true };
        this.rolerules = {required: true };
        this.freightrules =  { min:1, max:1000 };
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



