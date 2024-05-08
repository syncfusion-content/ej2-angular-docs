import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService, ToolbarService, PageService } from '@syncfusion/ej2-angular-grids'
import {
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    SwitchModule,
} from '@syncfusion/ej2-angular-buttons'


import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';
import { GridComponent , GroupSettingsModel} from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';

@Component({
imports: [
        
        GridModule,
        ButtonModule,
        CheckBoxModule,
        RadioButtonModule,
        SwitchModule,
    ],

providers: [ToolbarService, PageService,GroupService],
standalone: true,
    selector: 'app-root',
    template: `
    <div>
    <label style="padding: 10px 10px">
    Enable or disable toolbar items
    </label>
    <ejs-switch id="switch" (change)="onSwitchChange($event)"></ejs-switch>
    </div>
    <ejs-grid id='Grid' #grid [dataSource]='data' height='200px' [allowGrouping]='true' [groupSettings]='groupOptions' [toolbar]='toolbar' (toolbarClick)='clickHandler($event)'>
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
    public toolbar?: string[];
    public groupOptions?: GroupSettingsModel;
    public toolbarObj?: object[];;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Expand', 'Collapse'];
        this.groupOptions = { columns: ['CustomerID'] };
    }

    clickHandler(args: ClickEventArgs): void {
        if (args.item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            (this.grid as GridComponent).groupModule.collapseAll();
        }

        if (args.item.id === 'Grid_Expand') {
            (this.grid as GridComponent).groupModule.expandAll();
        }
    }
    onSwitchChange(args: ChangeEventArgs) {
        if (args.checked) {
            (this.grid as GridComponent).toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
        } else {
            (this.grid as GridComponent).toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); // Enable toolbar items.
        }
    }
}



