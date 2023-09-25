

import { Component, OnInit } from '@angular/core';
import { summaryRowData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='240' [treeColumnIndex]='0'  childMapping='children' >
        <e-columns>
                   <e-column field='FreightID' headerText='Freight ID'  width=130></e-column>
                   <e-column field='FreightName' headerText='Freight Name'  width=195></e-column>
                   <e-column field='UnitWeight' headerText='Weight Per Unit' textAlign='Right' type='number' width=130></e-column>
                   <e-column field='TotalUnits' headerText='Total Units' textAlign='Right' type='number' width=125></e-column>
        </e-columns>
        <e-aggregates>
        <e-aggregate [showChildSummary]='true'>
            <e-columns>
                <e-column field="UnitWeight" type="Max">
                    <ng-template #footerTemplate let-data>Maximum: {{data.Max}}</ng-template>
                </e-column>
                <e-column field="TotalUnits" type="Min">
                    <ng-template #footerTemplate let-data>Minimum: {{data.Min}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = summaryRowData;
    }
}


