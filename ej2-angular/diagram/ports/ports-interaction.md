---
layout: post
title: Ports interaction in Angular Diagram component | Syncfusion®
description: Learn about ports interaction in Syncfusion® Angular Diagram component including drawing connectors, drag functionality, and events.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---

# Interactive Port Features in Angular Diagram Component

Ports in Angular Diagram components support various interactive features that enhance user workflow and diagram creation efficiency. This guide covers drawing connectors from ports, drag functionality, automatic port creation, tooltips, and event handling.

## Draw connector from port

Ports can serve as connection points for creating connectors dynamically. Enable the `Draw` constraint on the [`constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port/#constraints) property to allow users to draw connectors directly from ports. The default connector segment type is **Orthogonal**, providing structured, right-angled connections suitable for flowcharts and organizational diagrams.

This feature is particularly useful in scenarios where users need to create connections interactively, such as building workflow diagrams or network topologies.

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

The default connector type can be customized when drawing from ports by configuring connector defaults. This flexibility allows creation of various connector styles to match different diagram requirements:

* **Straight**: Direct linear connections for simple relationships
* **Bezier**: Curved connections for organic, flowing designs
* **Orthogonal**: Right-angled connections for structured layouts

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

Port drag functionality enables users to reposition ports by clicking and dragging with the mouse. This feature enhances diagram flexibility by allowing dynamic port placement adjustments. Enable this capability by setting the port constraints to **Drag**.

Port dragging is valuable when fine-tuning diagram layouts or adapting to changing connection requirements without recreating elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-int3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-int3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-int3" %}

## Automatic Port Creation

The Diagram component supports dynamic port creation through user interaction. Users can create ports on nodes or connectors by clicking and dragging while holding the Control (Ctrl) key. This feature is disabled by default and requires enabling the `DiagramConstraints.AutomaticPortCreation` constraint.

Ports can also be removed using the same Ctrl + Click interaction, provided the port is not connected to any connector. This prevents accidental disconnection of active connections.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/automaticPortCreation/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/automaticPortCreation/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/automaticPortCreation" %}

## Port tooltip

Port tooltips provide contextual information when users hover over ports, improving usability and user guidance. Enable this feature by setting the port constraints to **Tooltip**.

Tooltips are especially beneficial in complex diagrams where ports may not be immediately recognizable or when additional context helps users understand port functionality.

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

Port interactions trigger specific events that enable custom handling and application logic. These events provide hooks for implementing validation, logging, or custom behaviors during port operations.

| Event| Description| Use Cases |
|----|----|----|
| [`Click`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iClickEventArgs/)   | Triggers when a port is clicked | Custom selection logic, context menus |
| [`Element Draw`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iElementDrawEventArgs/)  | Triggers when drawing a connector from a port | Validation, custom connector properties |
| [`Position Change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iDraggingEventArgs/)  | Triggers when a port is dragged | Position validation, layout updates |
| [`Connection Change`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iConnectionChangeEventArgs/) | Triggers when a connector connects or disconnects from a port | Relationship tracking, data validation |

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