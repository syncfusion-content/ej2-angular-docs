---
layout: post
title: Hide default drop area in Angular Uploader component | Syncfusion
description: Learn here all about Hide default drop area in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Hide default drop area 
documentation: ug
domainurl: ##DomainURL##
---

# Hide default drop area in Angular Uploader component

You can hide the default drop area by overriding the corresponding Uploader component styles. In the following example, the styles listed below are overridden to conceal the default drop area:

* `.e-upload.e-control` — Main Uploader container
* `.e-upload .e-file-select` — File selection area
* `.e-upload .e-file-drop` — Drag-and-drop zone

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/hide-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/hide-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/hide-drop-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
