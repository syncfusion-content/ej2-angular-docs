---
layout: post
title: Column reorder in Angular Treegrid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column reorder 
documentation: ug
domainurl: ##DomainURL##
---

# Column reorder in Angular Treegrid component

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowreordering) to true.

To use reordering, inject the [`Reorder`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#reordermodule) module in the treegrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs6/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs6/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs6/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs6" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#reordermodule) to false.

## Reorder single column

The tree grid have an option to reorder Columns either by interaction or by using the [reorderColumns](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#reordercolumns) method. In the following sample, the **duration** column is reordered to the last column position by using the method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs7" %}

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#reordercolumns) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs8" %}

## Reorder events

During the reorder action, the tree grid component triggers the following three events:

1. The [columnDragStart](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndragstart) event triggers when the column header element drag (move) starts.
2. The [columnDrag](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndrag) event triggers when the column header element is dragged (moved) continuously.
3. The [columnDrop](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#columndrop) event triggers when a column header element is dropped on the target column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/reorder-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/reorder-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/reorder-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/reorder-cs1" %}

## Lock columns

Lock columns by using the [column.lockColumn](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#lockcolumn) property. The locked columns will be moved to the first position. Also, you can’t reorder its position.

In the below example, duration column is locked and its reordering functionality is disabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs9" %}