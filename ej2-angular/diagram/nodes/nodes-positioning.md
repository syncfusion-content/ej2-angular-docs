---
layout: post
title: Positioning of nodes in Angular Diagram component | Syncfusion®
description: Learn about node positioning in Syncfusion® Angular Diagram component including offset, pivot, and size constraints.
platform: ej2-angular
control: Positioning of nodes 
documentation: ug
domainurl: ##DomainURL##
---

# Positioning a Node in Angular Diagram Component

Node positioning in the Angular Diagram component allows precise control over where nodes appear on the diagram canvas. Understanding positioning fundamentals enables developers to create well-organized diagrams with nodes placed exactly where needed.

## Position

The position of a node is controlled using its [`offsetX`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#offsetx) and [`offsetY`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#offsety) properties. By default, these offset properties represent the distance between the origin of the diagram's page and the node's center point.

The [`pivot`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#pivot) property determines which point of the node the offset values reference. The default pivot value is (0.5, 0.5), which corresponds to the center of the node. This means offset values position the node based on its center point rather than its top-left corner.

Additional positioning properties include:

* The [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#height) properties control the size of the node
* The [`rotateAngle`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#rotateangle) property controls the rotation of a node

### Understanding Pivot Points

The pivot point determines which part of the node the offset coordinates reference. The following table illustrates how different pivot values affect node positioning:

| Pivot | Offset Behavior |
|-------- | -------- |
| (0.5,0.5)| offsetX and offsetY values position the node's center point |
| (0,0) | offsetX and offsetY values position the node's top-left corner |
| (1,1) | offsetX and offsetY values position the node's bottom-right corner |

The following code demonstrates how to change the pivot value:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/nodes/node-positioning-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/nodes/node-positioning-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/nodes/node-positioning-cs1" %}

## Size Constraints

### Minimum and Maximum Size

The size constraints ensure nodes maintain appropriate dimensions during resizing operations. The [`minWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#minwidth) and [`minHeight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#minheight) properties define the smallest allowable size for a node during resize operations. Similarly, the [`maxWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#maxwidth) and [`maxHeight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/nodeModel#maxheight) properties define the largest allowable size.

These constraints are particularly useful when creating diagrams where nodes need to maintain specific size ranges for visual consistency or functional requirements.

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