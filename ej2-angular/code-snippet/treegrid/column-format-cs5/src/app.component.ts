

import { Component, OnInit,ViewChild } from '@angular/core';
import { formatData } from './datasource';
 
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='orderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                        <e-column field='orderName' headerText='Order Name' textAlign='Left' width=180></e-column>
                        <e-column field='orderDate' headerText='Order Date' textAlign='Right' width=120>
                            <ng-template #template let-data>
                                 {{ data.orderDate | date:'dd/MMM/yyyy' }}
                            </ng-template>
                        </e-column>
                        <e-column field='shippedDate' headerText='Ship Date' textAlign='Right' width=150></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' format='N' type='number' width=80></e-column>
                    </e-columns>
             </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    
    ngOnInit(): void {
        this.data = formatData;
    }
}



