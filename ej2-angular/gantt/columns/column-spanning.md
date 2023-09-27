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

The gantt has option to span the adjacent cells. You need to define the [`colSpan`](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Work1**  cells have been spanned.

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