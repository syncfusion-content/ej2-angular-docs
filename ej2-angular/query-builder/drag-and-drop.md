---
layout: post
title: Drag and Drop in Angular Query Builder UI | Syncfusion
description: Reorder rules and groups in the Syncfusion Angular Query Builder UI by enabling allowDragAndDrop and handling dragStart, drag, and drop events.
platform: ej2-angular
control: Drag and drop
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop in Angular Query Builder UI

Reorder rules and groups within the Query Builder by dragging and dropping them to new positions. This intuitive approach simplifies query construction and modification. Enable drag and drop functionality using the [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#allowDragAndDrop) property. Events are available to track drag and drop actions: [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#dragStart), [`drag`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#drag), and [`drop`](https://ej2.syncfusion.com/angular/documentation/api/query-builder/index-default#drop).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/query-builder/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/query-builder/drag-and-drop-cs1" %}
