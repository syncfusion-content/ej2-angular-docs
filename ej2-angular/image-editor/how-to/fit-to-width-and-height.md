---
layout: post
title: Fit to width and height in Angular Image Editor | Syncfusion
description: Learn how to fit an image to the Syncfusion Angular Image Editor width or height by programmatically adjusting the zoom level to match the container dimensions.
platform: ej2-angular
control: Fit to Width and Height
documentation: ug
domainurl: ##DomainURL##
---

# How to fit image to editor width and height in Angular Image Editor

The Image Editor's [`zoom`](https://ej2.syncfusion.com/angular/documentation/api/image-editor#zoom) method can be used to fit an image to the editor by width or height. Programmatically increase the zoom level until the image dimensions match the editor container's width or height.

This example demonstrates scenarios that include buttons for fitting the image to its width (Fit Width) or height (Fit Height).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs64/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs64/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs64" %}