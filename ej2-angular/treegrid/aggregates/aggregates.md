---
layout: post
title: Aggregates in Angular TreeGrid component | Syncfusion
description: Learn about configuring, displaying, and customizing aggregate values in the Syncfusion Angular TreeGrid component, including built-in and child aggregation options.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular TreeGrid component

Aggregate values are displayed in the TreeGrid footer as well as in the parent row footer for child row aggregate values. Aggregates are configured using the `aggregates` property. The [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#field) and [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) properties are required to define an aggregate column.

To use aggregate features in the TreeGrid, inject the `Aggregate` module.

By default, aggregate values appear in the TreeGrid footer and as child summary rows at the end of each parent's child rows. To display an aggregate value within a specific cell, use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#footertemplate) property.

You can also watch this video to learn how to use Aggregates in the Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=1dwChk61zsk" %}

## Built-in aggregate types

Specify the aggregate type in the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property to configure an aggregate column.

The available built-in aggregate types are:
* Sum
* Average
* Min
* Max
* Count
* Truecount – Counts the number of `true` values in a column
* Falsecount – Counts the number of `false` values in a column

> * You can use multiple aggregates for a single aggregate column by setting the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property to an array of aggregate types.
> * Using multiple types for a column is supported only when at least one aggregate template property (such as `footerTemplate`) is defined.

## Child aggregate

Aggregate values can be calculated for child rows and displayed in the parent row footer. Set the [`childSummary`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateRowModel/#showchildsummary) property to display child row aggregate values in their respective parent row. The `childSummary` property provides options for customizing how child aggregates appear within hierarchical data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs1" %}

> For more on TreeGrid's groundbreaking features, refer to the [`Angular TreeGrid feature tour`](https://www.syncfusion.com/angular-components/angular-tree-grid). For sample demonstrations, explore the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to see data presentation and manipulation in action.