---
layout: post
title: Drag and drop in Angular Common control | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
documentation: ug
domainurl: ##DomainURL##
---

# Drag and Drop for Angular Components

Drag and drop is a direct manipulation interface pattern that allows users to select objects, move them to different locations, and release them to perform actions such as reordering, moving between containers, or organizing content. This intuitive interaction improves usability in applications like task managers, file explorers, and kanban boards.

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components provide robust drag and drop support through the [Draggable](https://ej2.syncfusion.com/documentation/api/base/draggable/) and [Droppable](https://ej2.syncfusion.com/documentation/api/base/droppable/) classes from the `@syncfusion/ej2-base` package. These classes can be applied to any DOM element, enabling flexible and customizable drag-and-drop experiences.

Import the required classes in your component:

```ts
import { Draggable, Droppable } from '@syncfusion/ej2-base';
```

## Making Elements Draggable

To enable dragging on any HTML element, create a `Draggable` instance and pass the target element.

The following example demonstrates basic draggable functionality:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/draggable-default-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/draggable-default-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/draggable-default-cs1" %}

### Creating a Clone During Drag

Set the [clone](https://ej2.syncfusion.com/documentation/api/base/draggable/#clone) property to `true` to display a visual copy of the dragged element while the original remains in place. This is useful for drag-and-drop operations where the source should not move until dropped successfully.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/clone-draggable/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/clone-draggable/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/clone-draggable" %}

### Restricting the Drag Area

Limit the draggable movement to a specific container by setting the [dragArea](https://ej2.syncfusion.com/documentation/api/base/draggable/#dragarea) property to a CSS selector or DOM element. The dragged element (or its clone) will be constrained within these boundaries.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/drag-area/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/drag-area/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/drag-area" %}

## Creating Drop Targets

The [Droppable](https://ej2.syncfusion.com/documentation/api/base/droppable/) class designates elements as valid drop zones. When a draggable element is released over a droppable target, the [drop](https://ej2.syncfusion.com/documentation/api/base/droppable/#drop) event fires, providing details such as the target, dragged element, and helper (clone).

Use this event to append or move the dragged element to the drop target.

The following example shows basic drag-and-drop between containers:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/drag-drop-action-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/common/drag-drop-action-cs1" %}