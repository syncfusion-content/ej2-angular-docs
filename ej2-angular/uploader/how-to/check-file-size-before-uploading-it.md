---
layout: post
title: How to check file size before upload in Angular Uploader | Syncfusion
description: Read the byte size of files in the Angular Uploader before upload using the uploading event and the bytesToSize helper to display values in KB or MB.
platform: ej2-angular
control: Check file size before uploading it 
documentation: ug
domainurl: ##DomainURL##
---

# How to check file size before upload in Angular Uploader

Use the [uploading](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#uploading) event to obtain file sizes before uploading to the server. The `args.fileData` object reports size in bytes; convert it to `KB` or `MB` with the [bytesToSize](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#bytestosize) method on the `UploaderComponent` instance.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/check-file-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/check-file-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/check-file-size-cs1" %}

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
