import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [enableHover]='false' 
              [allowSelection]='false' [height]='315' (rowDataBound)='rowDataBound($event)'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right'
                        width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120>
                        </e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' 
                        format='C2' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130 >
                        </e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
    rowDataBound(args: RowDataBoundEventArgs) {
        const Freight = 'Freight';
        if ((args as any).data[Freight] < 30) {
            (args as any).row.classList.add('below-30');
        } else if ((args as any).data[Freight] >= 30 && (args as any).data[Freight] < 80) {
            (args as any).row.classList.add('below-80');
        } else {
            (args as any).row.classList.add('above-80');
        }
    }
}




