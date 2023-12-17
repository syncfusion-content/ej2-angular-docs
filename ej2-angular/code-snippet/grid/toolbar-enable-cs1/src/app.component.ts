
import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';
import { GridComponent , GroupSettingsModel} from '@syncfusion/ej2-angular-grids';

@Component({
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
    public toolbarObj?: any;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbar = ['Expand', 'Collapse'];
        this.groupOptions = { columns: ['CustomerID'] };
    }

    clickHandler(args: ClickEventArgs): void {
        if ((args as any).item.id === 'Grid_Collapse') { // Grid_Collapse is control id + '_' + toolbar value.
            (this.grid as any).groupModule.collapseAll();
        }

        if ((args as any).item.id === 'Grid_Expand') {
            (this.grid as any).groupModule.expandAll();
        }
    }
    onSwitchChange(args: any) {
        if (args.checked) {
            (this.grid as any).toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false); // Disable toolbar items.
        } else {
            (this.grid as any).toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true); // Enable toolbar items.
        }
    }
}



