---
layout: post
title: How to load WebP format images in Angular Carousel | Syncfusion
description: Load WebP format images in the Angular Carousel for smaller file sizes, faster load times, and reduced data usage.
platform: ej2-angular
control: Carousel  
documentation: ug
domainurl: ##DomainURL##
---

# How to load WebP format images in Angular Carousel

The Carousel component supports loading images in WebP format, which creates smaller, better-looking images. Choosing WebP as the image format can significantly improve website performance without sacrificing visual quality. WebP images are substantially smaller in file size compared to formats like JPEG and PNG, resulting in faster load times and reduced data usage.

To implement WebP images in the Carousel component, convert the image format to WebP and pass them to Carousel items. The following sample illustrates how to load carousel images in WebP format.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/carousel/default-webp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-webp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-webp" %}