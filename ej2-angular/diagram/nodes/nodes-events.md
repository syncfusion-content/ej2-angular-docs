---
layout: post
title: Node Events in Angular Diagram component | Syncfusion®
description: Learn about node interaction events in Syncfusion Angular Diagram including click, selection, position, size, rotate, property and collection events.
platform: ej2-angular
control: Events of node
documentation: ug
domainurl: ##DomainURL##
---

# Node Interaction Events in Angular Diagram Component

The Angular Diagram component provides comprehensive event support for node interactions, allowing developers to respond to user actions and customize behavior during various interaction scenarios. These events are triggered when users interact with nodes through clicking, dragging, resizing, rotating, and other operations.

## Click Event

Triggered when a user clicks on a node. This event provides access to the clicked node and mouse event details, enabling custom click handling and node-specific actions.

The following code example demonstrates how to handle the [`click`](https://ej2.syncfusion.com/angular/documentation/api/diagram#click) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs0/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs0/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs0" %}

## Selection Change Event

Triggered when a node's selection state changes, either when selected or deselected. This event fires during both the selection process and completion, providing control over selection behavior.

The following code example shows how to handle the [`selectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#selectionchange) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs1" %}

Selection can be prevented by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iselectionchangeeventargs) to true, as shown in the following code:

```ts
public selectionChange(args: ISelectionChangeEventArgs): void {
    if (args.state === 'Changing') {
        // Prevents node selection
        args.cancel = true;
    }
}
```

## Position Change Event

Triggered during node dragging operations, providing real-time position updates as users move nodes. This event enables position validation, snap-to-grid functionality, and custom drag behavior.

The following code example demonstrates how to handle the [`positionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idraggingeventargs) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs2" %}

Dragging can be prevented by setting the `cancel` property of [`DraggingEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idraggingeventargs) to true:

```ts
public positionChange(args: IDraggingEventArgs): void {
    if (args.state === 'Progress') {
        // Prevents node dragging
        args.cancel = true;
    }
}
```

## Size Change Event

Triggered during node resizing operations when users interact with resize handles. This event provides access to the new dimensions and allows for size constraints and validation.

The following code example shows how to handle the [`sizeChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isizechangeeventargs) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs3" %}

Resizing can be prevented by setting the `cancel` property of [`SizeChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isizechangeeventargs) to true:

```ts
public sizeChange(args: ISizeChangeEventArgs): void {
    if (args.state === 'Progress') {
        // Prevents node resizing
        args.cancel = true;
    }
}
```

## Rotate Change Event

Triggered during node rotation operations when users interact with the rotation handle. This event enables rotation constraints and custom rotation behavior.

The following code example demonstrates how to handle the [`rotateChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/irotationeventargs) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs4" %}

Rotation can be prevented by setting the `cancel` property of [`RotationEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/irotationeventargs) to true:

```ts
public rotateChange(args: IRotationEventArgs): void {
    if (args.state === 'Progress') {
        // Prevents node rotation
        args.cancel = true;
    }
}
```

## Property Change Event

Triggered when any property of a node is modified programmatically or through user interaction. This event is useful for tracking changes and implementing custom validation logic.

The following code example shows how to handle the [`propertyChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram/ipropertychangeeventargs) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs5" %}

## Collection Change Event

Triggered when nodes are added to or removed from the diagram dynamically. This event provides control over diagram modifications and enables validation before collection changes occur.

The following code example demonstrates how to handle the [`collectionChange`](https://ej2.syncfusion.com/angular/documentation/api/diagram#collectionchange) event:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs6" %}

Collection changes can be prevented by setting the `cancel` property of [`CollectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/icollectionchangeeventargs) to true:

```ts
public collectionChange(args: ICollectionChangeEventArgs): void {
    if (args.state === 'Changing') {
        // Prevents adding or removing nodes from the diagram
        args.cancel = true;
    }
}
```

## Mouse Events

The diagram component provides mouse interaction events that trigger when users hover over or move the mouse cursor in relation to node surfaces.

### Mouse Enter Event

The [`mouseEnter`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imouseeventargs) event is triggered when the mouse cursor enters a node's boundary area.

### Mouse Over Event

The [`mouseOver`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imouseeventargs) event is triggered when the mouse cursor hovers over a node's surface area.

### Mouse Leave Event

The [`mouseLeave`](https://ej2.syncfusion.com/angular/documentation/api/diagram/imouseeventargs) event is triggered when the mouse cursor leaves a node's boundary area.

The following code example demonstrates how to handle these mouse events and implement visual feedback by changing node colors based on mouse interactions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-events-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-events-cs7" %}