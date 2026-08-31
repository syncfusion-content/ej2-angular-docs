---
layout: post
title: Form Support in Angular Uploader | Syncfusion
description: Integrate the Angular Uploader with template-driven and reactive HTML forms by setting saveUrl, removeUrl, autoUpload, and a name attribute for form submission.
platform: ej2-angular
control: Form support 
documentation: ug
domainurl: ##DomainURL##
---

# Form Support in Angular Uploader

The Uploader component integrates seamlessly with HTML forms, functioning like a standard file input.
The following configuration is required to use the Uploader within a form:

* Set `saveUrl` and `removeUrl` to `null`.
* Disable `autoUpload`.
* Add a `name` attribute to the `ejs-uploader` component (for example, `name="files"`).

When the form is submitted, selected or dropped files are posted to the form action under the key matching the Uploader's `name` attribute, and the server can read them from `Request.Files[<name>]` (or the equivalent posted-files collection for your platform).
The form action handles server-side operations for file upload processing.
Resetting the form—via a `<input type="reset">` button or a `form.reset()` call—clears the file list and the associated data.

The following sections include examples that also demonstrate required-field validation alongside the Uploader integration.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/formsupport-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/formsupport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/formsupport-cs1" %}

## Template-driven forms

Use the `ngModel` directive to bind the model to the Uploader in template-driven forms. Import `FormsModule` from `@angular/forms` into your component's `imports` array to enable `ngModel`.
For more information, refer to the [Angular Documentation](https://v17.angular.io/guide/forms#template-driven-forms).

The following example demonstrates how to integrate the Uploader component with required-field validation in a template-driven form:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/template-driven-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/template-driven-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/template-driven-cs1" %}

## Reactive forms

You can integrate the Uploader component within reactive forms, which are built using the `FormGroup` class from `@angular/forms`. Import `ReactiveFormsModule` into your component's `imports` array to enable reactive form bindings.
For more information, refer to the [Angular Documentation](https://v17.angular.io/guide/reactive-forms).

The following example shows the Uploader bound to a `FormGroup` control with required-field validation applied:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/uploader/reactive-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/uploader/reactive-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/uploader/reactive-cs1" %}

> You can also explore [Angular File Upload](https://www.syncfusion.com/angular-components/angular-file-upload) feature tour page for its groundbreaking features. You can also explore our [Angular File Upload example](https://ej2.syncfusion.com/angular/demos/#/material/uploader/default) to understand how to integrate the Uploader with HTML, template-driven, and reactive forms.
