---
layout: post
title: Customize thumbnails in Angular File Manager | Syncfusion
description: Learn how to customize thumbnails in the Angular File Manager by adding your own icons for file types and folders in the LargeIcons view.
control: File Manager
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# How to customize thumbnails in Angular File Manager

The File Manager component allows you to replace the default file and folder icons with custom thumbnails to enhance visual recognition or match your application's design theme. This is controlled through the [showThumbnail](https://ej2.syncfusion.com/angular/documentation/api/file-manager#showthumbnail) property.

The following example demonstrates how to implement custom icon thumbnails in the File Manager's large icons view:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/custom-thumbnail-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/custom-thumbnail-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/custom-thumbnail-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/custom-thumbnail-cs1" %}