---
layout: post
title: Group and caption aggregate in Angular Grid component | Syncfusion
description: Learn here all about Group and caption aggregate in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Group and caption aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Group and caption aggregate in Angular Grid component

Group footer and caption aggregates in the Syncfusion Angular Grid component allow you to calculate aggregate values based on the current group items. These aggregate values can be displayed in the group footer cells and group caption cells, respectively. To achieve this, you can use the [groupFooterTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#groupfootertemplate) and [groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#groupcaptiontemplate) properties of the [AggregateColumnDirective](https://helpej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective).

> When working with group aggregates in Syncfusion Grid, it is important to set the property [allowGrouping](https://helpej2.syncfusion.com/angular/documentation/api/grid/column/#allowgrouping) of the [column](https://helpej2.syncfusion.com/angular/documentation/api/grid/column) to **true**. 
> To maintain grouped columns in the grid after grouping, set [showGroupedColumn](https://helpej2.syncfusion.com/angular/documentation/api/grid/groupSettings/#showgroupedcolumn) to **true**.

## Group footer aggregates

Group footer aggregates are displayed in the footer cells of each group. These cells appear at the bottom of each group and provide aggregate values based on the grouped data. To display group footer aggregates, you need to provide a template using the `groupFooterTemplate` property. The template will be used to render the aggregate values in the group footer cells.

Here's an example that demonstrates how to use group footer aggregates in the Syncfusion Angular Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-group-cs1" %}

> * Use the template reference variable name as **#groupFooterTemplate** to specify the group footer template and as **#groupCaptionTemplate** to specify the group caption template.
> * The aggregate values must be accessed inside the template using their corresponding [type](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#type) name.

## Group caption aggregates

Group caption aggregates are displayed in the caption cells of each group. These cells appear at the top of each group and provide a summary of the grouped data. To display group caption aggregates, you can use the [groupCaptionTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid/aggregateColumnDirective/#groupcaptiontemplate) property. This property allows you to define a template that will be used to display the aggregate values in the group caption cells.

Here's an example that demonstrates how to use group and caption aggregates in the Syncfusion Angular Grid component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-group-cs2/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-group-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-group-cs2" %}

> The group total summary in Syncfusion Grid is calculated based on the current page records for each group by default.
> If you require aggregates for all the data in the grid, you can enable the [disablePageWiseAggregates](https://helpej2.syncfusion.com/documentation/api/grid/groupSettings/#disablepagewiseaggregates) property.

## Disable page wise aggregates for grouping

In some cases, you may want to disable the page-wise aggregates for grouping in the Syncfusion Angular Grid component. By default, when grouping is enabled with paging, the grid calculates the aggregates for each page separately. However, you can choose to disable this behavior and calculate aggregates for the entire grouped data instead. This can be achieved by setting the [disablePageWiseAggregates](https://helpej2.syncfusion.com/documentation/api/grid/groupSettings/#disablepagewiseaggregates) property to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/aggregates-group-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.template.html" %}
{% include code-snippet/grid/aggregates-group-cs3/app/app.template.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/aggregates-group-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/aggregates-group-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/aggregates-group-cs3" %}

## See Also

* [How to format aggregate value in angular grid](footer-aggregate.md#format-the-aggregate-value)

