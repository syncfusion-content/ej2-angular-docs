---
layout: post
title: Aggregates in Angular Grid component | Syncfusion
description: Explore how to configure and display aggregates in the Syncfusion Angular Grid, including footer, group footer, group caption summaries, built-in and multiple aggregates, and customization options.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular Grid component

The Aggregates feature in the Syncfusion Angular Grid component enables displaying summary values in the grid's footer, group footer, and group caption areas. Aggregates provide calculations on specific columns, making it easy to present totals, averages, and other summary information. Aggregates are configured using the **e-aggregates** directive. Each aggregate column definition must include the required properties such as [field](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#field) and [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#type).

To use the aggregate feature, inject the **AggregateService** module into the **@NgModule.providers** section.

**Displaying aggregate values**

By default, aggregate values are shown in the footer, group footer, and group caption cells of the grid. You can control where the aggregate value is displayed using these properties:

* **[footerTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#footertemplate):** Defines a template to display the aggregate value in the footer cell, supporting custom formatting.
* **[groupFooterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#groupfootertemplate):** Sets a template for the group footer cell, allowing custom presentation of the aggregate value in grouped rows.
* **[groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#groupcaptiontemplate):** Specifies a template for the group caption cell, where the aggregate value can be formatted as required.

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

>* For local data, the aggregate values are calculated over the entire dataset currently loaded in the grid. Summary values reflect calculations across all grid rows.
> * With remote data and paging enabled, aggregate values in the footer are calculated based on records displayed in the current page. This means the summary reflects only the visible rows, not the entire dataset.

## Built-in aggregate types

The Syncfusion Angular Grid component provides built-in aggregate types, specified in the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#type) property of an aggregate column. Multiple aggregate types can be used by providing an array of aggregate type strings.

Available built-in aggregate types include:

* **Sum:** Returns the total sum of all values in the column.
* **Average:** Calculates the average value in the column.
* **Min:** Returns the minimum value.
* **Max:** Returns the maximum value.
* **Count:** Provides the total count of values.
* **TrueCount:** Counts the number of `true` values.
* **FalseCount:** Counts the number of `false` values.

Below is an example illustrating usage of built-in aggregate types in the Syncfusion Grid:

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

## Multiple aggregates

Multiple aggregate types can be specified for a single column, allowing the Grid to calculate and display different summary values together for the same column. This is useful when you need to show several aggregates (such as sum, average, min, max, or custom calculations) for one field at the same time.

You can define multiple aggregates in the Syncfusion Angular Grid by providing an array to the aggregate [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#type) property in the column definition.

The following example demonstrates how to configure multiple aggregates for a column:

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

## See Also

* [Tooltip for aggregate footer in Angular Grid](https://www.syncfusion.com/forums/154190/tooltip-for-aggregate-footer-in-angular-grid)
* [How to export aggregate footer and apply outer border on excel data in Angular Grid](https://www.syncfusion.com/forums/151023/how-to-export-aggregate-footer-and-apply-outer-border-on-excel-data-in-angular-grid)