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

Customize the Signature component's appearance by modifying stroke properties, background colors, and images. The component uses Canvas API methods (moveTo and lineTo) to render strokes with customizable width, color, and background styling.

## Stroke Width

Control stroke width dynamically using the [`maxStrokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/signature/#maxstrokewidth), [`minStrokeWidth`](https://ej2.syncfusion.com/angular/documentation/api/signature/#minstrokewidth), and [`velocity`](https://ej2.syncfusion.com/angular/documentation/api/signature/#velocity) properties for smooth, realistic signatures. Default values: `minStrokeWidth` = 0.5, `maxStrokeWidth` = 2.5, `velocity` = 0.7. The following example customizes these values.

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

Specify the stroke color using the [`strokeColor`](https://ej2.syncfusion.com/angular/documentation/api/signature/#strokecolor) property. It accepts hexadecimal codes, RGB values, and color names. Default value: `#000000` (black).

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

Set the background color using the [`backgroundColor`](https://ej2.syncfusion.com/angular/documentation/api/signature/#backgroundcolor) property. It accepts hexadecimal codes, RGB values, and color names. Default value: `#ffffff` (white).

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

Set a background image using the [`backgroundImage`](https://ej2.syncfusion.com/angular/documentation/api/signature/#backgroundimage) property. The image can be hosted locally or retrieved from an online source via URL.

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