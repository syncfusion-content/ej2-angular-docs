import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, ButtonModule,CheckBoxModule,RadioButtonModule,SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
        GridModule,ButtonModule,
        CheckBoxModule,
        RadioButtonModule,
        SwitchModule
        ],
    standalone: true,
    selector: 'app-root',
    template: `
    <div>
        <label style="padding: 10px 10px">
        Enable or disable visible property
        </label>
        <ejs-switch id="switch" (change)="change($event)"></ejs-switch>
    </div>
    <ejs-grid #grid [dataSource]='data' height='300px' style="padding: 5px 5px">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
            <e-column field='ShipCity' headerText='Ship City' [visible]='false' width=100></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {
    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    change(args: ChangeEventArgs) {
        if (args.checked) {
            (this.grid as GridComponent).getColumnByField('ShipCity').visible = true;
        } else {
            (this.grid as GridComponent).getColumnByField('ShipCity').visible = false;
        }
        (this.grid as GridComponent).refreshColumns();
    }

    ngOnInit(): void {
        this.data = data;
    }
}
