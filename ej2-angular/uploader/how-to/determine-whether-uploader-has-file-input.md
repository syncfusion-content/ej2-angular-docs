---
layout: post
title: Determine whether uploader has file input in Angular Uploader component | Syncfusion
description: Learn here all about Determine whether uploader has file input in Syncfusion Angular Uploader component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Determine whether uploader has file input 
documentation: ug
domainurl: ##DomainURL##
---

# Determine whether the Uploader has file input in Angular Uploader component

By setting the **required** attribute on the uploader input element, you can validate that the file input contains a value before submission.
In the following example, the **required** attribute is applied to the uploader input element, and a validation failure message is displayed using the `data-required-message` attribute.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/required-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/required-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/required-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-ui-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
