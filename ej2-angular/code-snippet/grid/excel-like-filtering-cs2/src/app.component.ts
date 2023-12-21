

import { Component, OnInit, } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel,FilterSearchBeginEventArgs, } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
    <ejs-grid [dataSource]='data' [allowPaging]='true' [allowFiltering]='true' [filterSettings]='filterOptions' (actionBegin)="actionBegin($event)" height='273px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
            <e-column field='ProductName' headerText='Product Name' width=110></e-column>
            <e-column field='Quantity' headerText='Quantity' width=110></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;  
        this.filterOptions={ type: 'Excel' }          
    }
    actionBegin(args: FilterSearchBeginEventArgs) {
        if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
            args.filterChoiceCount = 3000;
        }
    }
}



