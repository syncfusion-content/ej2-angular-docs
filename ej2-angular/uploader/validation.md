---
layout: post
title: Validation in Angular Uploader | Syncfusion
description: Restrict Angular Uploader selections by file extension and size using allowedExtensions, minFileSize, and maxFileSize, with validation on select and drop.
platform: ej2-angular
control: Validation 
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Angular Uploader

The Uploader component validates selected files by file extension and size using the `allowedExtensions`, `minFileSize`, and `maxFileSize` properties. Files can be validated before uploading to the server and excluded from the upload process if needed. You can also filter the native browser dialog by setting the `accept` attribute on the input element. Validation occurs during both file selection and drag-and-drop operations.

## File type

You can restrict file uploads to specific file types using the `allowedExtensions` property. Specify extensions as a comma-separated collection (for example, `.pdf,.doc,.docx`). The Uploader filters selected or dropped files against the specified types and processes only matching files. You can also enable validation by setting the `accept` attribute on the input element.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs12" %}

## File size

The Uploader component validates files based on their size, preventing uploads of files that are too large or too small. File size limits are specified in bytes using the `minFileSize` and `maxFileSize` properties (for example, `10000` equals 10 KB). By default, the minimum file size is 0 bytes and the maximum file size is 28.4 MB.

> The effective maximum upload size is also bounded by the server's request-size limit (for example, ASP.NET's `maxRequestLength`/`maxAllowedContentLength`), so a `maxFileSize` larger than that limit will still fail server-side.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs13" %}

## Maximum number of files

You can limit the number of files that can be uploaded using the `selected` event (typed as `SelectedEventArgs`). In the event arguments, retrieve the existing/already-added files using `getFilesData()` and the newly selected files from `args.filesData`. Modify the merged list as needed, assign the updated list to `args.modifiedFilesData`, and set `args.isModified = true` so the Uploader applies the modified list. The limit (shown as 5 in the example) is a configurable value.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs14" %}

## Duplicate files

You can prevent duplicate file uploads using the `selected` event. Compare the selected files against the existing file list and remove any duplicates before processing the upload.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/uploader-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs15" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/uploader/default) to understand how to validate files by extension and size.

## See also

* [Validate image/* on drop](./how-to/validate-image-on-drop)
* [Determine whether Uploader has file input (required validation)](./how-to/determine-whether-uploader-has-file-input)
* [Check file size before uploading it](./how-to/check-file-size-before-uploading-it)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload-it)
