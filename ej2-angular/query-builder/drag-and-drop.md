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

Reorder rules and groups within the Query Builder by dragging and dropping them to new positions. This intuitive approach simplifies query construction and modification. Enable drag and drop functionality using the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#allowDragAndDrop) property. Events are available to track drag and drop actions: [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#dragStart), [`drag`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#drag), and [`drop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/#drop).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/drag-and-drop-cs1" %}
