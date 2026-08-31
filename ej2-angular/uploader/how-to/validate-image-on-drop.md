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

The Uploader component allows you to upload all image types by setting `image/*` to the [allowedExtensions](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#allowedextensions) property.
You can set this directly to the `accept` attribute of the Uploader element.

By default, this validation works when selecting files via the browse button. However, it is not enforced on dragged-and-dropped files. You can implement manual validation for drops by handling the `selected` event, checking each file's extension against an allow-list, marking disallowed entries, and setting `args.isModified = true` so the Uploader reflects the modified list.

In the following example, dropped files are validated against an `image/*` allow-list of PNG, JPG/JPEG, GIF, TIFF, and BPG extensions. Browse-button selections still rely on `allowedExtensions`/`accept`; the manual check applies only to drops.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/validate-image-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/validate-image-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/validate-image-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to validate image files on drag-and-drop.
