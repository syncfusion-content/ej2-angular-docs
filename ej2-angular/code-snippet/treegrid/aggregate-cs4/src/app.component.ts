

import { Component, OnInit } from '@angular/core';
import { summaryData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='260' width='auto' [treeColumnIndex]='0'  childMapping='subtasks' >
        <e-columns>
                   <e-column field='category' headerText='Category'  width=130></e-column>
                   <e-column field='units' headerText='Total Units'  textAlign='Right' type='number' Width=130></e-column>
                   <e-column field='unitPrice' headerText='Unit Price($)' format='C2' textAlign='Right' type='number' width=110 ></e-column>
                   <e-column field='price' headerText='Price($)' textAlign='Right' type='number' width=160 ></e-column>
        </e-columns>
        <e-aggregates >
        <e-aggregate >
            <e-columns>
                <e-column field="price" format='C2' type="Sum" customAggregate='customAggregateFn'>
                    <ng-template #footerTemplate let-data>Total: {{data.Sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = summaryData;
    }
}



