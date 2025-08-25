---
layout: post
title: Custom aggregate in Angular Grid component | Syncfusion
description: Learn how to implement and configure custom aggregates in the Syncfusion Angular Grid, including custom calculation logic and usage with templates and distinct value counts.
platform: ej2-angular
control: Custom aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Custom aggregate in Angular Grid component

The custom aggregate feature in the Syncfusion Angular Grid component enables calculation of summary values using user-defined functions. This is particularly useful when built-in aggregate types do not satisfy specific calculation requirements. To configure a custom aggregate, follow the steps below:

* Set the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property to **Custom** in the [e-aggregate -> e-column](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/).
* Provide a custom aggregate function using the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#CustomAggregate) property.

Custom aggregate functions are invoked differently for total and group aggregations:

**Total Aggregation:** The custom aggregate function receives the entire dataset and the current aggregate column object as arguments.

**Group Aggregation:** The custom aggregate function is called with the current group details and the aggregate column object as arguments.

The key **Custom** in any aggregate template binds to the return value of the custom aggregate function.

The following example demonstrates use of the custom aggregate feature in the Angular Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='268px'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='Freight' format='C2' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column columnName="ShipCountry" type="Custom" [customAggregate]="customAggregateFn">
                    <ng-template #footerTemplate let-data>Brazil Count: {{data.Custom}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-custom-cs1" %}

> In footer, group footer, or caption templates, the custom aggregate value is accessed using the key **Custom**.

## Counting distinct values using a custom aggregate

A custom aggregate function can be used to calculate the count of distinct values for a specified column. By setting the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) property to **Custom** and providing a suitable function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#CustomAggregate) property, distinct value counts can be displayed in aggregate rows.

The example below shows how to display the count of distinct values for the **ShipCountry** column using a custom aggregate function:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='268px'>
    <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='Freight' format='C2' width=150></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
    </e-columns>
    <e-aggregates>
        <e-aggregate>
            <e-columns>
                <e-column columnName="ShipCountry" type="Custom" [customAggregate]="customAggregateFn">
                    <ng-template #footerTemplate let-data>Distinct Count: {{data.Custom}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-custom-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-custom-cs2" %}

> The [columnName](https://ej2.syncfusion.com/documentation/api/grid/aggregateColumn/#columnname) property specifies the target column for displaying the aggregate value. If not defined, the field property value is used as the `columnName`.