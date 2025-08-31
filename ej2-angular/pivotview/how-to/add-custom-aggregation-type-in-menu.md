---
layout: post
title: Add custom aggregation type in Angular Pivotview | Syncfusion
description: Learn here all about how to add custom aggregation type to the menu in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Add custom aggregation type to the menu 
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# Add custom aggregation type to the menu in Angular Pivotview component

The Angular Pivotview component allows you to extend its functionality by adding custom aggregation types to the built-in aggregation menu. This feature enables you to implement specific calculation methods beyond the standard options like Sum, Average, Min, and Max.

## Adding custom aggregation types

By using the [dataBound](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#databound) event, you can add your own custom aggregate type(s) to the pivot table's aggregate menu. The dataBound event triggers after the pivot table is completely rendered, making it the ideal place to modify the component's UI elements.

In the following example, we have added two custom aggregation types **CustomAggregateType 1** (which calculates a weighted average) and **CustomAggregateType 2** (which calculates the percentage of total) to the aggregate menu. 

The calculation logic for these custom aggregation types is implemented using the [aggregateCellInfo](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#aggregatecellinfo) event. This event provides parameters including:
* `fieldName` - It holds current cell's field name.
* `row` - It holds current cell's row value.
* `column` - It holds current cell's column value.
* `value` - It holds value of current cell.
* `cellSets` - It holds raw data for the aggregated value cell.
* `rowCellType` - It holds row cell type value.
* `columnCellType` - It holds column cell type value.
* `aggregateType` - It holds aggregate type of the cell.
* `skipFormatting` - boolean property, it allows to skip formatting if applied.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs315/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs315/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs315" %}