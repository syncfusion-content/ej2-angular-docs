import { billingData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, EditService, SaveEventArgs, EditEventArgs, EditSettingsModel, FilterSettingsModel, GridModule, PageService, SortService, ToolbarItems, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids';
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
        AutoCompleteModule
        ],
    providers: [EditService, ToolbarService, SortService, PageService, FilterService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [allowPaging]='true' [allowSorting]='true' [allowFiltering]='true' [filterSettings]='filterSettings'
               [toolbar]='toolbar' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
                <e-columns>
                        <e-column field="BillID" headerText="Bill ID" width="120" isPrimaryKey="true" [validationRules]="{ required: true }"></e-column>
                        <e-column field="BillDate" headerText="Bill Date" width="140" format="yMd" editType="datepickeredit"></e-column>
                        <e-column field="Customer" headerText="Customer Name" width="150" [validationRules]="{ required: true }"></e-column>
                        <e-column field="Product" headerText="Product Name" width="150" editType="dropdownedit"></e-column>
                        <e-column field="Category" headerText="Category" width="130" editType="dropdownedit"></e-column>
                        <e-column field="Quantity" headerText="Quantity" width="100" textAlign="Right" format="N0"></e-column>
                        <e-column field="Price" headerText="Price" width="100" textAlign="Right" editType="numericedit" format="C2"></e-column>
                        <e-column field="Total" headerText="Total" width="120" textAlign="Right" format="C2"></e-column>
                        <e-column field="PaymentStatus" headerText="Payment Status" width="130" editType="dropdownedit"></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public filterSettings?: FilterSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = billingData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
        this.filterSettings = { type: 'CheckBox' };
    }

    actionComplete(args: SaveEventArgs) {
        if (args.action === 'edit' && args.requestType === 'save' && (args.columnName === 'Quantity' || args.columnName === 'Price')) {
            var total = args.data.Quantity * args.data.Price;
            this.grid.updateCell(args.index, "Total", total);
        }
    }

    actionBegin(args: EditEventArgs) {
        if (args.requestType === 'beginEdit' && args.columnName === 'Total') {
            args.cancel = true;
        }
    }
}
