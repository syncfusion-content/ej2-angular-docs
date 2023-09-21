

import { Component, OnInit } from '@angular/core';
import { FilterSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<div class='input-container'>
			    <label for='fields' class='label'>Select Filter Mode</label>
			    <ejs-dropdownlist #field id='fields' [dataSource]='filterModesData' (change)='onModeChange($event)'></ejs-dropdownlist>
               </div>
               <ejs-grid [dataSource]='data' allowPaging='true' [pageSettings]="pageSettings" [allowFiltering]='true' height='273px' [filterSettings]='filterSettings'>
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
    public filterModesData: string[]= ['Immediate','OnEnter']

    ngOnInit(): void {
        this.data = data;
    }
    onModeChange(args:any): void {
        this.filterSettings = {
            mode: args.value,
        }
    }; 
}