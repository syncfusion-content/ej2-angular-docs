import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, } from '@angular/core';
import { data } from './datasource';
import { GroupEventArgs, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService],
standalone: true,
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

    actionBegin(args: GroupEventArgs) {
        if (args.requestType === 'grouping' && args.columnName === 'OrderID') {
            args.cancel = true
            this.message = args.requestType + ' action is cancelled for ' + args.columnName + ' column';
        }
    }

    actionComplete(args: GroupEventArgs) {
        if (args.requestType === 'grouping') {
            this.message = args.requestType + ' action completed for ' + args.columnName + ' column';
        }
        else {
            this.message = ''
        }
    }

}

