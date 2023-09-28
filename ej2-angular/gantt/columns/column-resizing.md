---
layout: post
title: Column resizing in Angular Gantt component | Syncfusion
description: Learn here all about Column resizing in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column resizing 
documentation: ug
domainurl: ##DomainURL##
---

# Column resizing in Angular Gantt component

The column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To resize the column, set the [`columns.allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowresizing) property to `true`. The following code example shows how to enable the column resize feature in the Gantt component.

To resize the column, inject the `ResizeService` in the provider section of `AppModule`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/resize-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/resize-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/resize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/resize-cs1" %}

> You can disable resizing for a particular column by setting the [`columns.allowResizing`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#allowresizing) to `false`.

## Defining minimum and maximum column width

The column resizing can be restricted between minimum and maximum widths by defining the [`columns->minWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#minwidth) and [`columns->maxWidth`](https://ej2.syncfusion.com/angular/documentation/api/gantt/column/#maxwidth) properties.

In the following example, the minimum and maximum widths are defined for the `Duration`, and `Task Name` columns.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/min-max-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/min-max-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/min-max-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/min-max-cs1" %}