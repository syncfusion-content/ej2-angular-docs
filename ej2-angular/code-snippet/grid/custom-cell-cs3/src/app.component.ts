import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
    <div>
    <label style="padding: 10px 10px">
    Enable or disable HTML Encode
    </label>
    <ejs-switch id="switch" (change)="change($event)"></ejs-switch>
    </div>
    <ejs-grid #grid [dataSource]='data' [height]='315' style="padding: 10px 10px">
        <e-columns>
            <e-column field='OrderID' headerText= 'Order ID' textAlign='Right' width=140></e-column>
            <e-column field='CustomerID' headerText="<strong> Customer ID </strong>" width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=80></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=130 ></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    change(args: any) {
        if ((args as any).checked) {
            (this.grid as any).getColumnByField('CustomerID').disableHtmlEncode = false;
        } else {
            (this.grid as any).getColumnByField('CustomerID').disableHtmlEncode = true;
        }
        (this.grid as any).refresh();
    }

    ngOnInit(): void {
        this.data = data;
    }
}



