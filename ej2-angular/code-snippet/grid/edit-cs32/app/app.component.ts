

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, IEditCell, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid  #grid [dataSource]='data' [editSettings]='editSettings' height='220' allowPaging='true' (actionComplete)='actionComplete($event)' (recordDoubleClick)='recordDoubleClick($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=120 type='number'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=140 type='string'></e-column>
            <e-column field='Freight' headerText='Freight' editType='numericedit' textAlign='Right' width=120 format='c2'></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign= 'Right' width=140 editType='datetimepickeredit' [format]='formatOptions' ></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150 [edit]='params'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    public editSettings?: EditSettingsModel;
    public formatOptions?: object;
    public params?: IEditCell;
    public fieldName?: any;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal" };
        this.formatOptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
        this.params = {
            params: {
               popupHeight: "300px"
            }
        };
    }
    actionComplete(e: any) {
        if (e.requestType === "beginEdit") {
            // focus the column
            e.form.elements[(this.grid as any).element.getAttribute("id") + this.fieldName].focus();
        }
    }
    recordDoubleClick(e: any) {
        var clickedColumnIndex = e.cell.getAttribute("data-colindex");
        this.fieldName = (this.grid as any).columnModel[parseInt(clickedColumnIndex)].field;
    }
}



