---
layout: post
title: How to perform an invisible upload in Angular Uploader | Syncfusion
description: Perform an invisible upload in the Angular Uploader by handling the selected event and disabling the default file list, so files upload silently.
platform: ej2-angular
control: Achieve invisible upload 
documentation: ug
domainurl: ##DomainURL##
---

# How to perform an invisible upload in Angular Uploader

Perform an invisible upload by handling the uploader's `selected` event to suppress the default file list while the upload proceeds automatically. Because `autoUpload` is `true` by default, the selected files are uploaded automatically once selected; to hide the default file list, set `args.cancel = true` inside the `selected` event handler and render a custom preview instead. Refer to the example below.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/invisible-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/invisible-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/invisible-cs1" %}

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
