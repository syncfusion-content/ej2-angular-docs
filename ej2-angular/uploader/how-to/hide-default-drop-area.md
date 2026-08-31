---
layout: post
title: How to hide default drop area in Angular Uploader | Syncfusion
description: Hide the default Angular Uploader drop zone by overriding .e-upload.e-control, .e-file-select, and .e-file-drop styles to keep only the browse button visible.
platform: ej2-angular
control: Hide default drop area 
documentation: ug
domainurl: ##DomainURL##
---

# How to hide default drop area in Angular Uploader

You can hide the default drop area by overriding the corresponding Uploader component styles. In the following example, the styles listed below are overridden to conceal the default drop area:

* `.e-control` — Main Uploader container
* `.e-control .e-file-select` — File selection area
* `.e-control .e-file-drop` — Drag-and-drop zone

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/hide-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/hide-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/hide-drop-cs1" %}

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
