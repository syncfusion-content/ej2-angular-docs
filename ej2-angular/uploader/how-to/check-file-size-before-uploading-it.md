---
layout: post
title: Check file size before uploading it in Angular Uploader component | Syncfusion
description: Learn here all about Check file size before uploading it in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Check file size before uploading it 
documentation: ug
domainurl: ##DomainURL##
---

# Check File Size Before Uploading in Angular Uploader Component

Use the [uploading](https://ej2.syncfusion.com/angular/documentation/api/uploader/#uploading) event to obtain file sizes before uploading to the server. The `file` object reports size in bytes; convert it to `KB` or `MB` with the [bytesToSize](https://ej2.syncfusion.com/angular/documentation/api/uploader/#bytestosize) method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/check-file-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/check-file-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/check-file-size-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
