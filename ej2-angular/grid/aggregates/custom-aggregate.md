---
layout: post
title: Angular Grid - Custom Aggregate | Syncfusion
description: Angular Grid custom aggregate enables defining custom aggregate functions, applying them to columns, and displaying computed summaries.
platform: ej2-angular
control: Custom aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Custom Aggregate in Angular Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid supports custom aggregate functions for scenarios where built-in options do not meet specific requirements. This allows for tailored logic to compute aggregate values.

To configure a custom aggregate, set the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#type) property to "Custom" in the `AggregateColumnDirective` and provide the custom aggregation logic using the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#customaggregate) property.

The custom aggregate function in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Grid component is executed differently based on the aggregation context:

- **Total Aggregation:** The function is executed with the entire dataset and the corresponding aggregate column object.

- **Group Aggregation:** The function is executed with the current group details and the aggregate column object.

The following example demonstrates implementing and using a custom aggregate function in the grid component:

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

## Displaying distinct value count in aggregate row

To display the count of distinct values in an aggregate row for a column, set the [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#type) to "Custom" and provide a custom function in the [customAggregate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#customaggregate) property that returns the number of unique values.

The following example demonstrates displaying the distinct count for the "Ship Country" column using a custom aggregate.

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

> To display the aggregate value of the current column in another column, use the [columnName](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#columnname) property. If the `columnName` property is not defined, the field name value will be assigned to the `columnName` property.

## See also
- [Aggregates overview](./aggregates)
- [Reactive aggregates](./reactive-aggregate)
- [Aggregates API](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregatecolumn)