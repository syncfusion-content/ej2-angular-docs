

import { Component, OnInit,ViewChild } from '@angular/core';
import { formatData  } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='orderName' headerText='Order Name' textAlign='Left' width=180></e-column>
                        <e-column field='units' headerText='Units' width=120 textAlign='Right'></e-column>
                        <e-column field='unitPrice' headerText='Unit Price' width=120 textAlign='Right'></e-column>
                        <e-column headerText='Total Price' [valueAccessor]='totalPrice' width=120 format='c2' type='number' textAlign='Right'></e-column>
                    </e-columns>
              </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = formatData;
    }

totalPrice(field: string, data: { units: number, unitprice: number } | any, column: Object): number {
    return data.units * data.unitPrice;
};
}



