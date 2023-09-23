


import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, ContextMenuService, PageService, EditService, EditSettingsModel, ContextMenuItem } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid  #grid [dataSource]='data' id="gridcomp" allowPaging='true' height='220px'
        [contextMenuItems]="contextMenuItems" [editSettings]='editing' (rowSelected)='rowSelected($event)'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey='true'></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [ContextMenuService, PageService, EditService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public contextMenuItems?: ContextMenuItem[] = ['Copy', 'Edit', 'Delete'];
    @ViewChild('grid')
    public grid?: GridComponent;
    public editing?: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };

    ngOnInit(): void {
        this.data = data;
    }
    rowSelected(args: any) {
        var contextMenuObj = (this.grid as any).contextMenuModule.contextMenu;
        if ((args as any).data.OrderID % 2 === 0) {
            contextMenuObj.enableItems(['Copy'], false);
        } else {
            contextMenuObj.enableItems(['Copy'], true);
        }
    }
}



