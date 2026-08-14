---
layout: post
title: How to get total size of selected files in Angular Uploader | Syncfusion
description: Calculate the total size of selected files in the Angular Uploader using the selected event to sum file sizes before submitting the upload to the server.
platform: ej2-angular
control: Get the total size of selected files 
documentation: ug
domainurl: ##DomainURL##
---

# How to get total size of selected files in Angular Uploader

You can calculate the total size of selected files before uploading them to the server.
This functionality is achieved by using the `selected` event, which fires when files are selected. Refer to the following example to implement total file size calculation.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/file-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/file-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/file-size-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
