import { SelectionSettingsModel, ColumnModel, EditService, EditSettingsModel, FilterService, FilterSettingsModel, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { Component, OnInit } from '@angular/core';
import { ordersTrackData, OrderTrackModel } from './datasource';

@Component({
    imports: [ GridModule ],
    providers: [PageService, SortService, EditService, ToolbarService, FilterService,],
    standalone: true,
    selector: 'app-root',
    template:`<ejs-grid [dataSource]='data' height="245" [allowPaging]='true' [editSettings]='editSettings' 
               [toolbar]='toolbar' [allowSelection]='true' [selectionSettings]='selectionOptions'
               [allowFiltering]="true" [filterSettings]="filterSettings" [allowSorting]="true" 
               [isRowSelectable]='isRowSelectable'>
                <e-columns>
                    <e-column type='checkbox' width='50' ></e-column>
                    <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' [validationRules]='orderIDRules' textAlign='Right' width='110' ></e-column>
                    <e-column field='CustomerName' headerText='Customer Name' [validationRules]='customerNameRules' width='120' ></e-column>
                    <e-column field='Product' headerText='Product' editType= 'dropdownedit' width='110' ></e-column>
                    <e-column field='Amount' headerText='Amount' [validationRules]='amountRules' format='C2' textAlign='Right' width='110' ></e-column>
                    <e-column field='OrderDate' headerText='Order Date'  editType= 'datepickeredit' format='yMd' textAlign='Right' width='110' ></e-column>
                    <e-column field='Status' headerText='Order Status' editType= 'dropdownedit' width='110' ></e-column>
                </e-columns>
             </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public filterSettings?: FilterSettingsModel;
    public orderIDRules?: object;
    public customerNameRules?: object;
    public amountRules?: object;

    ngOnInit(): void {
        this.data = ordersTrackData;
        this.selectionOptions = { persistSelection: true };
        this.editSettings = { allowEditing: true, allowAdding: false, allowDeleting: false };
        this.toolbar = ['Edit', 'Update', 'Cancel'];
        this.filterSettings= { type: 'Excel' }
        this.orderIDRules = { required: true };
        this.customerNameRules = { required: true };
        this.amountRules={required: true, }
    }
    public isRowSelectable (data: OrderTrackModel, columns: ColumnModel[]) {
        return data.Status !== 'Cancelled';
    }
}
