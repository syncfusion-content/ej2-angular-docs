---
layout: post
title: Column resizing in Angular Treegrid component | Syncfusion
description: Learn here all about Column resizing in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column resizing 
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in Angular Treegrid component

Column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the respective column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To enable column resize, set the [`allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#allowresizing) property to true.

To use the column resize, inject `Resize` module in the treegrid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs10/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs10/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs10/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs10" %}

> * You can disable resizing for a particular column by setting the [`columns.allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#allowresizing) to false.
> * In RTL mode, you can click and drag the left edge of the header cell to resize the column.

## Min and max width

Column resize can be restricted between minimum and maximum width by defining the [`columns->minWidth`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#minwidth) and [`columns->maxWidth`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/column/#maxwidth).

In the following sample, minimum and maximum width are defined for `Duration`, and `Task Name` columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs11/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs11/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs11/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs11" %}

## Resize stacked column

Stacked columns can be resized by clicking and dragging the right edge of the stacked column header. While dragging, the width of the respective child columns will be resized at the same time. You can disable resize for particular stacked column by setting `allowResizing` as `false` to its columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/columns-cs12/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/columns-cs12/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/columns-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/columns-cs12" %}

## Touch interaction

When the right edge of the header cell is tapped, a floating handler will be visible over the right border of the column. To resize the column, tap and drag the floating handler as needed.

The following screenshot represents the column resizing in touch device.

<!-- markdownlint-disable MD033 -->
<img src="https://ej2.syncfusion.com/angular/documentation/treegrid/images/column-resizing.png" alt="Touch interaction image" style="width:320px;height: 620px">
<!-- markdownlint-enable MD033 -->

## Resizing events

During the resizing action, the tree grid component triggers the following three events:

1. The [resizeStart](../../api/treegrid/#resizestart) event triggers when the column resize starts.
2. The [resizing](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#resizing) event triggers when the column header element is dragged (resized) continuously..
3. The [resizeStop](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#resizestop) event triggers when the column resize ends.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/treegrid/resize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/treegrid/resize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/treegrid/resize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/treegrid/resize-cs1" %}