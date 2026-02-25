---
layout: post
title: Validation in Angular Uploader component | Syncfusion
description: Learn here all about Validation in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Validation 
documentation: ug
domainurl: ##DomainURL##
---

# Validation in Angular Uploader component

The Uploader component validates selected files by file extension and size using the `allowedExtensions`, `minFileSize`, and `maxFileSize` properties. Files can be validated before uploading to the server and excluded from the upload process if needed. You can also validate files by setting HTML attributes on the input element. Validation occurs during both file selection and drag-and-drop operations.

## File type

You can restrict file uploads to specific file types using the `allowedExtensions` property. Specify extensions as a comma-separated collection (for example, `.pdf,.doc,.docx`). The Uploader filters selected or dropped files against the specified types and processes only matching files. You can also enable validation by setting the `accept` attribute on the input element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs12" %}

## File size

The Uploader component validates files based on their size, preventing uploads of files that are too large or too small. File size limits are specified in bytes using the `minFileSize` and `maxFileSize` properties. By default, the minimum file size is 0 bytes and the maximum file size is 28.4 MB.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs13" %}

## Maximum files count

You can limit the number of files that can be uploaded using the `selected` event. In the event arguments, retrieve the currently selected files using `getFilesData()`. Modify the file list as needed and assign the updated list to `eventArgs.modifiedFilesData`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
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
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/uploader-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/uploader-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/uploader-cs15" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/bootstrap5/uploader/default) to understand how to browse the files which you want to upload to the server.

## See Also

* [Validate image/* on drop](./how-to/validate-image-on-drop)
* [Determine whether uploader has file input (required validation)](./how-to/determine-whether-uploader-has-file-input)
* [Check file size before uploading it](./how-to/check-file-size-before-uploading-it)
* [Check the MIME type of file before uploading it](./how-to/check-the-mime-type-of-file-before-upload-it)
