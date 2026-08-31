---
layout: post
title: Z-order in Angular Image Editor | Syncfusion
description: Reorder annotation layers in the Syncfusion Angular Image Editor with bring forward, send backward, bring to front, and send to back z-order operations.
platform: ej2-angular
control: Z-order
documentation: ug
domainurl: ##DomainURL##
---

# Z-order in Angular Image Editor

The Image Editor supports `z-order` to adjust the positioning of annotations. It is a powerful tool that allows users to adjust the positioning of annotations. This feature is particularly useful for designing personalized templates like greeting cards or posters, where managing the layering of multiple annotations is crucial for a polished final product.
 
Types of adjustment in the Image Editor `z-order` support:

* [`bringForward`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#bringforward) - Switch the selected annotation with the annotation one layer ahead of it.

* [`sendBackward`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#sendbackward) - Switch the selected annotation with the annotation one layer behind it.

* [`bringToFront`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#bringtofront) - Move the selected annotation ahead of all other annotations.

* [`sendToBack`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#sendtoback) - Move the selected annotation behind all other annotations.

The following example demonstrates `z-order` support.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs40/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs40/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs40" %}