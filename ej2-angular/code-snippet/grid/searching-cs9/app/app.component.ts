

import { Component, OnInit,ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems,SearchSettingsModel,GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
    <div>
    <label style="padding: 10px 10px">
    Enable or disable ignoreAccent property
    </label>
    <ejs-switch id="switch" (change)="onSwitchChange($event)"></ejs-switch>
    </div>
    <ejs-grid #grid [dataSource]='data' [toolbar]='toolbarOptions' height='272px'>
        <e-columns>
            <e-column field='CategoryName' headerText='Category Name' width='100'></e-column>
            <e-column field='ProductName' headerText='Product Name' width='130'></e-column>
            <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='150' textAlign='Right'></e-column>
            <e-column field='UnitsInStock' headerText='Units In Stock' width='80' textAlign='Right'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Search'];
    }

    onSwitchChange(args: any) {
        if (args.checked) {
            (this.grid as any).searchSettings.ignoreAccent = true;
        } else {
            (this.grid as any).searchSettings.ignoreAccent = false;
        }
    }
}



