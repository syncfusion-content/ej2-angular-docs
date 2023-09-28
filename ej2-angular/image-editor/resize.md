---
layout: post
title: Resizing in Angular Image editor component | Syncfusion
description: Learn here all about Resizing in Syncfusion Angular Image editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Selection cropping 
documentation: ug
domainurl: ##DomainURL##
---

# Resize

The resize feature in an Image Editor is a valuable tool that empowers users to modify the size or dimensions of an image to meet their specific requirements. Whether it's for printing, web display, or any other purpose, this feature allows users to tailor images to their desired specifications.

## Apply resize to the image 

The Image Editor control includes a [`resize`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#resize) method, which allows you to adjust the size of an image. This method takes three parameters that define how the resizing should be carried out:

* width: Specifies the resizing width of the image.

* height: Specifies the resizing height of the image.

* isAspectRatio: Specifies a boolean value indicating whether the image should maintain its original aspect ratio during resizing. When set to true, the image will be resized while preserving its aspect ratio 

Here is an example of resizing the image using the [`resize`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#resize) method.   

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs36/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs36/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs36/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs36" %}

## Resizing event

The [`resizing`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#resizing) event is triggered when resizing the image. This event provides information encapsulated within an object, which includes details about the previous and current height and width of an image.

The parameter available in [`ResizeEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/resizeEventArgs/) is,

* [`ResizeEventArgs.previousWidth`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/resizeEventArgs/#previouswidth) - The width of the image before resizing is performed.

* [`ResizeEventArgs.previousHeight`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/resizeEventArgs/#previousheight) - The height of the image before resizing is performed.

* [`ResizeEventArgs.width`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/resizeEventArgs/#width) - The width of the image after resizing is performed.

* [`ResizeEventArgs.height`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/resizeEventArgs/#height) - The width of the image after resizing is performed.

* [`ResizeEventArgs.isAspectRatio`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/resizeEventArgs/#isaspectratio) - The type of resizing performed such as aspect ratio or non-aspect ratio.

* [`ResizeEventArgs.cancel`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/resizeEventArgs/#cancel) - Specifies a boolean value to cancel the resizing action.