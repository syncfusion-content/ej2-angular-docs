---
layout: post
title: Sorting in Angular Gantt component | Syncfusion
description: Learn here all about Sorting in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Sorting 
documentation: ug
domainurl: ##DomainURL##
---

# Sorting in Angular Gantt component

Sorting enables you to sort data in the ascending or descending order. To sort a column, click the column header.

To sort multiple columns, press and hold the CTRL key and click the column header. You can clear sorting of any one of the multi-sorted columns by pressing and holding the SHIFT key and clicking the specific column header.

To enable sorting in the Gantt component, set the [`allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowsorting) property to `true`. Sorting options can be configured through the [`sortSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/sortSettings/) property.

To use sort, inject the [`SortService`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#sortmodule) in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/sorting/default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/sorting/default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/sorting/default-cs1" %}

> * Gantt columns are sorted in the ascending order. If you click the already sorted column, the sort direction toggles.
> * To disable sorting for a particular column, set the [`columns.allowSorting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowsorting) property to `false`.

## Sorting column on Gantt initialization

The Gantt component can be rendered with sorted columns initially, and this can be achieved by using the [`sortSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/sortSettings/) property. You can add columns that are sorted initially in the [`sortSettings.columns`](https://ej2.syncfusion.com/angular/documentation/api/gantt/sortSettings/#columns) collection defined with [`field`](https://ej2.syncfusion.com/angular/documentation/api/gantt/sortDescriptorModel/#field) and [`direction`](https://ej2.syncfusion.com/angular/documentation/api/gantt/sortDescriptorModel/#direction) properties. The following code example shows how to add the sorted column to Gantt initialization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/sorting/sort-initial-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/sorting/sort-initial-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/sorting/sort-initial-cs1" %}

## Sorting column dynamically

Columns in the Gantt component can be sorted dynamically using the [`sortColumn`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#sortcolumn) method. The following code example demonstrates how to invoke the [`sortColumn`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#sortcolumn) method by clicking the custom button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/sorting/sort-dynamic-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/sorting/sort-dynamic-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/sorting/sort-dynamic-cs1" %}

## Clear all the sorting dynamically

In the Gantt component, you can clear all the sorted columns and return to previous position using the [`clearSorting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#clearsorting) public method. The following code snippet shows how to clear all the sorted columns by clicking the custom button.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/sorting/clearsort-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/sorting/clearsort-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/sorting/clearsort-cs1" %}

## Sorting events

During the sort action, the Gantt component triggers two events. The [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actionbegin) event triggers before the sort action starts, and the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#actioncomplete) event triggers after the sort action is completed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/sorting/events-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/sorting/events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/sorting/events-cs1" %}

> The `args.requestType` is the current action name. For example, for sorting the `args.requestType`, value is **sorting**.

## Sorting Custom Columns

In Gantt, you can sort custom columns of different types like string, numeric, etc., By adding the custom column in the column collection, you can perform initial sort using the [`sortSettings`](https://ej2.syncfusion.com/angular/documentation/api/gantt/sortSettings/) or you can also sort the column dynamically by a button click.

The following code snippets explains how to achieve this.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/sorting/sort-custom-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/sorting/sort-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/sorting/sort-custom-cs1" %}

## Touch interaction

To perform `tap` action on a column header, trigger [`sorting`](sorting/#sorting) operation to the selected column. A popup is displayed for multi-column sorting. To sort multiple columns, tap the popup, and then tap the desired column headers.

The following screenshot shows Gantt touch sorting,

![Multiple Sorting](images/multiple-sorting.png)