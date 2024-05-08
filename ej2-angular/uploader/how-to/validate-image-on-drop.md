---
layout: post
title: Validate image on drop in Angular Uploader component | Syncfusion
description: Learn here all about Validate image on drop in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validate image on drop 
documentation: ug
domainurl: ##DomainURL##
---

# Validate image on drop in Angular Uploader component

The uploader component allows you to upload all type of images by setting **image/* ** to [allowedExtensions](https://ej2.syncfusion.com/angular/documentation/api/uploader/#allowedextensions) property.
You can directly set it to `accept` attribute of uploader element.

By default, the behavior is working with select a file using browse button. But, this behavior doesn’t support on drag and drop the files. You can handle this behavior manually using `selected` event by filtering the file types from application.

In the following example, validated image files using images/*. You are able to drag and drop the image files with extension of PNG, JPG, BPG, GIF and TIFF to upload it.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/validate-image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/validate-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/validate-image-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
