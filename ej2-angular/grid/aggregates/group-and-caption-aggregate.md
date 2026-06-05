---
layout: post
title: Angular Grid - Group and Caption Aggregate | Syncfusion
description: Angular Grid group and caption aggregate covers computing aggregates for groups, displaying captions, and customizing group summaries and formats.
platform: ej2-angular
control: Group and caption aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Group and Caption Aggregate in Angular Grid Component

Group footer and caption aggregates display summary values calculated from the records within each group.

To configure this in the grid, use the following properties on the `AggregateColumnDirective`:

- [groupFooterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#groupfootertemplate): Display aggregate values in the group footer section.
- [groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#groupcaptiontemplate): Renders aggregate values in the group caption section.

> * Set [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowgrouping) to `true` in the grid to enable column grouping.
> * Set [showGroupedColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#showgroupedcolumn) to `true` in `groupSettings` to display grouped columns in the grid.

## Group footer aggregates

Group footer aggregates appear in the footer row of each group and display summary values calculated from that group's records. To render values in the group footer, use the `groupFooterTemplate` property in the `AggregateColumnDirective`.

The following example displays the sum of the "Freight" field in the footer of each group using the Angular Data Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='290px' [allowGrouping]="true" [groupSettings]="groupOptions">
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
                <e-column field="Freight" type="sum">
                    <ng-template #groupFooterTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-group-cs1" %}

> Inside the template, access each aggregate value using its [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#type) name. For example, use `data.sum` to access the sum aggregate and `data.max` to access the maximum aggregate.

## Group caption aggregates

Group caption aggregates are displayed in the caption cells at the top of each group, providing a quick summary of the grouped data. To render these aggregates, use the [groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn#groupcaptiontemplate) property, which allows to display aggregate values in the group caption cells.

The following example displays the max of the "Freight" field in the each group caption cell using the Angular Data Grid:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='290px' [allowGrouping]="true" [groupSettings]="groupOptions">
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
                <e-column field="Freight" type="max">
                    <ng-template #groupCaptionTemplate let-data>Max: {{data.max}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-group-cs2" %}

> By default, the group total summary is calculated for the current page records within each group. Set [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#disablepagewiseaggregates) to `true` to calculate aggregates using all records in the grouped dataset.

## Disable page wise aggregates for grouping

In some cases, disabling the page-wise aggregates for grouping is necessary. By default, when grouping is enables with pagination, the Angular Data Grid calculates group aggregates only for the current page.

To calculate aggregates across the entire grouped data, set the [groupSettings.disablePageWiseAggregates](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#disablepagewiseaggregates) property to `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% raw %}
<ejs-grid [dataSource]='data' height='255px' [allowPaging]="true" [allowGrouping]="true" [groupSettings]="groupOptions" [pageSettings]="pageOptions">
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
                <e-column field="Freight" type="sum">
                    <ng-template #groupFooterTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
                <e-column field="Freight" type="max">
                    <ng-template #groupCaptionTemplate let-data>Max: {{data.max}}</ng-template>
                </e-column>
                <e-column field="Freight" type="sum">
                    <ng-template #footerTemplate let-data>Sum: {{data.sum}}</ng-template>
                </e-column>
            </e-columns>
        </e-aggregate>
    </e-aggregates>
</ejs-grid>
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-group-cs3" %}

## See also

- [Aggregates overview](./aggregates)
- [Footer aggregates](./footer-aggregate)
- [Custom aggregates](./custom-aggregate)
- [Reactive aggregates](./reactive-aggregate)
- [How to format aggregate value in Angular grid](./footer-aggregate#format-aggregate-value)
- [Aggregates API](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumn)