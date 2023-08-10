

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
        `<button ej-button id='clear' (click)='clearSearch()'>Clear Search</button>
        <ejs-grid #grid [dataSource]='data' [searchSettings]='searchOptions' [toolbar]='toolbarOptions' height='260px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public searchOptions?: SearchSettingsModel;
    @ViewChild('grid') public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.searchOptions = { fields: ['CustomerID'], operator: 'contains', key: 'Ha', ignoreCase: true };
        this.toolbarOptions = ['Search'];
    }

    clearSearch() {
        (this.gridObj as any).searchSettings.key = '';
    }
}



