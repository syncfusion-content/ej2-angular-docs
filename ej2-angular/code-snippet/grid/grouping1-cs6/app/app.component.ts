

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ActionEventArgs, GridComponent, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings'
     (actionComplete)='actionHandler($event)' (actionBegin)='actionHandler($event)' height='260px'>
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
    public groupSettings?: GroupSettingsModel;
    @ViewChild('grid')
    public grid?: GridComponent;
    ngOnInit(): void {
        this.data = data;
    }

    actionHandler(args: ActionEventArgs) {
        alert((args as any).requestType + ' ' + (args as any).type); // custom Action
    }
}

