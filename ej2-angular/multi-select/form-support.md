---
layout: post
title: Form support in Angular Multi select component | Syncfusion
description: Learn here all about Form support in Syncfusion Angular Multi select component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form support 
documentation: ug
domainurl: ##DomainURL##
---

# Form support in Angular MultiSelect component

The MultiSelect component supports both reactive and template-driven form-building technologies, enabling seamless integration with Angular's form handling mechanisms.

## Template-Driven Forms

Template-driven forms use `ng` directives in the view to handle form controls.
To enable template-driven forms, import the FormsModule into the corresponding app component.

For more details about template-driven forms, refer to: <https://angular.io/guide/forms#template-driven-forms>.

Add the `name` attribute to the MultiSelect element to identify the form element. To register a MultiSelect element with ngForm, provide the ngModel directive so the FormsModule automatically detects the MultiSelect as a form element. The MultiSelect value will be selected based on the ngModel value, enabling two-way data binding.

The following example demonstrates how to achieve two-way data binding:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/form-support-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/form-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/form-support-cs1" %}

## Reactive Forms

Reactive forms use the reactive model-driven technique to handle form data between component and view, also called model-driven forms. This approach listens to form data changes between the app component and view, returning the valid states and values of form elements.

For more details about reactive forms, refer to: <https://angular.io/guide/reactive-forms>.

For reactive forms, import ReactiveFormsModule and Additionally, import FormGroup and FormControl into the app component. FormGroup declares the `formGroupName` for the form, and FormControl declares the `formControlName` for form controls.
Declare the formControlName for the MultiSelect as usual, then create a value object for the FormGroup where each value represents the default value of the form control.

The following example demonstrates how to use reactive forms:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/reactive-form-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/reactive-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/reactive-form-cs1" %}