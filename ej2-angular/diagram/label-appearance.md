---
layout: post
title: Label Appearance in Angular Diagram component | Syncfusion®
description: Learn here all about Label in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Label Appearance
documentation: ug
domainurl: ##DomainURL##
---

## Appearance

You can change the font style of the annotations with the font specific properties [`fontSize`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#fontsize), [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#fontfamily), [`color`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#color).
The label’s [`bold`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#bold), [`italic`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#italic), and [`textDecoration`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textdecoration) properties are used to style the label’s text.

The label’s [`fill`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#fill), [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#strokecolor), and [`strokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#strokewidth) properties are used to define the background color and border color of the annotation and the [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#opacity) property is used to define the transparency of the annotations.

The [`visible`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#visibility) property of the annotation enables or disables the visibility of annotation.

The following code illustrates how to customize the appearance of the annotation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/appear-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/appear-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/appear-cs1" %}

## Horizontal and vertical alignment

The following tables illustrates all the possible alignments visually with 'offset (0, 0)'.

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Label Alignment](images/Label1.png) |
| Center | Top | ![Center Top Label Alignment](images/Label2.png) |
| Right | Top |  ![Right Top Label Alignment](images/Label3.png) |
| Left | Center | ![Left Center Label Alignment](images/Label4.png) |
| Center | Center| ![Center Center Label Alignment](images/Label5.png) |
| Right | Center | ![Right Center Label Alignment](images/Label6.png) |
| Left | Bottom | ![Left Bottom Label Alignment](images/Label7.png) |
| Center | Bottom | ![Center Bottom Label Alignment](images/Label8.png) |
| Right |Bottom |![Right Bottom Label Alignment](images/Label9.png) |

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

## Annotation Margin

[`Margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#margin) is an absolute value used to add some blank space in any one of its four sides. The annotations can be displaced with the margin property. The following code example illustrates how to align a annotation based on its `offset`, `horizontalAlignment`, `verticalAlignment`, and [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/marginModel/) values.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/margin-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/margin-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/margin-cs1" %}

## Hyperlink

Diagram provides a support to add a [`hyperlink`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#hyperlink) for the nodes/connectors annotation. It can also be customized  with the below properties.

A User can open the hyperlink in the new window, the same tab and the new tab by using the  [`hyperlinkOpenState`](https://ej2.syncfusion.com/angular/documentation/api/diagram/hyperlinkModel/#hyperlinkopenstate)  property

The [`content`](https://ej2.syncfusion.com/angular/documentation/api/diagram/hyperlinkModel/#content) property of `hyperlink` is used to display the content of the hyper link display text. The [`color`](https://ej2.syncfusion.com/angular/documentation/api/diagram/hyperlinkModel/#color) property of the `hyperlink` is used to display the color of the hyper link.
The [`textDecoration`](https://ej2.syncfusion.com/angular/documentation/api/diagram/hyperlinkModel/#textdecoration) property is used to decorate the hyper link text with **Underline**, **LineThrough**, **Overline**. The following example illustrates how to define and customize hyper link in both node and connector.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/hyperlink-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/hyperlink-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/hyperlink-cs1" %}

## Rotate Annotation

Annotation can be rotated by setting the [`rotateAngle`](https://ej2.syncfusion.com/angular/documentation/api/diagram/shapeAnnotationModel/#rotateangle) property of the annotation. The following example shows how to rotate annotation text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/rotateAngle-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/rotateAngle-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/rotateAngle-cs1" %}

## Template support for annotation

Diagram provides template support for annotation. You can either define a string template and assign it to [`template`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#template) property of annotation or define a annotation template in html file and assign it to the [`annotationTemplate`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#annotationtemplate) property of the diagram.

### String template

For string template you should define a SVG/HTML content as string in the annotation's [`template`](https://ej2.syncfusion.com/angular/documentation/api/diagram/annotationModel/#template) property.

The following code illustrates how to define a template in annotation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/labeltemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/labeltemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/labeltemplate-cs1" %}

N> For the proper alignment of template, we need to mention width and height for the annotation while using template.

### Annotation template

For annotation template you should define a template in html file which you want to render in annotation and assign it to the [`annotationTemplate`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/#annotationtemplate) property of diagram.

The following code illustrates how to define a annotationTemplate in annotation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/annotationTemp-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/annotationTemp-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/annotationTemp-cs1" %}

## Text align

The [`textAlign`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textalign) property of annotation allows you to set how the text should be aligned (left, right, center, or justify) inside the text block. The following codes illustrate how to set textAlign for an annotation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/textalign-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/textalign-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/textalign-cs1" %}

The following table shows the different text alignment.

|Text Align|Output image|
|-----|-----|
|Right|![Text align right](images/textAlign-right.png)|
|Left|![Text align left](images/textAlign-left.png)|
|Center|![Text align center](images/textAlign-center.png)|
|Justify|![Text align justify](images/textAlign-Justify.png)|

## Text Wrapping

When text overflows node boundaries, you can control it by using [`text wrapping`](https://helpej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textwrapping). So, it is wrapped into multiple lines. The wrapping property of annotation defines how the text should be wrapped. The following code illustrates how to wrap a text in a node.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/wrapping-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/wrapping-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/wrapping-cs1" %}

| Value | Description | Image |
| -------- | -------- | -------- |
| No Wrap | Text will not be wrapped. | ![Label No Wrap](images/Wrap1.png) |
| Wrap | Text-wrapping occurs, when the text overflows beyond the available node width. | ![Label Wrap](images/Wrap2.png) |
| WrapWithOverflow (Default) | Text-wrapping occurs, when the text overflows beyond the available node width. However, the text may overflow beyond the node width in the case of a very long word. | ![Label WrapWith Overflow](images/Wrap3.png) |

## Text overflow

The label’s [`TextOverflow`](https://ej2.syncfusion.com/angular/documentation/api/diagram/textStyleModel/#textoverflow) property is used control whether to display the overflowed content in node or not.

- `Clip` - The text which overflowing node's bounds will be removed.
- `Ellipsis` - The text which overflowing nodes's bounds will be replaced by three dots.
- `Wrap` - Entire text will be rendered overflowing in y-axis and wrapped in x-axis.

Types of text overflow are shown in below table.

|TextOverflow|output image|
|-----|-----|
|Clip|![Text Overflow Clip](images/text-overflow-clip.png)|
|Ellipsis|![Text Overflow Ellipsis](images/text-overflow-ellipsis.png)|
|Wrap(Default)|![Text Overflow Wrap](images/text-overflow-wrap.png)|

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/labels/overflow-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/labels/overflow-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/labels/overflow-cs1" %}