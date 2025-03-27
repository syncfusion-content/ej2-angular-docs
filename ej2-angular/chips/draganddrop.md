---
layout: post
title: Drag and drop in Angular Chips component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular Chips component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chips
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Angular Chips component

The Chips component enables drag and drop functionality for any chip when [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/chips/#allowdraganddrop) is set to **true**. Chips can be dragged and dropped within the same or across external ChipList containers.

When dragging a chip, an indicator line appears between chips, showing the exact position where the chip will be dropped. This visual indicator helps users place chips precisely at the desired location.

* To prevent the dragging action for a specific chip, use the [`dragStart`](https://ej2.syncfusion.com/angular/documentation/api/chips/#dragstart) event, which triggers when chip dragging begins. Similarly, to prevent dropping action for a specific chip, use the [`dragStop`](https://ej2.syncfusion.com/angular/documentation/api/chips/#dragstop) event, which triggers when dragging ends.

* The [`dragging`](https://ej2.syncfusion.com/angular/documentation/api/chips/#dragging) event triggers while a chip is being dragged. You can customize the appearance of the cloned chip element during this event.

* You can set the drag area for the chips using the [`dragArea`](https://ej2.syncfusion.com/angular/documentation/api/chips/#dragarea) property which allows the dragging of cloned chip only within the specified element. It accepts an element Id or class as a string and defaults to `null`.

In the following sample, the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/chips/#allowdraganddrop) property is enabled.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chips/draganddrop/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/chips/draganddrop/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chips/draganddrop/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chips/draganddrop" %}
