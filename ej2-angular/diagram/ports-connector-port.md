---
layout: post
title: Connector ports in Angular Diagram component | Syncfusion
description: Learn here all about Ports in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---

## Create connector port

The creation of connector ports is similar to the creation of node ports. To create connector ports, you need to define a port collection and assign it to the connector's ports property. 

The following code example shows how to create connector port.

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

The port can be aligned before, after, or at the center of the connector by utilizing the [`alignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portAlignment/) property. By default, the port alignment is set to **center**.

The following code example shows how to set alignment to the connector port.

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

The connector port displacement allows users to adjust the position of ports relative to the connector. By setting displacement offsets, ports can be moved to precise locations along the connector.

The following code example shows how to set displacement to the connector port.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/portscon-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/portscon-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/portscon-cs3" %}

N> The displacement will work only if we set alignment as after or before.

## Connector port connection

To establish a connection between connectors, connector ports are utilized. For this connection, the `sourcePortID` or `targetPortID` should be set to the ID of the respective port on the connector.

The following code example explains how to connect connector to the connector port.

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

* [How to customize the ports](./ports-appearance)

* [How to set the position of the port](./ports-positioning)

* [How to interact with the ports](./ports-interaction)