---
layout: post
title: Check the mime type of file before upload it in Angular Uploader component | Syncfusion
description: Learn here all about Check the mime type of file before upload it in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Check the mime type of file before upload it 
documentation: ug
domainurl: ##DomainURL##
---

# Check the MIME type of file before uploading in Angular Uploader component

By using the [uploading](https://ej2.syncfusion.com/angular/documentation/api/uploader/#uploading) event, you can retrieve the file MIME type before the upload process begins on the server.
In the following example, the file MIME type is displayed in an alert dialog before the file starts uploading.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/mime-type-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/mime-type-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/mime-type-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
