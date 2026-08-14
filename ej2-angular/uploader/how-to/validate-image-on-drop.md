---
layout: post
title: How to validate image on drop in Angular Uploader | Syncfusion
description: Validate image files in the Angular Uploader on drag-and-drop by filtering extensions in the selected event for PNG, JPG, BMP, GIF, and TIFF formats.
platform: ej2-angular
control: Validate image on drop 
documentation: ug
domainurl: ##DomainURL##
---

# How to validate image on drop in Angular Uploader

The Uploader component allows you to upload all image types by setting `image/*` to the [allowedExtensions](https://ej2.syncfusion.com/angular/documentation/api/uploader/#allowedextensions) property.
You can set this directly to the `accept` attribute of the Uploader element.

By default, this validation works when selecting files via the browse button. However, validation is not enforced when dragging and dropping files. You can implement manual validation for drag-and-drop files by handling the `selected` event and filtering file types within your application.

In the following example, image files are validated using the `image/*` filter. Users can drag and drop image files with extensions PNG, JPG, BMP, GIF, and TIFF to upload them.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/validate-image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/validate-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/validate-image-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
