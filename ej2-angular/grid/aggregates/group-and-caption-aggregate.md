---
layout: post
title: Group and caption aggregate in Angular Grid component | Syncfusion
description: Learn how to display group footer and group caption aggregates in the Syncfusion Angular Grid with templates and pagination options.
platform: ej2-angular
control: Group and caption aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in Angular Grid component

Group footer and caption aggregates in the Syncfusion Angular Grid component provide calculated summary values based on group data. Aggregate values can be displayed either in the group footer cells (at the end of each group) or in group caption cells (at the beginning of each group). The [groupFooterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#groupfootertemplate) property renders values in group footers, while [groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#groupcaptiontemplate) renders values in group captions.

> For group aggregates, set [allowGrouping](https://ej2.syncfusion.com/angular/documentation/api/grid/column#allowgrouping) of the [column](https://ej2.syncfusion.com/angular/documentation/api/grid/column) to **true**. To keep grouped columns visible after grouping, set [showGroupedColumn](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#showgroupedcolumn) to **true**.

## Group footer aggregates

Group footer aggregates appear in footer cells below each group and display summary values for the group's items. Configure these aggregates by defining a template using the `groupFooterTemplate` property, which provides access to the calculated aggregate value for each group.

Example: Using group footer aggregates in Syncfusion Angular Grid:

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

> * Use **#groupFooterTemplate** as the template variable for group footer cells and **#groupCaptionTemplate** for group caption cells.
> * Access the aggregate value within a template using its corresponding [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#type) key, such as `data.sum` or `data.max`.

## Group caption aggregates

Group caption aggregates are shown in the caption row at the top of each group, summarizing group data before the group rows are listed. Use the [groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective#groupcaptiontemplate) property to define these summary displays.

Example: Configuring group and caption aggregates in Syncfusion Angular Grid:

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

> By default, group total summaries are calculated using only the current page data for each group. To display aggregates for all grouped data (not just the current page), enable the [disablePageWiseAggregates](https://ej2.syncfusion.com/documentation/api/grid/groupSettings#disablepagewiseaggregates) property in group settings.

## Disable page wise aggregates

When grouping is combined with paging, by default the Angular Grid calculates group aggregates separately for each page. To calculate aggregates for the entire grouped dataset instead, set [disablePageWiseAggregates](https://ej2.syncfusion.com/documentation/api/grid/groupSettings#disablepagewiseaggregates) to **true** within groupSettings. This allows both caption and footer aggregates to reflect the entire dataset regardless of paging.

Example: Disabling page wise aggregates in grouped Syncfusion Angular Grid:

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

* [How to format aggregate value in angular grid](footer-aggregate#format-the-aggregate-value)
