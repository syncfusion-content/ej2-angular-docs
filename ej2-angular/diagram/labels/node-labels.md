---
layout: post
title: Node Labels in Angular Diagram component | Syncfusion®
description: Learn here all about Labels in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Node Labels
documentation: ug
domainurl: ##DomainURL##
---

# Node annotations in Angular Diagram component

Diagram allows you to customize the position and appearance of the annotation efficiently. Annotation can be aligned relative to the node boundaries. It has Margin, Offset, Horizontal, and Vertical alignment properties. It is quite tricky when all four alignments are used together but gives more control over alignments properties of the ShapeAnnotation class. Annotations of a node can be positioned using the following properties of ShapeAnnotation.

* Offset
* HorizontalAlignment
* VerticalAlignment
* Margin

## Set annotation offset and size

The [`offset`](https://ej2.syncfusion.com/angular/documentation/api/diagram/pointModel/) property of an annotation is used to align annotations based on fractional values. The offset can be customized by modifying the x and y values of the offset property. By default, the annotation offset is set to 0.5 on both the x and y axes.

By default, the size of the annotation is calculated based on its content. If you want to set the size externally, you can do so using the [`width`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#height) properties of annotation.

The following code shows how to set offset, height and width for the annotation.

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

The annotation offset can be updated dynamically at runtime. To update the annotation offset, fetch the annotation you want to update and modify its offset.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/offset-run-cs1" %}

N> Call `dataBind()` after property change to reflect the changes instantly.

The following table shows the position of annotation with different offsets.

offset|image|
|-----|-----|
|Top Left {x:0,y:0} |![TopLeft](../images/diagram-annotation-in-lefttop-position.png)|
|Middle left {x:0,y:0.5}|![MiddelLeft](../images/diagram-annotation-in-leftcenter-position.png)|
|Bootom left {x:0,y:1}|![BottomLeft](../images/diagram-annotation-in-leftbottom-position.png)|
|Middle Top {x:0.5,y:0}|![MiddleTop](../images/diagram-annotation-in-centertop-position.png)|
|Center {x:0.5,y:0.5}|![Center](../images/diagram-annotation-in-center-position.png)|
|Middle Bottom {x:0.5,y:1}|![MiddleBottom](../images/diagram-annotation-in-centerbottom-position.png)|
|Top right {x:1,y:0}|![TopRight](../images/diagram-annotation-in-topright-position.png)|
|Middle right {x:1,y:0.5}|![MiddleRight](../images/diagram-annotation-in-rightcenter-position.png)|
|Bottom right {x:1,y:1}|![BottomRight](../images/diagram-annotation-in-rightbottom-position.png)|

## Annotation alignment

The [`horizontalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#horizontalalignment) property of annotation is used to set how the annotation is horizontally aligned at the annotation position determined from the fraction values. The [`verticalAlignment`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#verticalalignment) property is used to set how annotation is vertically aligned at the annotation position.

The following codes illustrates how to align annotations.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/offset-cs2" %}

The following tables illustrates all the possible alignments visually with 'offset (0, 0)'.

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Label Alignment](../images/Label1.png) |
| Center | Top | ![Center Top Label Alignment](../images/Label2.png) |
| Right | Top |  ![Right Top Label Alignment](../images/Label3.png) |
| Left | Center | ![Left Center Label Alignment](../images/Label4.png) |
| Center | Center| ![Center Center Label Alignment](../images/Label5.png) |
| Right | Center | ![Right Center Label Alignment](../images/Label6.png) |
| Left | Bottom | ![Left Bottom Label Alignment](../images/Label7.png) |
| Center | Bottom | ![Center Bottom Label Alignment](../images/Label8.png) |
| Right |Bottom |![Right Bottom Label Alignment](../images/Label9.png) |

### Update annotation alignment at runtime

Annotation alignment can be updated dynamically at runtime. The following code example shows how to update annotation alignment at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/offset-run-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/diagram/labels/offset-run-cs2" %}