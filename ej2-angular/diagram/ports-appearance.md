---
layout: post
title: Ports appearance in Angular Diagram component | Syncfusion
description: Learn here all about Ports in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---


## Appearance

The appearance of ports can be customized by using[`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#strokecolor),
[`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#strokewidth), [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#fill) and [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeStyleModel/#opacity) properties of the port. Customize the port size by using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port/#height) properties of port. The ports [`visibility`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port#visibility) property allows you to define, when the port should be visible.

For more information about port visibility refer [`Port Visibility`](#port-visibility)

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

The appearance of port can be changed at runtime by customizing the style of port.The following code illustrates how to change the appearance of port at runtime.

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

The visibility of the ports is determined by the [`visibility`](https://ej2.syncfusion.com/angular/documentation/api/diagram/port/#visibility) property of port using the [`PortVisibility`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portVisibility/)enum, This enum includes properties such as `Connect`, `Hidden`, `Hover`, and `Visible`. By default, the port visibility is set to **Hidden**.

| Property | Definition |
|----|----|
| Hover | Port is visible when mousehover the DiagramElement. |
| Hidden | Port is not visible for the DiagramElement. |
| Connect | The port becomes visible when you hover the connector thumb over the DiagramElement where the port resides. |
| Visible | Port is always visible for the DiagramElement. |

## Port shape 

The shape of port can be changed by using its shape property. To explore the different types of port shapes, refer to [`Port Shapes`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portShapes/). By default the port shape is `Square`.

### Types of port shapes

We have provided some basic built-in `PortShapes` for the port. Find the shapes as follows.

* Circle
* Custom
* Square
* X

### Customize the port’s shape

Custom shape support has been provided for port. You can able to add the custom path data instead of build-in shapes. 
If you need to render a custom shape, then you can set shape as `Custom` and define path using [`pathData`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointPortModel/#pathdata) property of port.

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

The constraints property allows to enable/disable certain behaviors of ports. For more information about port constraints, refer to [`Port Constraints`](https://ej2.syncfusion.com/angular/documentation/api/diagram/portConstraints/).

The PortConstraints may have multiple behaviors like listed below:

| Constraints | Usage |
|----|----|
| None |Disables all behaviors of Port. |
| Draw |Enables or disables to draw a connector. |
| InConnect |Enables or disables connecting to the incoming Connector.  |
| OutConnect | Enables or disables connecting the outgoing Connector. |
| ToolTip |Enables or disables the Tooltip  for the ports. |
| Drag |Enables or disables dragging of port.  |
| InheritTooltip | Enables or disables the Tooltip  for the ports. |

## See also

* [How to interact with the ports](./ports-interaction)

* [How to set the position of the port](./ports-positioning)

* [How to create connector port](./ports-connector-port)

