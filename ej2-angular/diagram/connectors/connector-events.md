---
layout: post
title: Connector Events in Angular Diagram | Syncfusion®
description: Handle click, selection, position-change, connection, and segment-edit events on connectors in the Syncfusion® Angular Diagram to drive custom logic.
platform: ej2-angular
control: Connectors 
documentation: ug
domainurl: ##DomainURL##
---

# Connector Events in Angular Diagram

The Angular Diagram component provides comprehensive event support for connectors, allowing developers to respond to various user interactions and programmatic changes. These events enable dynamic behavior and custom logic when users interact with connectors through clicking, dragging, connecting, or modifying segments.

## Click Event

Triggers when a connector is clicked by the user. This event is useful for implementing custom actions, showing context menus, or displaying connector-specific information.

The following code example demonstrates how to handle the [`click`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iclickeventargs) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorclickevent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorclickevent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorclickevent-cs1" %}

## Selection Change Event

Triggers when a connector is selected or unselected. This event allows you to implement custom selection logic, update property panels, or perform actions based on selection state changes.

The following code example demonstrates how to handle the [`selection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram#selectionchange) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSelectEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSelectEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSelectEvent-cs1" %}

You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iselectionchangeeventargs) to true, as shown in the code snippet below:

```ts
   public selectionChange = function (args: ISelectionChangeEventArgs): void {
        if (args.state === 'Changing') {
           //Prevents selection
           args.cancel = true;
        }
    };

```

## Position Change Event

Triggers when a connector's position changes during dragging operations. This event is essential for implementing validation, snapping behavior, or custom positioning logic.

The following code example demonstrates how to handle the [`position change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idraggingeventargs) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorpositionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorpositionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorpositionEvent-cs1" %}

You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/idraggingeventargs) to true, as shown in the code snippet below:

 ```ts
 public positionChange = function (args: IDraggingEventArgs): void {
        if (args.state === 'Progress') {
           //Prevents dragging
           args.cancel = true;
        };
    };
```

## Connection Change Event

Triggers when a connector's source or target point connects to or disconnects from nodes. This event is crucial for implementing connection validation, automatic routing updates, or maintaining data relationships.

The following code example demonstrates how to handle the [`connection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iconnectionchangeeventargs) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorconnectionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorconnectionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorconnectionEvent-cs1" %}

## Source Point Change Event

Triggers when a connector's source point is modified through dragging or programmatic changes. This event enables validation of source connections and implementation of custom connection rules.

The following code example demonstrates how to handle the [`source point change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iendchangeeventargs) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSourcepointEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSourcepointEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSourcepointEvent-cs1" %}

You can prevent source point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iendchangeeventargs) to true, as shown in the code snippet below:

```ts
 public sourcePointChange = function (args: IEndChangeEventArgs): void {
        if (args.state === 'Progress') {
          //Prevents source point dragging
           args.cancel = true;
        }
    };
```

## Target Point Change Event

Triggers when a connector's target point is modified through dragging or programmatic changes. This event allows validation of target connections and enforcement of connection constraints.

The following code example demonstrates how to handle the [`target point change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iendchangeeventargs) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorTargetpointEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorTargetpointEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorTargetpointEvent-cs1" %}

You can prevent target point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iendchangeeventargs) to true, as shown in the code snippet below:

```ts
 public targetPointChange = function (args: IEndChangeEventArgs): void {
        if (args.state === 'Progress') {
          //Prevents target point dragging
           args.cancel = true;
        }
    };

```

## Segment Collection Change Event

Triggers when connector segments are added or removed at runtime. This event is essential for tracking dynamic changes to connector paths and implementing custom segment management logic.

The following code example demonstrates how to handle the [`segment collection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isegmentcollectionchangeeventargs) event in the diagram:

Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and click the connector to add or remove segments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSegCollectionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSegCollectionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSegCollectionEvent-cs1" %}

## Segment Change Event

Triggers when connector segments are adjusted or edited by the user. This event enables custom validation and modification of segment positions during interactive editing.

The following code example demonstrates how to handle the [`segment change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isegmentchangeeventargs) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSegmentEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSegmentEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSegmentEvent-cs1" %}

You can prevent segment editing by setting the `cancel` property of [`SegmentChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isegmentchangeeventargs) to true, as shown in the code snippet below:

``` ts
public segmentChange = function (args: ISegmentChangeEventArgs): void {
        if (args.state === 'Start') {
          //Prevents the segment editing
           args.cancel = true;
           //Customize
        };
    };

```

## Collection Change Event

Triggers when connectors are added to or removed from the diagram. This event is fundamental for tracking diagram modifications and implementing undo/redo functionality or change tracking systems.

The following code example demonstrates how to handle the [`collection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/icollectionchangeeventargs) event in the diagram:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorcollectionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorcollectionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorcollectionEvent-cs1" %}

You can prevent changes to the diagram collection, such as adding or deleting connectors, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/icollectionchangeeventargs) to true, as shown in the code snippet below:

``` ts
public collectionChange = function (args: ICollectionChangeEventArgs): void {
        if (args.state === 'Changing') {
          //Prevents collection change - Prevents Adding or deleting connectors
          args.cancel = true;
        };
    };

```