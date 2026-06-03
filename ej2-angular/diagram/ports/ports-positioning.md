---
layout: post
title: Port positioning in Angular Diagram component | Syncfusion®
description: Learn how to position ports on nodes in Syncfusion® Angular Diagram component using offset, alignment, and margin properties with practical examples.
platform: ej2-angular
control: Ports 
documentation: ug
domainurl: ##DomainURL##
---

# Port positioning in Angular Diagram Component

The Angular Diagram component provides flexible options for positioning ports on nodes. Ports can be precisely positioned using offset coordinates, alignment properties, and margin values to create professional diagram layouts that meet specific design requirements.

## Understanding port offset positioning

The [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointPortModel#offset) property positions ports using fractional coordinates relative to the node boundaries. The coordinate system uses values from 0 to 1, where:

- **0** represents the top edge (for Y-axis) or left edge (for X-axis)
- **1** represents the bottom edge (for Y-axis) or right edge (for X-axis)  
- **0.5** represents the center point of the width or height

The following table demonstrates port positioning with different offset values:

| Offset values | Port position | Visual result |
| -------- | -------- | -------- |
| (0,0) | Top-left corner | ![Port positioned at top-left corner](../images/port0-0.png) |
| (0,0.5) | Left edge, center vertically | ![Port positioned at left center](../images/port0-0.5.png) |
| (0,1) | Bottom-left corner | ![Port positioned at bottom-left corner](../images/port0-1.png) |
| (0.5,0) | Top edge, center horizontally | ![Port positioned at top center](../images/port0.5-0.png) |
| (0.5,0.5) | Center of the node | ![Port positioned at center](../images/port0.5-0.5.png) |
| (0.5,1) | Bottom edge, center horizontally | ![Port positioned at bottom center](../images/port0.5-1.png) |
| (1,0) | Top-right corner | ![Port positioned at top-right corner](../images/port1-0.png) |
| (1,0.5) | Right edge, center vertically | ![Port positioned at right center](../images/port1-0.5.png) |
| (1,1) | Bottom-right corner | ![Port positioned at bottom-right corner](../images/port1-1.png) |

## Horizontal and vertical alignment options

The [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/horizontalAlignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/verticalAlignment) properties provide fine-grained control over port positioning at the specified offset coordinates. These properties determine how the port aligns relative to its calculated position.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/portspos-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/portspos-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/portspos-cs1" %}

The following table shows all possible alignment combinations when using offset (0, 0):

| Horizontal alignment | Vertical alignment | Resulting position | Visual example |
| -------- | -------- | -------- | -------- |
| Left | Top | Port extends right and down from corner | ![Left Top aligned port](../images/port-in-lefttop-position.png) |
| Center | Top | Port centers horizontally, extends down | ![Center Top aligned port](../images/port-in-centertop-position.png) |
| Right | Top | Port extends left and down from corner | ![Right Top aligned port](../images/port-in-righttop-position.png) |
| Left | Center | Port extends right, centers vertically | ![Left Center aligned port](../images/port-in-leftcenter-position.png) |
| Center | Center | Port centers both horizontally and vertically | ![Center Center aligned port](../images/port-in-centercenter-position.png) |
| Right | Center | Port extends left, centers vertically | ![Right Center aligned port](../images/port-in-rightcenter-position.png) |
| Left | Bottom | Port extends right and up from corner | ![Left Bottom aligned port](../images/port-in-leftbottom-position.png) |
| Center | Bottom | Port centers horizontally, extends up | ![Center Bottom aligned port](../images/port-in-centerbottom-position.png) |
| Right | Bottom | Port extends left and up from corner | ![Right Bottom aligned port](../images/port-in-rightbottom-position.png) |

## Adding margin spacing to ports

The [`Margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel) property applies additional spacing around ports using absolute pixel values. Margin creates blank space on any or all four sides of the port, allowing for precise positioning adjustments beyond the basic offset and alignment settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/ports/portspos-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/ports/portspos-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/ports/portspos-cs2" %}

## See also

* [Port interaction capabilities](./ports-interaction)
* [Customizing port appearance](./ports-appearance)
* [Creating connector ports](./ports-connector-port)