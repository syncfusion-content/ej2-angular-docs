

import { Component, OnInit } from '@angular/core';
import { summaryData } from './datasource';
import { getObject, CustomSummaryType } from '@syncfusion/ej2-grids';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='245' [treeColumnIndex]='0'  childMapping='subtasks' >
        <e-columns>
                   <e-column field='category' headerText='Category'  width=240></e-column>
                   <e-column field='units' headerText='Total Units'  textAlign='Right' type='number' Width=130></e-column>
                   <e-column field='unitPrice' headerText='Unit Price($)' format='C2' textAlign='Right' type='number' width=110 ></e-column>
                   <e-column field='price' headerText='Price($)' textAlign='Right' type='number' width=160 ></e-column>
        </e-columns>
        <e-aggregates >
        <e-aggregate [showChildSummary]='false' >
            <e-columns>
                <e-column field="price" format='C2' type="Custom" [customAggregate]='customAggregateFn' columnName='category' >
                    <ng-template #footerTemplate let-data>Count of Frozen seafood : {{data.Custom}}</ng-template>
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
    customAggregateFn (data: Object): number {
        let sampleData: Object[] = getObject('result', data);
        let countLength: number; countLength = 0;
        sampleData.filter((item: Object) => {
            let data: string = getObject('category', item);
            if (data === 'Frozen seafood') {
                countLength++;
            }
        });
        return countLength;
    };
}



