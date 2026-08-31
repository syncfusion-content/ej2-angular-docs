---
layout: post
title: How to customize progress bar in Angular Uploader | Syncfusion
description: Customize the Angular Uploader progress bar by overriding its CSS to change the indicator size, color, and background to match your app design.
platform: ej2-angular
control: Customize progressbar 
documentation: ug
domainurl: ##DomainURL##
---

# How to customize progress bar in Angular Uploader

You can customize the progress bar's size, color, and background by overriding the default Uploader component styles. The progress bar is styled via the `.e-upload-progress` and `.e-progress-inner-wrap` classes, which can be overridden in the component's stylesheet. Refer to the following example to apply custom styling to the progress indicator.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/progressbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/progressbar-cs1/src/main.ts %}
{% endhighlight %}

{% highlight css tabtitle="index.css" %}
{% include code-snippet/uploader/progressbar-cs1/src/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/progressbar-cs1" %}

> You can also explore the [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. Explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse and select the files which you want to upload to the server.
