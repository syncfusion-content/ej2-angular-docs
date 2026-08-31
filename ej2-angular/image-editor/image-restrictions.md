---
layout: post
title: Image Restrictions in Angular Image Editor | Syncfusion
description: Restrict uploaded images in the Syncfusion Angular Image Editor by allowed file extensions and minimum or maximum file size using the uploadSettings property.
platform: ej2-angular
control: Image Restrictions
documentation: ug
domainurl: ##DomainURL##
---

# Image Restrictions in Angular Image Editor

The Image Editor allows users to specify image extensions, as well as the minimum and maximum image sizes for uploaded or loaded images using the [`uploadSettings`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/index-default#uploadsettings) property. End users will receive a clear alert message if an uploaded image does not meet the defined criteria, ensuring a seamless and user-friendly upload experience.

`Note:` File restrictions apply when uploading images to the Image Editor, whether through the open method or the built-in uploader. If `uploadSettings` is not defined in the sample, the Image Editor, by default, allows files with `.jpg`, `.png`, `.svg`, `.webp`, and `.bmp` extensions, without any file size restrictions.

## Allowed image extensions

The Image Editor allows users to specify acceptable file extensions for uploaded images using the [`uploadSettings.allowedExtensions`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/uploadsettingsmodel#allowedextensions) property, ensuring that only supported formats, such as `.jpg`, `.png`, `.svg`, `.webp`, and `.bmp` are allowed. This helps maintain compatibility and prevents errors caused by unsupported file types.

`Note:` To specify allowed extensions in the upload settings, use the format `.png, .svg`, listing the permitted file types as a comma-separated string.

Here is an example of configuring allowed image extensions using the `uploadSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs57/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs57/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/image-editor/default-cs57" %}

## Minimum and maximum image size

The Image Editor allows users to specify the minimum and maximum size limits (in bytes) for uploaded image files by using the [`uploadSettings.minFileSize`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/uploadsettingsmodel#minfilesize) and [`uploadSettings.maxFileSize`](https://ej2.syncfusion.com/angular/documentation/api/image-editor/uploadsettingsmodel#maxfilesize) properties. This ensures that images meet specific requirements, maintaining consistency and preventing oversized or undersized files from being processed. By default, no file size restrictions are applied.

`Note:` Users can also upload images as base64 strings, in which case file extension validation is bypassed, but file size restrictions still apply.

Here is an example of configuring minimum and maximum image size limits using the `uploadSettings` property.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/image-editor/default-cs58/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/image-editor/default-cs58/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/image-editor/default-cs58" %}