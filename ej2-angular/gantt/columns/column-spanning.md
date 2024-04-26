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

The column spanning feature in the Syncfusion Gantt chart allows you to merge adjacent cells horizontally, creating a visually appealing and informative layout. By defining the [colSpan](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#colspan) attribute in the [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs) event, you can easily span cells and customize the appearance of the gantt.

In the following demo, **Work**  cells have been spanned.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnspan-cs1" %}

## Change the border color while column spanning

You can change the border color for the spanned cells by the using [queryCellInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/#querycellinfo) event. This event triggers before the cell element is appended to the gantt element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs2/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/columns/columnspan-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/columns/columnspan-cs2" %}

## Limitations

* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling