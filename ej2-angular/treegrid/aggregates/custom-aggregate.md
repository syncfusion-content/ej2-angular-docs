---
layout: post
title: Custom aggregate in Angular TreeGrid component | Syncfusion
description: Learn here all about Custom aggregate in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in Angular TreeGrid component

The custom aggregate feature in the TreeGrid component allows you to calculate aggregate values using your own aggregate function. This feature can be useful in scenarios where the built-in aggregate functions do not meet your specific requirements. To use the custom aggregate option, follow the steps below:

* Set the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#type) property to **Custom** in the [e-aggregate -> e-column](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/).

* Provide your custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#CustomAggregate) property.

The custom aggregate function will be invoked differently for total aggregation:

**Total Aggregation:** The custom aggregate function will be called with the whole dataset and the current aggregate column object as arguments.

Here's an example demonstrating how to use the custom aggregate feature in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryData } from './datasource';
import { getObject, CustomSummaryType } from '@syncfusion/ej2-grids';
@Component({
    imports: [ TreeGridModule  ],
    providers: [AggregateService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='245' [treeColumnIndex]='0'  childMapping='subtasks' >
                    <e-columns>
                        <e-column field='category' headerText='Category'  width=240></e-column>
                        <e-column field='units' headerText='Total Units'  textAlign='Right' type='number' Width=130></e-column>
                        <e-column field='unitPrice' headerText='Unit Price($)' format='C2' textAlign='Right' type='number' width=110 ></e-column>
                        <e-column field='price' headerText='Price($)' textAlign='Right' type='number' width=160 ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate [showChildSummary]='false' >
                            <e-columns>
                                <e-column field="price" format='N0' type="Custom" [customAggregate]='customAggregateFn' columnName='category' >
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
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs9/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs9" %}

> To access the custom aggregate value inside template, use the key as **Custom**.

## Show the count of distinct values in aggregate row

You can calculate the count of distinct values in an aggregate row by using custom aggregate functions. By specifying the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#type) as **Custom** and providing a custom aggregate function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#CustomAggregate) property, you can achieve this behavior.

Here's an example demonstrating how to show the count of distinct values for the **Category** column using a custom aggregate.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryData } from './datasource';
import { DataUtil } from '@syncfusion/ej2-data';
import { getObject, CustomSummaryType } from '@syncfusion/ej2-grids';

@Component({
    imports: [ TreeGridModule  ],
    providers: [AggregateService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' height='245' [treeColumnIndex]='0'  childMapping='subtasks' >
                    <e-columns>
                        <e-column field='category' headerText='Category'  width=240></e-column>
                        <e-column field='units' headerText='Total Units'  textAlign='Right' type='number' Width=130></e-column>
                        <e-column field='unitPrice' headerText='Unit Price($)' format='C2' textAlign='Right' type='number' width=110 ></e-column>
                        <e-column field='price' headerText='Price($)' textAlign='Right' type='number' width=160 ></e-column>
                    </e-columns>
                    <e-aggregates>
                        <e-aggregate [showChildSummary]='false' >
                            <e-columns>
                                <e-column field="price" format='N0' type="Custom" [customAggregate]='customAggregateFn' columnName='category' >
                                    <ng-template #footerTemplate let-data>Distinct count : {{data.Custom}}</ng-template>
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
        const distinct = DataUtil.distinct(sampleData, 'category', true);
        return distinct.length;
    };
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs10" %}