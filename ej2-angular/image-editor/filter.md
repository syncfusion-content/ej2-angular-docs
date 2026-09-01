---
layout: post
title: Filter in Angular Image Editor | Syncfusion
description: Apply image filters in the Syncfusion Angular Image Editor such as chrome, cold, warm, sepia, invert, and grayscale with the applyImageFilter method.
platform: ej2-angular
control: Filter 
documentation: ug
domainurl: ##DomainURL##
---

# Filter in Angular Image Editor

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, invert, and grayscale. This can be done by using either the toolbar or the [`applyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#applyimagefilter) method, which takes a single parameter: the filter applied to an image.

## Apply filter effect

The [`applyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#applyimagefilter) method is utilized to apply filters to an image. By passing the desired filter type as the first parameter of the method, specified as [`ImageFilterOption`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/imagefilteroption), the method applies the corresponding filter to the image. This allows for easy and convenient application of various filters to enhance or modify the image based on the chosen filter type.

The supported `ImageFilterOption` values are: `Default`, `Chrome`, `Cold`, `Warm`, `Grayscale`, `Sepia`, and `Invert`.

* filterOption: Specifies the filter option to apply to the image.

In the toolbar, the default filter can be applied by clicking the Filter option in the toolbar and picking the Default filter.

In the following example, you can use the `applyImageFilter` method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs23/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs23/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs23" %}

## Image filtering event 

The [`imageFiltering`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#imagefiltering) event is triggered when a filter is applied to the image. This event is passed an object that contains information about the filtering event, such as the type of filtering. 

The parameter available in the `ImageFilterEventArgs` event is, 

ImageFilterEventArgs.Filter - The type of filtering as ImageFilterOption to be applied in the image editor. 

ImageFilterEventArgs.Cancel – Specifies to cancel the filtering action. 
