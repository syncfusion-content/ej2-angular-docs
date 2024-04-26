import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { DetailRowService } from '@syncfusion/ej2-angular-grids'

import { Component, OnInit } from '@angular/core';
import { data , columnDataType} from './datasource';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule        
    ],

providers: [DetailRowService],
standalone: true,
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
        if ((args.data as columnDataType)[Freight] < 30) {
            (args.row as Element).classList.add('below-30');
        } else if ((args.data as columnDataType)[Freight] >= 30 && ((args.data as columnDataType)[Freight] < 80)) {
            (args.row as Element).classList.add('below-80');
        } else {
            (args.row as Element).classList.add('above-80');
        }
    }
}




