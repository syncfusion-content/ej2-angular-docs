---
layout: post
title: Angular Grid - Aggregates | Syncfusion
description: Angular Grid provides column aggregate functions, footer and group summaries, custom aggregate calculations, and formatting options.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular Grid Component

The Aggregates feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid provides built-in calculations such as sum, average, count, minimum, and maximum for specific columns. The results can be displayed in different sections of the grid.

- `Footer`: overall summary values for the entire grid.
- `Group Footer`: aggregate values for each group of records.
- `Group Caption`: summary information shown alongside the group title.

The aggregate feature is enabled by injecting the `AggregateService` module to the providers array.

Aggregates in the Angular Grid are linked to columns using a few key properties:

- `field`: Defines the field name of the column on which the aggregation is performed. The value must match the column’s data source field.
- `type`: Defines the type of aggregate calculation for the column.for example Sum, Average, Min, Max, or Count.
- `Templates`: Decide where the result is displayed in the grid in `footerTemplate`, `groupFooterTemplate`, `groupCaptionTemplate`.
- `format`: Applies formatting to numeric and date columns when displaying aggregate values.

**Directives for aggregate configuration:**

- `e-aggregates`: Root container for all aggregate definitions.
- `e-aggregate`: Defines one aggregate row (can contain multiple columns).
- `e-columns`: Wraps one or more aggregate column definitions.
- `e-column`: Defines a single aggregate for a specific field and type.

Aggregates can also be integrated using the [aggregates](https://ej2.syncfusion.com/angular/documentation/api/grid#aggregates) property of the grid instead of using directives. For example:

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
                <e-column field='Freight' type='sum'>
                    <ng-template #groupFooterTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
                <e-column field='Freight' type='max'>
                    <ng-template #groupCaptionTemplate let-data>Max: {{data.max}}</ng-template>
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


**Displaying aggregate values**

By default, aggregate values are shown in the footer, group footer, and group caption cells of the grid. Control where the aggregate value is displayed using these properties:

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
                <e-column field='Freight' type='sum'>
                    <ng-template #groupFooterTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
                <e-column field='Freight' type='max'>
                    <ng-template #groupCaptionTemplate let-data>Max: {{data.max}}</ng-template>
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

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component provides built-in aggregate types, specified in the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#type) property of an aggregate column. Multiple aggregate types can be used by providing an array of aggregate type strings.

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
                <e-column field="Freight" type="max">
                    <ng-template #footerTemplate let-data>Max: {{ data.max }}</ng-template>
                </e-column>
                <e-column field="ShippedDate" type="max">
                    <ng-template #footerTemplate let-data>Max: {{ data.max | date: 'dd/MM/yyyy' }}</ng-template>
                </e-column>
                <e-column field="OrderDate" type="min">
                    <ng-template #footerTemplate let-data>Min: {{ data.min | date: 'dd/MM/yyyy' }}</ng-template>
                </e-column>
                <e-column field="isVerified" type="truecount">
                    <ng-template #footerTemplate let-data>TrueCount: {{ data.truecount }}</ng-template>
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

A grid column typically supports a single aggregate function such as Sum, Average, or Count, which produces one summary value for the entire column. In cases where different summary values are required at the same time, multiple aggregates can be configured. This feature makes it possible to calculate and display several values such as Sum, Average, Minimum, Maximum, or custom calculations concurrently for a specific column.

By specifying the aggregate [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregatecolumndirective#type) as an array, which allows multiple values to be shown together in a single summary row. For example:

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
