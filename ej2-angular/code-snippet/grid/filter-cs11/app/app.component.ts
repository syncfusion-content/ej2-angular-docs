

import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<div id='message'>{{message}}</div><ejs-grid #grid [dataSource]='data' [allowFiltering]='true' height='273px' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    public message: string | undefined;
    @ViewChild('grid') public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    actionBegin(args: any) {
 if (args.requestType == 'filtering' && args.currentFilteringColumn == 'ShipCity'){
        args.cancel = true;
        this.message = 'The '+ args.type + ' event has been triggered and the ' + args.requestType + ' action is cancelled for ' + args.currentFilteringColumn;
        }
    }

    actionComplete(args: any) {
        if (args.requestType == 'filtering' && args.currentFilteringColumn) {
            this.message ='The ' + args.type + ' event has been triggered and the ' +  args.requestType + ' action for the ' + args.currentFilteringColumn + ' column has been successfully executed';
          }else{
            this.message='';
        }
    }
}





