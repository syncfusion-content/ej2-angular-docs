---
layout: post
title: How to check MIME type before upload in Angular Uploader | Syncfusion
description: Inspect the MIME type of each file in the Angular Uploader before upload using the uploading event and surface it in an alert or your own validation flow.
platform: ej2-angular
control: Check the mime type of file before upload it 
documentation: ug
domainurl: ##DomainURL##
---

# How to check MIME type before upload in Angular Uploader

By using the [uploading](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#uploading) event, you can retrieve the file MIME type before the upload process begins on the server.
In the following example, the file MIME type is displayed in an alert dialog before the file starts uploading.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/mime-type-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/mime-type-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/mime-type-cs1" %}

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
