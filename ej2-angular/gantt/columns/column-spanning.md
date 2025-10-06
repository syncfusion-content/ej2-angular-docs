---
layout: post
title: Column spanning in Angular Gantt component | Syncfusion
description: Learn here all about Column spanning in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Column spanning 
documentation: ug
domainurl: ##DomainURL##
---

# Column spanning in Angular Gantt component

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Gantt component allows merging adjacent cells horizontally to create a structured layout. To enable spanning, set the [colSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#colspan) property within the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querycellinfo) event to define the span and customize the cell appearance.

In this example, **Work** cells are spanned to improve visual clarity.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnspan-cs1" %}

## Change the border color while column spanning

You can customize the border color of spanned cells using the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/gantt/events#querycellinfo) event, which triggers before the cell is rendered in the Gantt. This allows styling adjustments to be applied during cell creation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs2/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/columns/columntype-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnspan-cs2" %}

## Limitations

* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling