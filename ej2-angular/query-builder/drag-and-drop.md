---
layout: post
title: Drag and drop in Angular Query builder component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular Query builder component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drag and drop
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Angular Query builder component

The Query Builder provides the functionality to reposition rules or groups within the component effortlessly. This enhancement provides a more intuitive and flexible way to construct and modify queries. You can use [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#allowDragAndDrop) to perform drag and drop functionality. And we have events support for drag and drop features that, indicates the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#dragStart), [`drag`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#drag) and [`drop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#drop) actions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/drag-and-drop-cs1" %}
