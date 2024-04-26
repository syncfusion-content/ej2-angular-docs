---
layout: post
title: Column reordering in Angular Gantt component | Syncfusion
description: Learn here all about Column reordering in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column reordering 
documentation: ug
domainurl: ##DomainURL##
---

# Column reordering in Angular Gantt component

The column reordering can be done by dragging a column header from one index to another index within the TreeGrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowreordering) property to `true`.

To reorder the columns, inject the `ReorderService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/reorder-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/reorder-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/reorder-cs1" %}

> You can disable the reordering of a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowreordering) property to `false`.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#reordercolumns) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/reordermultiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/reordermultiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/reordermultiple-cs1" %}

## Reorder Events

During the reorder action, the gantt component triggers the below three events.

1. The [`columnDragStart`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#columndrop) event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/reorder-events-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/reorder-events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/reorder-events-cs1" %}