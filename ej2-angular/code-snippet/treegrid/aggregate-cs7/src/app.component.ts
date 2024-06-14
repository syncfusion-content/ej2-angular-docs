import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryRowData } from './datasource';

@Component({
    imports: [TreeGridModule],

    providers: [AggregateService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='240' [treeColumnIndex]='0' (dataBound)="dataBound()"  childMapping='children' >
                    <e-columns>
                        <e-column field='FreightID' headerText='Freight ID'  width=130></e-column>
                        <e-column field='FreightName' headerText='Freight Name'  width=195></e-column>
                        <e-column field='UnitWeight' headerText='Weight Per Unit' textAlign='Right' type='number' width=130></e-column>
                        <e-column field='TotalUnits' headerText='Total Units' textAlign='Right' type='number' width=125></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate [showChildSummary]='true'>
                            <e-columns>
                                <e-column field="UnitWeight" type="Sum" format="N0">
                                    <ng-template #footerTemplate let-data>Sum: {{data.Sum}}</ng-template>
                                </e-column>
                               
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid:TreeGridComponent | undefined;

    ngOnInit(): void {
        this.data = summaryRowData;
    }
    dataBound() {
        (this.treegrid as TreeGridComponent).getHeaderContent().append((this.treegrid as TreeGridComponent).getFooterContent());
    }
}


