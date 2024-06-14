import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryRowData } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
    imports: [TreeGridModule],

    providers: [AggregateService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='240' [treeColumnIndex]='0'  childMapping='children' >
                    <e-columns>
                        <e-column field='FreightID' headerText='Freight ID'  width=130></e-column>
                        <e-column field='FreightName' headerText='Freight Name'  width=195></e-column>
                        <e-column field="isOrder" headerText="Order" width="150" type="boolean"></e-column>
                        <e-column field='UnitWeight' headerText='Weight Per Unit' textAlign='Right' type='number' width=130></e-column>
                        <e-column field='TotalUnits' headerText='Total Units' textAlign='Right' type='number' width=125></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate [showChildSummary]='false'>
                            <e-columns>
                                <e-column field="UnitWeight" format='C2' type="Custom" [customAggregate]='customAggregateFn' columnName='UnitWeight'>
                                    <ng-template #footerTemplate let-data>Parent's UnitWeight total: {{data.Custom}}</ng-template>
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
    customAggregateFn(data: Object): number {

        let sampleData: Object[] = (data as any)['result'];
    
        let total: number;
    
        total = 0;
    
        sampleData.filter((item: Object) => {
    
          let value: number = parseInt((item as any)['UnitWeight']);
    
          if (isNullOrUndefined((item as any)['parentItem'])) {
    
            total = total + value;
    
          }
    
        });
    
        return total;
    
      }
}



