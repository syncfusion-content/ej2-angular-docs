---
layout: post
title: Aggregates in Angular Treegrid component | Syncfusion
description: Learn here all about Aggregates in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Aggregates 
documentation: ug
domainurl: ##DomainURL##
---

# Aggregates in Angular Treegrid component

Aggregate values are displayed in the TreeGrid footer and in parent row footer for child row aggregate values. It can be configured through `aggregates` property. [`field`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#field) and [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) are the minimum properties required to represent an aggregate column.

To use the aggregate feature, you have to inject the `Aggregate` module.

By default, the aggregate value can be displayed in the treegrid footer, and footer of child rows. To show the aggregate value in one of the cells, use the [`footerTemplate`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#footertemplate).

You can also check this video to learn about how to use Aggregates in Angular TreeGrid.

{% youtube "https://www.youtube.com/watch?v=1dwChk61zsk" %}

## Built-in aggregate types

The aggregate type should be specified in the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property to configure an aggregate column.

The built-in aggregates are,
* Sum
* Average
* Min
* Max
* Count
* Truecount
* Falsecount

> * Multiple aggregates can be used for an aggregate column by setting the [`type`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateColumnModel/#type) property with an array of aggregate types.
> * Multiple types for a column is supported only when one of the aggregate templates is used.

## Child aggregate

Aggregate value is calculated for child rows, and it is displayed in the parent row footer. Use the [`childSummary`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/aggregateRowModel/#showchildsummary) property to render the child rows aggregate value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/aggregate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/aggregate-cs1" %}

> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.