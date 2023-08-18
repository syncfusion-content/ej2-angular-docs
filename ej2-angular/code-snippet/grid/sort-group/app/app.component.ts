import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel,SortSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowGrouping]='true' [allowSorting]='true' [sortSettings]='sortOptions'  [groupSettings]='groupOptions' height='267px'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    public sortOptions?: SortSettingsModel;
    
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { columns: ['CustomerID'] };
        this.sortOptions = { columns: [{ field: 'CustomerID', direction: 'Descending' }] };
    }

}