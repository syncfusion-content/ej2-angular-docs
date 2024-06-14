---
layout: post
title: Aggregates in Angular TreeGrid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion Angular TreeGrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular TreeGrid component

The Aggregates feature in the Angular TreeGrid component allows you to display aggregate values in the footer, and in parent row footer for child row aggregate values of the tree grid. With this feature, you can easily perform calculations on specific columns and show summary information. This feature can be configured using the **e-aggregates** directive. To represent an aggregate column, you need to specify the minimum required properties, such as [field](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#field) and [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#type).

To use aggregate feature, you need to inject the **AggregateService** module into the **@NgModule.providers** section.

**Displaying aggregate values**

By default, the aggregate values are displayed in the footer, and in parent row footer for child rows of the tree grid. However, you can define a custom template to format the aggregate value as per your requirements using [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumn/#footertemplate) property.

You can also check this video to learn about how to use Aggregates in Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=1dwChk61zsk" %}

<div style='margin-top:3px;height:15px'></div>
The following example demonstrates how to use aggregates in the tree grid:

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
{% include code-snippet/treegrid/aggregate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs1" %}

> * When using local data, the total summary is calculated based on the entire dataset available in the tree grid. The aggregate values will reflect calculations across all the rows in the tree grid.
> * When working with remote data, the total summary is calculated based on the current page records. This means that if you have enabled pagination and are displaying data in pages, the aggregate values in the footer will represent calculations only for the visible page.

## Built-in aggregate types

The TreeGrid component provides several built-in aggregate types that can be specified in the [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#type) property to configure an aggregate column.

The available built-in aggregate types are:

* **Sum:** Calculates the sum of the values in the column.
* **Average:** Calculates the average of the values in the column.
* **Min:** Finds the minimum value in the column.
* **Max:** Finds the maximum value in the column.
* **Count:** Counts the number of values in the column.
* **TrueCount:** Counts the number of true values in the column.
* **FalseCount:** Counts the number of false values in the column.

Here is an example demonstrating how to use built-in aggregate types in the tree grid:

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
{% include code-snippet/treegrid/aggregate-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs2" %}

## Format the aggregate value

To format the aggregate value result in the TreeGrid component, you can use the [format](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#format) property of the [AggregateColumnDirective](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/). The `format` property allows you to specify a format string that determines how the aggregate value will be displayed.

Refer to the number formatting list [here](https://ej2.syncfusion.com/angular/documentation/treegrid/columns/columns#number-formatting).

Here is an example demonstrating how to format the aggregate value in the tree grid:

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
                                <e-column field="UnitWeight" type="Max" format="N0">
                                    <ng-template #footerTemplate let-data>Maximum: {{data.Max}}</ng-template>
                                </e-column>
                                <e-column field="TotalUnits" type="Min" format="N0">
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
{% include code-snippet/treegrid/aggregate-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs6" %}

## Multiple aggregates for a column

Multiple aggregates for a column allows you to calculate and display different summary values simultaneously for a single column in a tree grid. Normally, a column is associated with a single aggregate function, such as sum, average, count and etc., which provides a single summary value for the entire column.

However, in scenarios where you need to display multiple summary values for the same column, multiple aggregates come into play. This feature enables you to calculate and display various aggregate values, such as sum, average, minimum, maximum, or custom calculations, concurrently for a specific column.

You can use multiple aggregates for a single column in the tree grid by specifying the aggregate's [type](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnDirective/#type) property.

Here's an example demonstrating how to use multiple aggregates for a column in the tree grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule,TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'
import { AggregateService  } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { summaryRowData } from './datasource';

@Component({
    imports: [TreeGridModule],

    providers: [AggregateService ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='240' [treeColumnIndex]='0' [aggregates]="aggregates" childMapping='children' >
                    <e-columns>
                        <e-column field='FreightID' headerText='Freight ID'  width=130></e-column>
                        <e-column field='FreightName' headerText='Freight Name'  width=195></e-column>
                        <e-column field='UnitWeight' headerText='Weight Per Unit' textAlign='Right'  width=130></e-column>
                        <e-column field='TotalUnits' headerText='Total Units' textAlign='Right' type='number' width=125></e-column>
                    </e-columns>
                   
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid:TreeGridComponent | undefined;
 
    public aggregates =[
        {
          columns: [
            {
              type: 'Sum',
              field: 'UnitWeight',
              columnName: 'UnitWeight',
               format: 'C2',
              footerTemplate: 'Sum: ${Sum}',
            },
          ],
        },
        {
            columns: [
              {
                type: 'Min',
                field: 'UnitWeight',
                columnName: 'UnitWeight',
                 format: 'C2',
                footerTemplate: 'Min:${Min}',
              },
            ],
          },
          {
            columns: [
              {
                type: 'Max',
                field: 'UnitWeight',
                columnName: 'UnitWeight',
                 format: 'C2',
                footerTemplate: 'Max:${Max}',
              },
            ],
          }
    ]
      ;
    
  
    ngOnInit(): void {
        this.data = summaryRowData;
    }
}
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs3" %}

## See also
