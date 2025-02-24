---
layout: post
title: Ports interaction in Angular Diagram component | Syncfusion®
description: Learn here all about Ports in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---

## Draw connector from port

The port can be used to create connector by enabling `Draw` constraints to the [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port/#constraints) property. By default, the connector segment type is set to **Orthogonal**.

The following code explains how to draw the connector by using the port constraints.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-int1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-int1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-int1" %}

### Draw different connector types from port

You can change the default connector type while drawing the connector from the port by setting the specific connector type in connector defaults. This enables the drawing of various connector types from the port, including:

* Straight
* Bezier
* Orthogonal

The following code explains how to draw different connectors by using the port constraints.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-int2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-int2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-int2" %}

## Port drag

The port drag feature allows users to click and drag a port using the mouse. This functionality can be enabled by setting the port constraints to **"Drag"**. 

The following code explains how to enable port drag.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-int3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-int3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-int3" %}

## Port tooltip

The port tooltip feature allows a tooltip to be displayed when hovering over a port. This functionality can be enabled by setting the port constraints to **"Tooltip"**.

The following code explains how to enable port tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-int4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-int4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-int4" %}

## Events

There are several events that can be triggered while interacting with ports. These events are listed in the table below.

| Event| Description|
|----|----|
| [`Click`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iClickEventArgs/)   | Triggers when the port is clicked. |
| [`Element Draw`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iElementDrawEventArgs/)  | Triggers when drawing a connector from the port. |
| [`Position Change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDraggingEventArgs/)  | Triggers when the port is dragged. |
| [`Connection Change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iConnectionChangeEventArgs/) | Triggers when a connector is connected or disconnected from the port|

The following example shows how to get these events in diagram.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-int5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-int5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-int5" %}

## See also

* [How to customize the ports](./ports-appearance)

* [How to set the position of the port](./ports-positioning)

* [How to create connector port](./ports-connector-port)
