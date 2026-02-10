---
layout: post
title: Ports appearance in Angular Diagram component | Syncfusion®
description: Learn how to customize port appearance, visibility, shapes, and constraints in Syncfusion® Angular Diagram component for enhanced visual design.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---

# Customize Port Appearance in Angular Diagram Component

## Overview

Ports serve as connection points on diagram nodes where connectors can be attached. The appearance of ports can be customized using the [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#strokecolor), [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#strokewidth), [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#fill) and [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapestylemodel#opacity) properties of the port. Customize the port size by using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port#height) properties of port. The ports [`visibility`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port#visibility) property allows you to define when the port should be visible.

For more information about port visibility, refer to the [Port Visibility](#port-visibility) section below.

The following code illustrates how to change the appearance of port.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/appear-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/appear-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/appear-cs1" %}

### Change appearance of port at runtime

The appearance of port can be changed at runtime by customizing the style properties of the port. This is useful when you need to provide visual feedback based on user interactions or application state changes. The following code illustrates how to change the appearance of port at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-app1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-app1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-app1" %}

## Port visibility

The visibility of the ports is determined by the [`visibility`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port#visibility) property of port using the [`PortVisibility`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portvisibility) enum. This enum includes properties such as `Connect`, `Hidden`, `Hover`, and `Visible`. By default, the port visibility is set to **Hidden**.

| Property | Definition | Use Case |
|----|----|----|
| Hover | Port is visible when mouse hovers over the DiagramElement. | Ideal for clean interfaces where ports appear only during interaction. |
| Hidden | Port is not visible for the DiagramElement. | Used when ports should remain completely invisible to users. |
| Connect | The port becomes visible when you hover a connector thumb over the DiagramElement where the port resides. | Best for guided connection scenarios where valid connection points are highlighted. |
| Visible | Port is always visible for the DiagramElement. | Suitable when ports need to be constantly visible for easy identification. |

## Port shape 

The shape of port can be changed by using its shape property. To explore the different types of port shapes, refer to [`Port Shapes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portshapes). By default the port shape is `Square`. Different shapes help distinguish between different types of connections or data flow directions.

### Types of port shapes

The following basic built-in `PortShapes` are available for ports:

* Circle
* Custom
* Square
* X

### Customize the port's shape

Custom shape support has been provided for port. You can add custom path data instead of built-in shapes when you need specific visual indicators that match your application's design requirements or represent particular data types. 

If you need to render a custom shape, then you can set shape as `Custom` and define path using [`pathData`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointportmodel#pathdata) property of port.

The following code illustrates how to set custom shape to the port.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/ports-app2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/ports-app2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/ports-app2" %}

## Constraints

The constraints property allows you to enable or disable certain behaviors of ports, providing fine-grained control over port functionality. For more information about port constraints, refer to [`Port Constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portconstraints).

The PortConstraints may have multiple behaviors as listed below:

| Constraints | Usage | Purpose |
|----|----|----| 
| None | Disables all behaviors of Port. | Complete restriction of port functionality. |
| Draw | Enables or disables drawing a connector from the port. | Controls whether new connections can be initiated from this port. |
| InConnect | Enables or disables connecting to the incoming Connector. | Restricts whether connectors can terminate at this port. |
| OutConnect | Enables or disables connecting the outgoing Connector. | Controls whether connectors can originate from this port. |
| ToolTip | Enables or disables the Tooltip for the ports. | Shows or hides informational tooltips when hovering over ports. |
| Drag | Enables or disables dragging of port. | Allows or prevents repositioning of ports within the node. |
| InheritTooltip | Enables or disables inheriting Tooltip from the parent node. | Uses the parent node's tooltip configuration for the port. |

## See also

* [How to interact with the ports](./ports-interaction)

* [How to set the position of the port](./ports-positioning)

* [How to create connector port](./ports-connector-port)