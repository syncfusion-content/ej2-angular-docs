

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ActionEventArgs, GridComponent, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
    <div style="margin-left:100px;"><p style="color:red;" id="message">{{message}}</p></div>
    <ejs-grid [dataSource]='data' [allowGrouping]='true' [groupSettings]='groupSettings' (actionComplete)='actionComplete($event)' (actionBegin)='actionBegin($event)' height='260px'>
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
    public groupSettings?: GroupSettingsModel;
    public message?: string
    ngOnInit(): void {
        this.data = data;
    }

    actionBegin(args: any) {
        if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
            args.cancel = true
        }
    }

    actionComplete(args: any) {
        if (args.requestType === 'grouping') {
            this.message = args.requestType + ' action completed for ' + args.columnName + ' column';
        }
        else {
            this.message = ''
        }
    }

}

