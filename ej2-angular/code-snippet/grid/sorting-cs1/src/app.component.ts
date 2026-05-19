import { Component, OnInit } from '@angular/core';
//Import the required grid modules from the grid package
import { FilterService, GridModule, PageService, PageSettingsModel, SortService, EditService, ToolbarService, FilterSettingsModel, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
// Import Grid data from external file
import { data } from './datasource';

@Component({
    imports: [GridModule],
    /* Inject required Grid features */
    providers: [PageService, SortService, FilterService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [allowSorting]="true" [pageSettings]="pageSettings" [editSettings]='editSettings'
                    [toolbar]='toolbar' [allowFiltering]="true" [filterSettings]='filterSettings'>
                <e-columns>
                        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true'  [validationRules]='orderIDRules' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerName' headerText='Customer Name'validationRules]='customerNameRules' width=100></e-column>
                        <e-column field='Freight' headerText='Freight' format='C2' editType='numericedit' width=120></e-column>
                        <e-column field='OrderDate' headerText='Order Date' format='yMd' editType='datepickeredit' width=100></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=100></e-column>
                    </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public pageSettings?: PageSettingsModel;
    public filterSettings?: FilterSettingsModel;
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    public orderIDRules?: object;
    public customerIDRules?: object;
    ngOnInit(): void {
        this.data = data;
        this.pageSettings = { pageSize: 6 };
        this.filterSettings = { type: 'CheckBox' }
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.orderIDRules = { required: true, number: true }; this.customerIDRules = { required: true };
    }
}
