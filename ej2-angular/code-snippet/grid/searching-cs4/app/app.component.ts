

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, SearchSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='260' [searchSettings]='searchSettings' [toolbar]='toolbar' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100 ></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public searchSettings?: SearchSettingsModel;
    public toolbar?: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Search'];
        this.searchSettings = {fields: ['CustomerID', 'Freight', 'ShipCity']};
    }
}



