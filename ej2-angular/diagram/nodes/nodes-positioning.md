---
layout: post
title: Positioning of nodes in Angular Diagram component | Syncfusion®
description: Learn here all about Nodes in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Positioning of nodes 
documentation: ug
domainurl: ##DomainURL##
---

# Positioning a node in Angular Diagram control

## Position

* Position of a node is controlled by using its [`offsetX`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#offsetx) and [`offsetY`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#offsety) properties. By default, these offset properties represent the distance between the origin of the diagram’s page and node’s center point.

* You may expect this offset values to represent the distance between page origin and node’s top-left corner instead of center. The Pivot property helps to solve this problem. Default value of node’s [`pivot`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#pivot) point is (0.5, 0.5), that means center of the node.

* The size of the node can be controlled by using its [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#height) properties.

* Rotation of a node is controlled by using its [`rotateAngle`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#rotateangle) property.

The following table illustrates how pivot relates offset values with node boundaries.

| Pivot | Offset |
|-------- | -------- |
| (0.5,0.5)| offsetX and offsetY values are considered as the node’s center point. |
| (0,0) | offsetX and offsetY values are considered as the top-left corner of the node. |
| (1,1) | offsetX and offsetY values are considered as the bottom-right corner of the node. |

The following code illustrates how to change the `pivot` value.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-positioning-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-positioning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-positioning-cs1" %}

## Minimum and maximum size for nodes.

The [`minWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#minwidth) and [`minHeight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#minheight) properties of node allows you to control the minimum size of the node while resizing. Similarly, the [`maxWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#maxwidth) and [`maxHeight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel/#maxheight) properties of node allows you to control the maximum size of the node while resizing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-positioning-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-positioning-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-positioning-cs2" %}


![MinSize-MaxSize GIF](../images/minSize-MaxSizeGif.gif)