---
layout: post
title: Drag and drop in Angular List box component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular List box component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Angular List box component

The ListBox has support to drag an item or a group of selected items and drop it within the same list box or into another list box.

The elements can be customized on drag and drop by using the following events,

| Events | Description |
|------|------|
| [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#dragstart) | Triggers when the selected element is being dragged. |
| [`drag`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#drag) | Triggers when the selected element is being dragged. |
| [`drop`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#drop) | Triggers when the selected element is being dropped. |

## Single listbox

To drag and drop an item or group of item within the list box can be achieved by setting [`allowDragAndDrop`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#allowdraganddrop) property as `true`.

The following sample illustrates how to drag and drop an item within the same list box by enabling `allowDragAndDrop` property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/getting-started-cs6" %}

## Multiple listbox

To drag and drop an item or group of item between two list boxes can be achieved by setting `allowDragAndDrop` property as `true` and [`scope`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#scope) property should be set to both the list boxes.

In the following sample, the `allowDragAndDrop` property is set as `true` and `scope` is set as `combined-list` to enable drop and drop in both list boxes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/multiple-listbox-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/multiple-listbox-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/multiple-listbox-cs1" %}

## Dual ListBox with drag and drop

The toolbar and drag and drop actions between two listboxes can be enabled by setting a listbox unique id and the same [`scope`](https://ej2.syncfusion.com/angular/documentation/api/list-box/#scope) property value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listbox/dual-drag-list-box-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listbox/dual-drag-list-box-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listbox/dual-drag-list-box-cs1" %}