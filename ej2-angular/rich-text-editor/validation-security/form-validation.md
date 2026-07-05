---
layout: post
title: Form Validation in Angular Rich Text editor component | Syncfusion
description: Learn how to Integrate and Validate the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form Validation
documentation: ug
domainurl: ##DomainURL##
---

# Form Validation in Angular Rich Text Editor Component

The Syncfusion Angular Rich Text Editor supports both template-driven and reactive forms, enabling seamless integration with Angular’s form-building technologies. It supports two-way data binding, validation, and dynamic control for enabling or disabling the editor, making it ideal for capturing and managing rich text content within forms.

## Template-Driven Forms

Template-driven forms use Angular directives in the view to handle form controls. To enable template-driven forms, import `FormsModule` into the corresponding app module.

For more details about template-driven forms, refer to <https://angular.io/guide/forms#template-driven-forms>.

Add the `name` attribute to the Rich Text Editor element to identify the form field. To register the Rich Text Editor with `ngForm`, bind `ngModel` to it. The `FormsModule` will then automatically detect the Rich Text Editor as a form element. After that, the Rich Text Editor value will be set based on the `ngModel` value.

The following example demonstrates two-way data binding with a template-driven form:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/form-support-cs1" %}

## Reactive Forms

Reactive forms use a model-driven technique to handle form data between the component and the view. They listen to form data changes between the App component and the view and also return the validity states and values of form elements.

For more details about Reactive Forms, refer to <https://angular.io/guide/reactive-forms>.

For reactive forms, import `ReactiveFormsModule` into the app module. Also, import `FormGroup` and `FormControl` into the App component. The `FormGroup` is used to bind the form using the `formGroup` directive, and the `FormControl` is used to bind individual controls using `formControlName`. When you assign `formControlName` to the Rich Text Editor, ensure that a corresponding control is created in the `FormGroup`, and its value will be the default value of the form control.

The following example demonstrates how to bind the Syncfusion Rich Text Editor to an Angular Reactive Form with primitive value binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/form-support-cs2" %}

## Disabling the Rich Text Editor Component in Reactive Forms (Angular 15+)

In Angular 15 and later, you can dynamically enable or disable the Syncfusion Rich Text Editor when using Reactive Forms. This is particularly useful when the editor’s availability depends on user actions, form validation states, or other conditions.

### Managing the Disabled State

With Angular’s `FormControl`, you can use the `disable()` and `enable()` methods to programmatically control the editor’s availability.

The following example demonstrates how to initialize the Rich Text Editor as a form control and toggle its disabled state dynamically.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/form-support-cs3" %}