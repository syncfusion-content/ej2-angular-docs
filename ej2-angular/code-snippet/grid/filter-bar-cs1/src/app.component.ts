import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxSelectionService, DropDownListAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, FilterSettingsModel, GridModule, PageService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [  
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule
        ],
    providers: [FilterService, PageService,CheckBoxSelectionService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' allowPaging='true' [pageSettings]="pageSettings" [allowFiltering]='true' height='150px' [filterSettings]='filterSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='OrderDate' headerText='Ship City' width=100 format='yMd'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterSettings?: FilterSettingsModel;
    public pageSettings?: PageSettingsModel = { pageSize: 5 };

    ngOnInit(): void {
        this.data = data;
        this.filterSettings = {
           type:'FilterBar'
        }
    }
}
