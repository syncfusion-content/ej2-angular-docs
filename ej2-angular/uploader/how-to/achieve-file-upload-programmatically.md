---
layout: post
title: Achieve file upload programmatically in Angular Uploader component | Syncfusion
description: Learn here all about Achieve file upload programmatically in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Achieve file upload programmatically 
documentation: ug
domainurl: ##DomainURL##
---

# Achieve file upload programmatically in Angular Uploader component

You can upload a file programmatically using [upload](https://ej2.syncfusion.com/angular/documentation/api/uploader/#upload) method.
The selected files data, get from [getFilesData](https://ej2.syncfusion.com/angular/documentation/api/uploader/#getfilesdata) public method in uploader.

The upload method behaves differently based on its arguments.
* If this method receives any files as arguments, those files only start to upload.
* If it has no argument then all the selected files are will start to upload.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/dynamic-upload-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/dynamic-upload-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/dynamic-upload-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
