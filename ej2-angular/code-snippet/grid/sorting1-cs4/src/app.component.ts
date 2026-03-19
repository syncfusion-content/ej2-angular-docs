import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, SortEventArgs, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    providers: [SortService],
    standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:100px;"><p style="color:red;" id="message">{{ message }}</p></div>
    <ejs-grid [dataSource]='data' (actionComplete)='actionComplete($event)' (actionBegin)='actionBegin($event)' [allowSorting]='true' height='315px'>
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
    public message?: string;

    ngOnInit(): void {
        this.data = data;
    }

    actionBegin(args: SortEventArgs) {
        if (args.requestType === 'sorting' && args.columnName === 'OrderID') {
            this.message = args.requestType + ' action cancelled for ' + args.columnName + ' column';
            args.cancel = true;
        }
    }
    actionComplete({ requestType, columnName }: SortEventArgs) {
        this.message = requestType + ' action completed for ' + columnName + ' column';
    }
}
