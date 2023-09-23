


import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';
import { MouseEventArgs } from '@syncfusion/ej2-base';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' allowPaging='true' (load)='load($event)' (actionComplete)='onActionComplete($event)'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 isPrimaryKey='true'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public toolbar?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public editSettings?: EditSettingsModel;
    public isDropdown = false;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    load(args: any){
        (this.grid as any).element.addEventListener('mouseup', (e: MouseEventArgs) => {
            if ((e.target as HTMLElement).classList.contains("e-rowcell")) {
              if ((this.grid as any).isEdit)
                  (this.grid as any).endEdit();
              let rowInfo = (this.grid as any).getRowInfo(e.target);
              if (rowInfo.column.field === "ShipCountry")
                  this.isDropdown = true;
              (this.grid as any).selectRow(rowInfo.rowIndex);
              (this.grid as any).startEdit();
            }
        });
    }

    onActionComplete(args: any) {
        if ((args as any).requestType =="beginEdit" && this.isDropdown) {
            this.isDropdown = false;
            let dropdownObj = (args as any).form.querySelector('.e-dropdownlist').ej2_instances[0];
            dropdownObj.element.focus();
            dropdownObj.showPopup();
        }
    }

}



