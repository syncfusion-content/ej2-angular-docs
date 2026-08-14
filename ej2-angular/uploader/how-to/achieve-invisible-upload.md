---
layout: post
title: How to perform an invisible upload in Angular Uploader | Syncfusion
description: Perform an invisible upload in the Angular Uploader by handling the selected event and disabling the default file list, so files upload silently in the background.
platform: ej2-angular
control: Achieve invisible upload 
documentation: ug
domainurl: ##DomainURL##
---

# How to perform an invisible upload in Angular Uploader

Implement invisible uploads by handling the uploader's `selected` event to trigger background uploads without showing the default file list. Refer to the example below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/invisible-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/invisible-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/invisible-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
