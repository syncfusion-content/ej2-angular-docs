

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, IEditCell } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' height='220' 
               allowPaging='true' (actionComplete)='actionComplete($event)' 
               (recordDoubleClick)='recordDoubleClick($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' 
                        isPrimaryKey='true' width=120 type='number' 
                        [validationRules]='orderIDRules'></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' 
                        [validationRules]='customerIDRules' width=140 type='string'>
                        </e-column>
                        <e-column field='Freight' headerText='Freight' editType='numericedit' 
                        textAlign='Right' width=120 format='c2' 
                        [validationRules]='freightIDRules'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' 
                        textAlign= 'Right' width=140 editType='datetimepickeredit' 
                        [format]='formatOptions' ></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' 
                        editType='dropdownedit' width=150 [edit]='params'></e-column>
                    </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {
    
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public formatOptions?: object;
    public params?: IEditCell;
    public fieldName:any;
    @ViewChild('grid')
    public grid: any;
    public orderIDRules?: object;
    public customerIDRules?: object;
    public freightIDRules?: object;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, 
                            mode: "Normal" };
        this.formatOptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
        this.orderIDRules = { required: true };
        this.customerIDRules = { required: true, minLength: 5 };
        this.freightIDRules={required: true, min: 1, max:1000 }
        this.params = {
            params: {
               popupHeight: "300px"
            }
        };
    }
    actionComplete(e:any) {
        if (e.requestType === "beginEdit") {
            // focus the column
            e.form.elements[this.grid.element.getAttribute("id") + this.fieldName].focus();
        }
    }
    recordDoubleClick(e:any) {
        this.fieldName = this.grid.getColumnByIndex(e.cell.cellIndex).field;   
    }
}



