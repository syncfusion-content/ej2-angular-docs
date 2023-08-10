---
layout: post
title: Grouping in Angular Grid component | Syncfusion
description: Learn here all about Grouping in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Grouping 
documentation: ug
domainurl: ##DomainURL##
---

# Grouping in Angular Grid component

The Grid has options to group records by dragging and dropping the column header to the group drop area. When grouping is applied, grid records are organized into a hierarchical structure to facilitate easier expansion and collapse of records.

To enable Grouping in the grid, set the [`allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/grid/#allowgrouping) to true. Grouping options can be configured in [`groupSettings`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings).

To use Grouping, you need to inject **GroupService** in the provider section of **AppModule**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs2/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs2/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs2/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs2" %}

> * You can group and ungroup columns by using the [`groupColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#groupcolumn) and [`ungroupColumn`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#ungroupcolumn) methods.
> * To disable grouping for a particular column, set the [`columns.allowGrouping`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#allowgrouping) to false.

## Initial group

To apply group at initial rendering, set the column field name in the `groupSettings.columns`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs3/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs3/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs3/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs3" %}

## Hide drop area

To avoid ungrouping or further grouping of a column after initial column grouping, define the [`groupSettings.showDropArea`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#showdroparea) as false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs4" %}

## Group with paging

On grouping columns with paging feature, the aggregated information and total items are displayed based on the current page. The grid does not consider aggregated information and total items from other pages. To get additional details (aggregated information and total items) from other pages, set the [`groupSettings.disablePageWiseAggregates`](https://ej2.syncfusion.com/angular/documentation/api/grid/groupSettings#disablePageWiseAggregates) to false.

> If remote data is bound to grid dataSource, two requests will be sent when performing grouping action;
one for getting the grouped data and another for getting aggregate details and total items count.

## Group by format

By default, columns will be grouped by the data or value present for the particular row. To group numeric or datetime column based on the mentioned format, you have to enable the [`enableGroupByFormat`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#enablegroupbyformat) property of the corresponding grid columns.
or datetime column based on the mentioned format, you have to enable the [`enableGroupByFormat`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#enablegroupbyformat) property of the corresponding grid columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs5" %}

## Grouping Events

During the group action, the grid component triggers two events. The [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event triggers before the group action starts and the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event triggers after the group action is completed. Using these events you can perform any action. [`actionBegin`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event triggers before the group action starts and the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event triggers after the group action is completed. Using these events you can perform any action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs6" %}

> [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) is current action name. For example in grouping, the [`args.requestType`](https://ej2.syncfusion.com/angular/documentation/api/grid/sortEventArgs/#requesttype) value is 'grouping'.

## Collapse by external button

To collapse the selected grouped row from an external button by using the [`expandCollapse`](https://ej2.syncfusion.com/angular/documentation/api/grid/group/#expandcollapserows) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/grouping1-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/grouping1-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/grouping1-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/grouping1-cs7" %}

## Sort grouped columns in descending order during initial grouping

By default, grouped columns are sorted in ascending order. To sort grouped columns in descending order during initial grouping, you can set the [field](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#field) and [direction](https://ej2.syncfusion.com/angular/documentation/api/grid/sortDescriptorModel/#direction-string) in the `sortSettings.columns` property.

The `CustomerID` column will be sorted in descending order when the grid is initially grouped, as shown in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/sort-group/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/sort-group/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/sort-group/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/grid/sort-group" %}

## See Also

* [Exporting grouped records](../excel-export/excel-export-options/#exporting-grouped-records)
* [How to enable lazy load grouping in Grid](https://www.syncfusion.com/blogs/post/how-to-enable-lazy-load-grouping-in-syncfusion-angular-data-grid.aspx)
* [How can I do client side grouping by async pipe in Angular Grid](https://www.syncfusion.com/forums/148079/how-can-i-do-client-side-grouping-by-async-pipe-in-angular-grid)
* [How to perform initial grouping by using the async pipe in Angular Grid](https://www.syncfusion.com/forums/160032/how-to-perform-initial-grouping-by-using-the-async-pipe-in-angular-grid)