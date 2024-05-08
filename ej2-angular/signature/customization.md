---
layout: post
title: Customization in Angular Signature component | Syncfusion
description: Learn here all about Customization in Syncfusion Angular Signature component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customization 
documentation: ug
domainurl: ##DomainURL##
---

# Customization in Angular Signature component

The Signature component draws stroke/path using moveTo() and lineTo() methods to connect one or more points while drawing in canvas. The stroke width can be modified by using its color and width. And the background can be modified by using its background color and background image.

## Stroke Width

The variable stroke width is based on the values of [`maxStrokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/signature/#maxstrokewidth), [`minStrokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/signature/#minstrokewidth) and [`velocity`](https://ej2.syncfusion.com/angular/documentation/api/signature/#velocity) for smoother and realistic signature. The default value of minimum stroke width is set as 0.5, maximum stroke width is set as 2.5 and velocity is set as 0.7.

In the following example, minimum stroke width is set as 0.5, maximum stroke width is set as 3 and velocity is set as 0.7.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/customization/strokewidth-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/customization/strokewidth-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/customization/strokewidth-cs1" %}

## Stroke Color

Color of the stroke can be specified by using [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/signature/#strokecolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#000000”.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/customization/strokecolor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/customization/strokecolor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/customization/strokecolor-cs1" %}

## Background Color

Background color of a signature can be specified by using [`backgroundColor`](https://ej2.syncfusion.com/angular/documentation/api/signature/#backgroundcolor) property and it accepts hexadecimal code, RGB, and text. The default value of this property is “#ffffff”.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/customization/bgcolor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/customization/bgcolor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/customization/bgcolor-cs1" %}

## Background Image

Background image of a signature can be specified by using [`backgroundImage`](https://ej2.syncfusion.com/angular/documentation/api/signature/#backgroundimage) property. The background image can be set by either hosting the image in our local IIS or online image.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/signature/customization/bgimage-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/signature/customization/bgimage-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/signature/customization/bgimage-cs1" %}

## See Also

* [Save With Background](./open-save#save-with-background)