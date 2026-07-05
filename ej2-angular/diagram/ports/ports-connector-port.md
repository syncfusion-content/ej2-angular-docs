---
layout: post
title: Connector ports in Angular Diagram component | Syncfusion®
description: Learn how to create connector ports, configure alignment and displacement, and establish port-to-port connections in Syncfusion® Angular Diagram component.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---

# Using Connector Ports in Angular Diagram Component

Connector ports serve as connection points along connectors, enabling other connectors to attach at specific locations rather than just the endpoints. This guide covers creating connector ports, configuring their alignment and displacement, and establishing port-to-port connections.

## Create connector port

Connector ports serve as connection points along connectors, enabling other connectors to attach at specific locations rather than just the endpoints. Creating connector ports follows the same pattern as node ports - define a port collection and assign it to the connector's [`ports`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#ports) property.

The following code example demonstrates how to create connector ports:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/portscon-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/portscon-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/portscon-cs1" %}

## Port alignment

Control the position of ports along the connector using the [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portAlignment) property. This property determines where the port appears relative to the connector's path:

- **Before**: Positions the port at the source end of the connector
- **After**: Positions the port at the target end of the connector  
- **Center**: Positions the port at the midpoint of the connector (default)

The following code example shows how to set different alignment values for connector ports:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/portscon-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/portscon-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/portscon-cs2" %}

## Port displacement

Fine-tune port positioning using the [`displacement`](https://ej2.syncfusion.com/angular/documentation/api/diagram/point) property, which applies offset values to move ports from their aligned position. Displacement works by shifting the port by specified x and y coordinates relative to the alignment point.

The following code example demonstrates how to apply displacement to connector ports:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/portscon-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/portscon-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/portscon-cs3" %}

N> Displacement only applies when alignment is set to **Before** or **After**. Center-aligned ports ignore displacement values.

## Establish port-to-port connections

Connect one connector to another connector's port by specifying the port ID in the [`sourcePortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#sourceportid) or [`targetPortID`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector#targetportid) property. This creates precise connection points along connector paths instead of connecting to endpoints.

The following code example shows how to connect a connector to a connector port:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/portscon-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/portscon-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/portscon-cs4" %}

## See also

* [How to customize port appearance](./ports-appearance)

* [How to position ports on nodes](./ports-positioning)

* [How to enable port interactions](./ports-interaction)