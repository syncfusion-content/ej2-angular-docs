---
layout: post
title: Connectors in Angular Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Connectors 
documentation: ug
domainurl: ##DomainURL##
---

# Events

Diagram provides some events support for connectors that triggers when interacting with the connector.

## Click event

Triggers when the connector is clicked. The following code example explains how to get the [`click`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iClickEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorclickevent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorclickevent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorclickevent-cs1" %}

## Selection change event.

When selecting/unselecting the connector, the selection chang event will be triggered.
The following code example explains how to get the [`selection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#selectionchange) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSelectEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSelectEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSelectEvent-cs1" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iSelectionChangeEventArgs/) to true, as shown in the code snippet below.

```ts
   public selectionChange = function (args: ISelectionChangeEventArgs): void {
        if (args.state === 'Changing') {
           //Prevents selection
           args.cancel = true;
        };
    };

```

## Position change event.

Triggers when the connector's position is changed in diagram.
The following code example explains how to get the [`position change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDraggingEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorpositionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorpositionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorpositionEvent-cs1" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDraggingEventArgs/) to true, as shown in the code snippet below.

 ```ts
 public positionChange = function (args: IDraggingEventArgs): void {
        if (args.state === 'Progress') {
           //Prevents dragging
           args.cancel = true;
        };
    };
```

## Connection change event.

Triggers when the connector’s source or target point is connected or disconnected from the source or target.
The following code example explains how to get the [`connection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iConnectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorconnectionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorconnectionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorconnectionEvent-cs1" %}

## Source Point change event.

Triggers when the connector's source point is changed.
The following code example explains how to get the [`source Point change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iendchangeeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSourcepointEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSourcepointEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSourcepointEvent-cs1" %}

 You can prevent source point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

```ts
 public sourcePointChange = function (args: IEndChangeEventArgs): void {
        if (args.state === 'Progress') {
          //Prevents source point dragging
           args.cancel = true;
           //Customize
        };
    };
```

## Target Point change event.

Triggers when the connector's target point is changed.
The following code example explains how to get the [`target Point change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iEndChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorTargetpointEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorTargetpointEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorTargetpointEvent-cs1" %}

 You can prevent target point dragging by setting the `cancel` property of [`EndChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iEndChangeEventArgs/) to true, as shown in the code snippet below.

```ts
 public targetPointChange = function (args: IEndChangeEventArgs): void {
        if (args.state === 'Progress') {
          //Prevents source point dragging
           args.cancel = true;
           //Customize
        };
    };

```

## Segment Collection Change event.

Triggers when the connector's segments added or removed at runtime.
The following code example explains how to get the [`segment collection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isegmentcollectionchangeeventargs/) event in the diagram.

Use `CTRL+Shift+Click` on connector to add/remove segments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSegCollectionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSegCollectionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSegCollectionEvent-cs1" %}

## Segment Change event.

Triggers when the connector's segments were adjusted or edited.
The following code example explains how to get the [`segment change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isegmentchangeeventargs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorSegmentEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorSegmentEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorSegmentEvent-cs1" %}

 You can prevent segment editing by setting the `cancel` property of [`SegmentChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/isegmentchangeeventargs/) to true, as shown in the code snippet below.

``` ts
public segmentChange = function (args: ISegmentChangeEventArgs): void {
        if (args.state === 'Start') {
          //Prevents the segment editing
           args.cancel = true;
           //Customize
        };
    };

```

## Collection change event

Triggers when the connector is added or removed from diagram.
The following code example explains how to get the [`collection change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iCollectionChangeEventArgs/) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorcollectionEvent-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorcollectionEvent-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/connectors/connectorcollectionEvent-cs1" %}

You can prevent changes to the diagram collection, such as adding or deleting connectors, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iCollectionChangeEventArgs/) to true, as shown in the code snippet below.

``` ts
public collectionChange = function (args: ICollectionChangeEventArgs): void {
        if (args.state === 'Changing') {
          //Prevents collection change - Prevents Adding or deleting connectors
          args.cancel = true;
        };
    };

````
