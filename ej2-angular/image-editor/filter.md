---
layout: post
title: Filter in ##Platform_Name## Image Editor component | Syncfusion
description: Learn here all about Open save in Syncfusion ##Platform_Name## Image Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Filter 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filters in the Angular Image Editor component

Filters are pre-defined effects that can be applied to an image to alter its appearance or mood. Image filters can be used to add visual interest or to enhance certain features of the image. Some common types of image filters include cold, warm, chrome, sepia, and invert. This can be done by either using the toolbar or the [`applyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#applyimagefilter) method which takes a single parameter: the filter applied to an image. 

## Apply filter effect

The [`applyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#applyimagefilter) method is utilized to apply filters to an image. By passing the desired filter type as the first parameter of the method, specified as [`ImageFilterOption`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/imageFilterOption/) the method applies the corresponding filter to the image. This allows for easy and convenient application of various filters to enhance or modify the image based on the chosen filter type.

* filterOption - Specifies the filter options to the image.

In the toolbar, the default filter can be applied by clicking the Filter option in the toolbar and picking the Default filter.

In the following example, you can using the [`applyImageFilter`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#applyimagefilter) method in the button click event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/image-editor/default-cs23/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/image-editor/default-cs23/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs23/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/image-editor/default-cs23" %}

## Image filtering event 

The [`imageFiltering`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imagefiltering) event is triggered when applying filtering on the image. This event is passed an object that contains information about the filtering event, such as the type of filtering. 

The parameter available in the [`ImageFilterEventArgs`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/#imagefiltering) event is, 

ImageFilterEventArgs.Filter - The type of filtering as ImageFilterOption to be applied in the image editor. 

ImageFilterEventArgs.Cancel – Specifies to cancel the filtering action. 
