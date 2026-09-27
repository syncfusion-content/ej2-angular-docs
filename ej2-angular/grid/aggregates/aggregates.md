---
layout: post
title: Angular Grid Aggregates | Syncfusion
description: Learn how to use aggregates in Angular Data Grid to display column summaries, footer and group aggregates, and create custom aggregate calculations.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular Data Grid

The Aggregates feature in [Angular Data Grid](https://www.syncfusion.com/angular-components/angular-data-grid) provides built-in calculations such as sum, average, count, minimum, and maximum for specific columns. The results can be displayed in different sections of the grid.

- `Footer`: overall summary values for the entire grid.
- `Group Footer`: aggregate values for each group of records.
- `Group Caption`: summary information shown alongside the group title.

## Enable aggregates

The aggregate feature is enabled by injecting the `AggregateService` module to the providers array.

```ts
import { AggregateService } from '@syncfusion/ej2-angular-grids';

@Component({
  ...
  providers: [AggregateService]
})
export class AppComponent { }
```

Aggregates in the Angular Data Grid are linked to columns using a few key properties:

- `field`: Defines the field name of the column on which the aggregation is performed. The value must match the column’s data source field.
- `type`: Defines the type of aggregate calculation for the column. For example Sum, Average, Min, Max, or Count.
- `Templates`: Decide where the result is displayed in the grid in `footerTemplate`, `groupFooterTemplate`, `groupCaptionTemplate`.
- `format`: Applies formatting to numeric and date columns when displaying aggregate values.

**Directives for aggregate configuration:**

- `e-aggregates`: Root container for all aggregate definitions.
- `e-aggregate`: Defines one aggregate row (can contain multiple columns).
- `e-columns`: Wraps one or more aggregate column definitions.
- `e-column`: Defines a single aggregate for a specific field and type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='290px' [allowGrouping]='true' [allowPaging]='true' [groupSettings]='groupOptions'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120></e-column>
        <e-column field='Freight' format='C2' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field='Freight' type='Sum'>
                    <ng-template #groupFooterTemplate let-data>Sum: {{data.Sum}}</ng-template>
                </e-column>
                <e-column field='Freight' type='Max'>
                    <ng-template #groupCaptionTemplate let-data>Max: {{data.Max}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-cs1" %}

> * Aggregates can also be configured using the [aggregates](https://ej2.syncfusion.com/angular/documentation/api/grid#aggregates) property instead of the `e-aggregates` directive. For a complete aggregate configuration example, refer to the [Multiple aggregates for a column](#multiple-aggregates-for-a-column) section.

## Displaying aggregate values

By default, aggregate values are shown in the footer, group footer, and group caption cells. The display of aggregate values can be configured to appear in any one of these cells, or enabled in all, by using the following properties:

* [footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#footertemplate): Displays the aggregate value in the footer cell.
* [groupFooterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#groupfootertemplate): Displays the aggregate value in the group footer cell.
* [groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#groupcaptiontemplate): Displays the aggregate value in the group caption cell.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='290px' [allowGrouping]='true' [allowPaging]='true' [groupSettings]='groupOptions'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='OrderDate' headerText='Order Date' format='yMd' width=120></e-column>
        <e-column field='Freight' format='C2' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field='Freight' type='Sum'>
                    <ng-template #groupFooterTemplate let-data>Sum: {{data.Sum}}</ng-template>
                </e-column>
                <e-column field='Freight' type='max'>
                    <ng-template #groupCaptionTemplate let-data>Max: {{data.Max}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-cs1" %}

> * For local data, the aggregate values are calculated over the entire dataset currently loaded in the grid. Summary values reflect calculations across all grid rows.
> * With remote data and paging enabled, aggregate values in the footer are calculated based on records displayed in the current page. This means the summary reflects only the visible rows, not the entire dataset.

## Built-in aggregate types

The Angular Data Grid provides built-in aggregate types that can be specified using the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#type) property of an aggregate column. To apply multiple aggregate types to a column, specify the type property as an array of aggregate type strings.

- `Sum`: Calculates the total of all values in the column.
- `Average`: Calculates the mean of all values.
- `Min`: Returns the smallest value.
- `Max`: Returns the largest value.
- `Count`: Counts the total number of records.
- `TrueCount`: Counts the number of true values in the column.
- `FalseCount`: Counts the number of false values in the column.

The following example demonstrates using built-in aggregate types in the grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]="data" height="285px" [allowGrouping]="true" [groupSettings]="groupOptions">
    <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="OrderDate" headerText="Order Date" format="yMd" type="date" width="120"></e-column>
        <e-column field="ShippedDate" headerText="Shipped Date" format="yMd" type="date" width="120"></e-column>
        <e-column field="Freight" format="C2" width="150"></e-column>
        <e-column field="isVerified" headerText="Verified" width="150" type="boolean"></e-column>
        <e-column field="ShipCity" headerText="ShipCity" width="150"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column field="Freight" type="Max">
                    <ng-template #footerTemplate let-data>Max: {{ data.Max }}</ng-template>
                </e-column>
                <e-column field="ShippedDate" type="Max">
                    <ng-template #footerTemplate let-data>Max: {{ data.Max | date: 'dd/MM/yyyy' }}</ng-template>
                </e-column>
                <e-column field="OrderDate" type="Min">
                    <ng-template #footerTemplate let-data>Min: {{ data.Min | date: 'dd/MM/yyyy' }}</ng-template>
                </e-column>
                <e-column field="isVerified" type="truecount">
                    <ng-template #footerTemplate let-data>TrueCount: {{ data.TrueCount }}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-cs2" %}

## Multiple aggregates for a column

A Data Grid column can display multiple aggregate values simultaneously, providing a more detailed summary of the underlying data. By configuring multiple aggregate functions for the same column, different metrics such as sum, average, count, minimum, maximum, and custom aggregate values can be calculated and displayed together. This helps present key insights in a single view, making it easier to analyze and compare data without additional calculations or columns.

By specifying the aggregate [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregatecolumndirective#type) as an array, which allows multiple values to be shown together in a single summary row.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-cs3/src/app.template.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-cs3" %}

## See also
- [Custom aggregates](./custom-aggregate)
- [Reactive aggregates](./reactive-aggregate)
- [Group and caption aggregates](./group-and-caption-aggregate)
- [Aggregates API](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregatecolumn)
