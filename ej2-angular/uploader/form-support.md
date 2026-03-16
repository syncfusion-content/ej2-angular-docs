---
layout: post
title: Form Support in Angular Uploader Component | Syncfusion
description: Learn here all about form support in Syncfusion Angular Uploader component, it's elements, and more.
platform: ej2-angular
control: Form support 
documentation: ug
domainurl: ##DomainURL##
---

# Form support in Angular Uploader component

The Uploader component integrates seamlessly with HTML forms, functioning like a standard file input.
The following configuration is required to use the Uploader within a form:

* Set `saveUrl` and `removeUrl` to `null`.
* Disable `autoUpload`.
* Add a `name` attribute to the input element.

When the form is submitted, selected or dropped files are received as a collection in the form action.
The form action handles server-side operations for file upload processing.
Resetting the form clears the file list and associated data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/formsupport-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/formsupport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/formsupport-cs1" %}

## Template-driven forms

Use the `ngModel` directive to bind the model to the Uploader in template-driven forms.
For more information, refer to the [Angular Documentation](https://v17.angular.io/guide/forms#template-driven-forms).

The following example demonstrates how to integrate the Uploader component with required validation in a template-driven form:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/template-driven-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/template-driven-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/template-driven-cs1" %}

## Reactive forms

You can integrate the Uploader component within reactive forms.
Reactive forms are created using the `FormGroup` class.
For more information, refer to the [Angular Documentation](https://v17.angular.io/guide/reactive-forms).

The following example demonstrates how to integrate the Uploader component with required validation in a reactive form:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/uploader/reactive-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/reactive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/reactive-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to browse the files which you want to upload to the server.
