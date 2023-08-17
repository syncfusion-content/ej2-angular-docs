---
layout: post
title: Reactive aggregate in Angular Grid component | Syncfusion
description: Learn here all about Reactive aggregate in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Reactive aggregate 
documentation: ug
domainurl: ##DomainURL##
---

# Reactive aggregate in Angular Grid component

The Syncfusion Angular Grid component provides support for reactive aggregates, which allow you to update the aggregate values dynamically as the data changes. Reactive aggregates automatically recalculate their values when there are changes in the underlying data, providing real-time updates to the aggregate values in the grid.

## Auto update aggregate value in batch editing

When the grid is in batch editing mode, the aggregate values in the footer, group footer, and group caption are automatically refreshed every time a cell is saved. This ensures that the aggregate values accurately reflect the edited data.

Here's an example code snippet demonstrating how to auto update aggregate value in batch editing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reactive-aggregates-batchedit-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reactive-aggregates-batchedit-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-aggregates-batchedit-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/reactive-aggregates-batchedit-cs1" %}

> Adding a new record to the grouped grid will not refresh the aggregate values.

## Refresh aggregate values in inline editing

By default, reactive aggregate update is not supported by inline and dialog edit modes as it is not feasible to anticipate the value change event for every editor. But, you can refresh the aggregates manually in the inline edit mode using the refresh method of aggregate module.

In the following code, the input event for the Freight column editor has been registered and the aggregate value has been refreshed manually.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/reactive-aggregates-inlineedit-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/reactive-aggregates-inlineedit-cs1" %}