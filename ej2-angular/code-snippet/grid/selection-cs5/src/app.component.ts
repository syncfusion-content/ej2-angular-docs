

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent, SelectionSettingsModel, FilterService, FilterSettingsModel, PageSettingsModel, ToolbarService, ToolbarItems, EditService, EditSettingsModel, RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:`<ejs-grid #grid [dataSource]='data' [allowPaging]='true' [allowFiltering]='true' [allowSelection]='true' [selectionSettings]='selectionOptions' [editSettings]='editSettings' [toolbar]='toolbar' [pageSettings]='pageOptions' [filterSettings]='filterOptions' (rowDataBound)='rowDataBound($event)'>
        <e-columns>
            <e-column type='checkbox' width=120></e-column>
            <e-column field='List' headerText='List' width=120></e-column>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=150></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
            <e-column field='EmployeeID' headerText='Employee ID' width=150></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        </e-columns>
    </ejs-grid>`,
    providers: [FilterService, EditService, ToolbarService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public editSettings?: EditSettingsModel;
    public pageOptions?: PageSettingsModel;
    public toolbar?: ToolbarItems[] | object;
    public filterOptions?: FilterSettingsModel;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.selectionOptions = { type: 'Multiple', persistSelection: true };
        this.pageOptions = { pageSize: 5 };
        this.filterOptions = { type: 'CheckBox' };
        for (let i: number = 0; i < data.length; i++) {
            (data as any)[i as number]['List'] = i + 1;
        }
    }
    public rowDataBound(args: any): void {
        (args as any).isSelectable = (args as any).data.List % 5 === 0;
    }
}



