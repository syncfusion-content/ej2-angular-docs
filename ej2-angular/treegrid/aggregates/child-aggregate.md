---
layout: post
title: Child aggregate in Angular TreeGrid component | Syncfusion
description: Learn here all about Child aggregate in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Child aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Child aggregate in Angular TreeGrid component

The child aggregate feature in the TreeGrid component allows you to display aggregate values at each parent row footer for child row aggregate values. This feature can be configured using the **e-aggregate** directive with the [showChildSummary](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateRowModel/#showchildsummary) property of the tree grid.

Here is an example demonstrating how to use child aggregates in the tree grid:

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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs13" %}

## Display child aggregate for specific hierarchy level rows

You can display child aggregates for specific hierarchy level parent row footers in the TreeGrid component using the [rowDataBound](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) event. In this event, you can specify and display aggregate values for specific hierarchy levels.

The following example demonstrates how to display first-level aggregate values instead of showing all hierarchy level aggregates in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
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

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs14" %}

