import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { ToolbarService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ToolbarItems,EditSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule
    ],

providers: [ToolbarService],
standalone: true,
    selector: 'app-root',
    template: `
    <div style="margin-left:180px"><p style="color:red;" id="message">{{message}}</p></div>
    <ejs-grid [dataSource]='data' height='270px' [toolbar]='toolbar' [editSettings]='editSettings' (toolbarClick)='clickHandler($event)'>
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
    public toolbar?: ToolbarItems[] | object;
    public editSettings?: EditSettingsModel;
    public message?: string;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel',
         { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }];
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'Click') {
            this.message = `Custom Toolbar Clicked`;
        }
    }
}



