---
layout: post
title: Load WebP Images in Angular Carousel Component | Syncfusion
description: Learn here all about about how to load webp format image in Syncfusion Angular Carousel component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Carousel  
documentation: ug
domainurl: ##DomainURL##
---

# Load WebP format images in Angular Carousel component

The Carousel component supports loading images in WebP format, which creates smaller, better-looking images. Choosing WebP as the image format can significantly improve website performance without sacrificing visual quality. WebP images are substantially smaller in file size compared to formats like JPEG and PNG, resulting in faster load times and reduced data usage.

To implement WebP images in the Carousel component, convert the image format to WebP and pass them to Carousel items. The following sample illustrates how to load carousel images in WebP format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/carousel/default-webp/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/carousel/default-webp/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/carousel/default-webp" %}