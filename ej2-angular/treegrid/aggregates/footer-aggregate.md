---
layout: post
title: Footer aggregate in Angular TreeGrid component | Syncfusion
description: Learn here all about Footer aggregate in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Footer aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Footer aggregate in Angular TreeGrid component

The Syncfusion TreeGrid component allows you to calculate and display aggregate values in the footer cells. The footer aggregate value is calculated from all the rows in the tree grid. You can use the [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#footertemplate) property to render the aggregate value in the footer cells.

Here's an example demonstrating how to use footer aggregates in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryRowData } from './datasource';

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
                        <e-aggregate [showChildSummary]='true'>
                            <e-columns>
                                <e-column field="UnitWeight" type="Max">
                                    <ng-template #footerTemplate let-data>Maximum: {{data.Max}}</ng-template>
                                </e-column>
                                <e-column field="TotalUnits" type="Min">
                                    <ng-template #footerTemplate let-data>Minimum: {{data.Min}}</ng-template>
                                </e-column>
                                <e-column field="isOrder" type="truecount">
                                    <ng-template #footerTemplate let-data>TrueCount: {{data.truecount}} </ng-template>
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

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs5" %}

> * Use the template reference variable name **#footerTemplate** to specify the footer template.
> * Inside the template, access the aggregate values using their corresponding [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) name. For example, to access the sum aggregate value, use **data.sum**.

## Position footer aggregates at the top of the Grid

By default, the aggregated values are placed at the bottom of the footer section. It is possible to place the aggregated values at the top of the header. This is achieved by using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/grid/#databound) event, [getHeaderContent](https://ej2.syncfusion.com/angular/documentation/api/grid/#getheadercontent), and [getFooterContent](https://ej2.syncfusion.com/angular/documentation/api/grid/#getfootercontent) methods of the Grid.

Here is an example demonstrating how footer content is appended to the header content using the `dataBound` event of the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs7" %}

## Display aggregates only for parent rows

You can show the aggregates of parent row only using custom aggregate feature of the tree grid. By using this feature, you can calculate the parent row's grand total value under specific conditions.

To learn more about custom aggregates, you can refer to the custom aggregates section [here](https://ej2.syncfusion.com/angular/documentation/treegrid/aggregates/custom-aggregate)

Here is an example demonstrating how aggregates are calculated for the parent rows and displayed in the footer content of the tree grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs8" %}