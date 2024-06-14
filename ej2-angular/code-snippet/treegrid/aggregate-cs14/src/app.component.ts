import { NgModule,ViewChild, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryData } from './datasource';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { getObject } from '@syncfusion/ej2-grids';

@Component({
    imports: [TreeGridModule],

    providers: [AggregateService ],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    styles:[`.e-childsumrow {
                display: none;
            }`],
    template: `  <ejs-treegrid [dataSource]="data" (rowDataBound)="dataBound($event)"  [height]='250' [treeColumnIndex]="0" childMapping="subtasks" >
                    <e-columns>
                        <e-column field="category" width='200' headerText="Category"></e-column>
                        <e-column field="units" headerText="Total Units" type="number"></e-column>
                        <e-column field="unitPrice" headerText="Unit Price($)" format="C2" type="number"></e-column>
                        <e-column field="price" headerText="Price($)" type="number"></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate [showChildSummary]="true">
                            <e-columns>
                                <e-column field="units" type="Min" columnName="units">
                                    <ng-template #footerTemplate let-data>Min: {{data.Min}}</ng-template>
                                </e-column>
                            </e-columns>
                        </e-aggregate>
                    </e-aggregates>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public result: number = 0;

    ngOnInit(): void {
        this.data = summaryData;
    }
    dataBound(args:any){
        if (args.row.classList.contains('e-summaryrow') && args.data.level > 1) {

            args.row.classList.add('e-childsumrow');
      
          }
    }
    
}
