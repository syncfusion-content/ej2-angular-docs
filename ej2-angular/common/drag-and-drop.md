---
layout: post
title: Drag and drop in Angular Common control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop for Angular components

Drag and drop is a feature of a user interface that allows users to select an item or items and then move them to a different location or onto another interface element by "dragging" the selected item(s) with a pointing device (such as a mouse) and then "dropping" them at the desired location.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components offer robust drag and drop functionality facilitated by two primary libraries: [Draggable](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [Droppable](https://ej2.syncfusion.com/documentation/api/base/droppable/).
## Draggable

The Syncfusion<sup style="font-size:70%">&reg;</sup> [`Draggable`](https://ej2.syncfusion.com/documentation/api/base/draggable/) library empowers developers to make any DOM element draggable by initializing a `Draggable` object with the element as a parameter. This functionality is essential for interactive applications, enabling users to reorder items dynamically. Below is a demonstration of how to implement draggable functionality for a specific DOM element.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/draggable-default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/draggable-default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/draggable-default-cs1" %}

### Clone draggable element

Syncfusion<sup style="font-size:70%">&reg;</sup> provides the option to create a clone of a draggable element while the user is dragging it. It can be achieved by setting the [clone](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) property to `true`. Here's an example of how to create a clone of a draggable element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/clone-draggable/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/clone-draggable/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/clone-draggable" %}

### Drag area

A drag area is a confined section within the user interface where drag-and-drop operations are permissible. Executing a drag within this area can trigger specific actions or events, enhancing control over user interactions. Define a drag area by setting the [dragArea](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) property as illustrated below.
{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/drag-area/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/drag-area/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/drag-area" %}

## Droppable

The Droppable component designates parts of the user interface that can serve as targets for draggable elements. Utilizing Syncfusion<sup style="font-size:70%">&reg;</sup>'s [`Droppable`](https://ej2.syncfusion.com/documentation/api/base/droppable/) library, you can transform any DOM element into a droppable area, capable of accepting draggable components.

On interaction between a draggable and a droppable component, a [drop](https://ej2.syncfusion.com/documentation/api/base/droppable/#events) event is fired. Information about the dropped element is accessible via event arguments, allowing developers to append the dragged element to the target dynamically.

Below is an example demonstrating the creation of droppable zones.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/drag-drop-action-cs1" %}