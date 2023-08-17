

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GroupSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
    <div>
        <label style="padding: 10px 10px">
        Expand or collapse rows 
        </label>
        <ejs-switch id="switch" (change)="onSwitchChange($event)"></ejs-switch>
    </div>
    <ejs-grid #grid style="padding: 10px 10px" [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupOptions' height='315px'>
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
    @ViewChild('grid')
    public grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { showDropArea: false, columns: ['CustomerID', 'ShipCity'] };
    }

    onSwitchChange(args: any) {
        if (args.checked) {
            (this.grid as any).groupCollapseAll();
        } else {
            (this.grid as any).groupExpandAll();
        }
    }
}