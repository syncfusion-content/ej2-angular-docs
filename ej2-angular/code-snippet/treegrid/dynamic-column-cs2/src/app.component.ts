

import { Component, OnInit,ViewChild } from '@angular/core';
import { formatData  } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                          <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                          <e-column field='orderName' headerText='Order Name' [valueAccessor]='orderFormatter' textAlign='Left' width=180></e-column>
                          <e-column field='orderDate' headerText='Order Date' textAlign='Right'  width=160 format='yMd'></e-column>
                          <e-column field='price' headerText='Price' textAlign='Right' [valueAccessor]='currencyFormatter'  width=80></e-column>
                    </e-columns>
             </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = formatData ;
    }
    currencyFormatter(field: string, data: Object | any, column: Object): string {
        return '€' + data['price'];
    }
    
     orderFormatter(field: string, data: Object | any, column: Object): string {
        return data[field] + '-' + data['Category'];
    }
}



