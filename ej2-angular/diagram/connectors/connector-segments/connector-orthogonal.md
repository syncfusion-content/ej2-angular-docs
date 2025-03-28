---
layout: post
title: Orthogonal connectors in Angular Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Orthogonal 
documentation: ug
domainurl: ##DomainURL##
---

# Orthogonal Connector in EJ2 Angular Diagram control

Orthogonal segments is used to create segments that are perpendicular to each other.

Set the segment [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#type) as **orthogonal** to create a default orthogonal segment and need to specify [`type`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#type). The following code example illustrates how to create a default orthogonal segment.

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to [`connector.segments`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connector/#segments) collection. The following code example illustrates how to create a connector with multiple segments.

The [`length`](https://ej2.syncfusion.com/angular/documentation/api/diagram/orthogonalSegment/#length) and [`direction`](https://ej2.syncfusion.com/angular/documentation/api/diagram/orthogonalSegment/#direction) properties allow to define the flow and length of segment. The following code example illustrates how to create customized orthogonal segments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsortho-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsortho-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsortho-cs1" %}

N> You need to mention the segment type as same as what you mentioned in connector type. There should be no contradiction between connector type and segment type.

## Orthogonal segment editing

* Orthogonal thumbs allow you to adjust the length of adjacent segments by clicking and dragging them.
* When necessary, some segments are added or removed automatically, while dragging the segment. 
* This is to maintain proper routing of orthogonality between segments.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsorthosegments-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsorthosegments-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsorthosegments-cs1" %}

![Orthogonal Segment edit Gif](./../../images/orthoSegEdit.gif)

## Avoid overlapping

Orthogonal segments are automatically re-routed, in order to avoid overlapping with the source and target nodes. The following preview illustrates how orthogonal segments are re-routed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectoroverlapping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectoroverlapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectoroverlapping-cs1" %}

## How to customize Orthogonal Segment Thumb Shape

The orthogonal connector has a number of segments in between the source and the target point. The segments are rendered with the default shape Circle. Now, the option has been provided to change the segment thumb shape using the [`segmentThumbShape`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#segmentthumbshape) property.The following predefined shapes are provided:

| Shape name | Shape |
|-------- | -------- |
|Rhombus| ![Rhombus](./../../images/rhombus.png) |
| Square | ![Square](../../images/Square.png) |
| Rectangle | ![Rectangle](../../images/Rectangle.png) |
| Ellipse |![Ellipse](../../images/Ellipse.png) |
|Arrow| ![Arrow](../../images/Arrow.png) |
| OpenArrow | ![OpenArrow](../../images/OpenArrow.png) |
| Circle |![Circle](../../images/Circle.png) |
| Fletch|![Fletch](../../images/Fletch.png) |
|OpenFetch| ![OpenFetch](../../images/OpenFetch.png) |
| IndentedArrow | ![IndentedArrow](../../images/IndentedArrow.png) |
| OutdentedArrow | ![OutdentedArrow](../../images/OutdentedArrow.png) |
| DoubleArrow |![DoubleArrow](../../images/DoubleArrow.png) |

You can customize the style of the thumb shape by overriding the class e-orthogonal-thumb.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsThumbshape-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsThumbshape-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsThumbshape-cs1" %}

![Segment Thumb Shape](./../../images/thumbshape.png)

Use the following CSS to customize the segment thumb shape.

```scss

.e-orthogonal-thumb {
    fill: rgb(126, 190, 219);
    stroke:  #24039e;
    stroke-width: 3px;
  }

```

## How to customize Orthogonal Segment Thumb Size

Orthogonal segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the  [`segmentThumbSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#segmentthumbsize) property.
To change the thumb size for all Orthogonal connectors, set the [`segmentThumbSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#segmentthumbsize) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/connectorConstraints) constraint, then set the desired [`segmentThumbSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#segmentthumbsize).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/connectors/connectorsorthothumbsize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/connectors/connectorsorthothumbsize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/connectors/connectorsorthothumbsize-cs1" %}