---
layout: post
title: How to customize button with HTML in Angular Uploader | Syncfusion
description: Replace the default Angular Uploader action buttons with custom HTML elements using the buttons property to render your own browse, upload, and clear controls.
platform: ej2-angular
control: Customize button with html element 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize button with HTML in Angular Uploader

The Uploader component allows you to customize the action buttons by using the [buttons](https://ej2.syncfusion.com/angular/documentation/api/uploader/index-default#buttons) property. The `buttons` object exposes `browse`, `upload`, and `clear` keys, each of which accepts either a string label or an HTML element. Refer to the following example for implementation details.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/custom-buttons-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/custom-buttons-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/custom-buttons-cs1" %}

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
