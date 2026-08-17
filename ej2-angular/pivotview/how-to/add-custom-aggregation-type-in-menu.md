---
layout: post
title: How to Add a Custom Aggregation in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to add a custom aggregation type to the menu in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

<!-- markdownlint-disable MD009 -->

# How to add a custom aggregation in Angular Pivot Table

The Angular Pivot Table component allows you to extend its functionality by adding custom aggregation types to the built-in aggregation menu. This enables you to implement specific calculation methods beyond the standard options like Sum, Average, Min, and Max.

## Adding custom aggregation types

You can use the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#databound) event to add your own custom aggregate types to the pivot table's aggregate menu. This event fires after the pivot table has been fully rendered, making it the perfect spot to modify the component's UI elements.

In the following example, we have added two custom aggregation types **CustomAggregateType 1** (which calculates a weighted average) and **CustomAggregateType 2** (which calculates the percentage of total) to the aggregate menu.

The calculation logic for these custom aggregation types is implemented using the [`aggregateCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#aggregatecellinfo) event. This event provides parameters including:
- [`fieldName`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#fieldname) - Holds the current cell's field name.
- [`row`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#row) - Holds the current cell's row value.
- [`column`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#column) - Holds the current cell's column value.
- [`value`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#value) - Holds the value of the current cell.
- [`cellSets`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#cellsets) - Holds raw data for the aggregated value cell.
- [`rowCellType`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#rowcelltype) - Holds the row cell type value.
- [`columnCellType`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#columncelltype) - Holds the column cell type value.
- [`aggregateType`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#aggregatetype) - Holds the aggregate type of the cell.
- [`skipFormatting`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/aggregateeventargs#skipformatting) - Boolean property that allows skipping formatting if applied.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs315/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs315/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs315" %}