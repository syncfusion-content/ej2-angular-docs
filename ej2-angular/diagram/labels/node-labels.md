---
layout: post
title: Node Labels in Angular Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Node Labels
documentation: ug
domainurl: ##DomainURL##
---

# Node Annotations in Angular Diagram Component

The Angular Diagram component allows precise customization of node annotations (also called labels) for positioning and appearance. Node annotations can be aligned relative to node boundaries using four key positioning properties that work together to provide comprehensive control over annotation placement.

## Annotation positioning properties

Node annotations support the following positioning properties through the ShapeAnnotation class:

* **Offset** - Controls fractional positioning within the node bounds
* **HorizontalAlignment** - Sets horizontal alignment at the calculated position
* **VerticalAlignment** - Sets vertical alignment at the calculated position
* **Margin** - Adds spacing around the annotation

These properties can be combined to achieve precise annotation positioning for various design requirements.

## Set annotation offset and size

The [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointModel/) property positions annotations using fractional values between 0 and 1. The offset represents the relative position within the node boundaries, where (0,0) is the top-left corner and (1,1) is the bottom-right corner. The default offset is (0.5, 0.5), which centers the annotation.

The annotation size is automatically calculated based on its content. To specify custom dimensions, use the [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#height) properties.

The following example demonstrates how to configure offset, width, and height for node annotations:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/offset-cs1" %}

### Update annotation offset at runtime

Annotation offset values can be modified dynamically during application execution. To update the offset, access the target annotation and modify its offset properties, then call the `dataBind()` method to apply changes immediately.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/offset-run-cs1" %}

N> Call `dataBind()` after property changes to reflect updates instantly.

### Annotation offset positions

The following table demonstrates annotation positioning with different offset values:

| Offset | Image |
|--------|--------|
| Top Left {x:0,y:0} | ![TopLeft](../images/diagram-annotation-in-lefttop-position.png) |
| Middle Left {x:0,y:0.5} | ![MiddleLeft](../images/diagram-annotation-in-leftcenter-position.png) |
| Bottom Left {x:0,y:1} | ![BottomLeft](../images/diagram-annotation-in-leftbottom-position.png) |
| Middle Top {x:0.5,y:0} | ![MiddleTop](../images/diagram-annotation-in-centertop-position.png) |
| Center {x:0.5,y:0.5} | ![Center](../images/diagram-annotation-in-center-position.png) |
| Middle Bottom {x:0.5,y:1} | ![MiddleBottom](../images/diagram-annotation-in-centerbottom-position.png) |
| Top Right {x:1,y:0} | ![TopRight](../images/diagram-annotation-in-topright-position.png) |
| Middle Right {x:1,y:0.5} | ![MiddleRight](../images/diagram-annotation-in-rightcenter-position.png) |
| Bottom Right {x:1,y:1} | ![BottomRight](../images/diagram-annotation-in-rightbottom-position.png) |

## Annotation alignment

After determining the annotation position using offset values, the [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#horizontalalignment) and [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#verticalalignment) properties control how the annotation aligns at that calculated position.

The horizontal alignment determines the annotation's horizontal positioning relative to the calculated point, while vertical alignment controls the vertical positioning. This two-step positioning system (offset calculation followed by alignment) provides precise control over annotation placement.

The following example shows how to configure annotation alignment properties:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/offset-cs2" %}

### Alignment combinations

The following table shows all possible alignment combinations with offset (0,0) to demonstrate the alignment behavior:

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
|---------------------|-------------------|------------------------|
| Left | Top | ![Left Top Label Alignment](../images/Label1.png) |
| Center | Top | ![Center Top Label Alignment](../images/Label2.png) |
| Right | Top | ![Right Top Label Alignment](../images/Label3.png) |
| Left | Center | ![Left Center Label Alignment](../images/Label4.png) |
| Center | Center | ![Center Center Label Alignment](../images/Label5.png) |
| Right | Center | ![Right Center Label Alignment](../images/Label6.png) |
| Left | Bottom | ![Left Bottom Label Alignment](../images/Label7.png) |
| Center | Bottom | ![Center Bottom Label Alignment](../images/Label8.png) |
| Right | Bottom | ![Right Bottom Label Alignment](../images/Label9.png) |

### Update annotation alignment at runtime

Annotation alignment properties can be modified dynamically during application execution. The following example demonstrates updating alignment properties at runtime:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/labels/offset-run-cs2" %}