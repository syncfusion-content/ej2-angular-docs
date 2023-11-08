---
layout: post
title: Form support in Angular Multi Select Component | Syncfusion
description: Learn here all about Form support in Syncfusion Angular Multi Select Component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form Support 
documentation: ug
domainurl: ##DomainURL##
---

# Form support in Angular Multi Select Component

The MultiSelect supports both the reactive and template-driven form-building technologies.

## Template-Driven Forms

The template-drive forms uses the `ng` directives in view to handle the forms controls.
To enable the template-driven,  import the FormsModule into corresponding app component.

For more details about template-driven Forms refer to:<https://angular.io/guide/forms#template-driven-forms>.

Mention the `name` attribute to MultiSelect element which will be used to identify the
form element. To register an MultiSelect element to ngForm,  give the ngModel  to it
so the FormsModule will  automatically detect the MultiSelect as a form element. After that, the MultiSelect value will be selected based on the ngModel value.

The following example  demonstrates how to achieve a two-way data binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/form-support-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/form-support-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/form-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/form-support-cs1" %}

## Reactive Forms

The reactive forms uses the reactive model-driven technique to handle form data between component and view, due to that we also call it as the `model-driven` forms. It's listen the form data changes between App component and view also returns the valid states and values of form elements.

For more details about Reactive Forms refer: <https://angular.io/guide/reactive-forms>.

For the reactive forms you should import a ReactiveFormsModule into app module as well as the FormGroup,FormControl should be imported to app component. The FormGroup is used to declare `formGroupName` for the form and the FormControl is used to declare `formControlName` for form controls.
You can declare the formControlName to MultiSelect as usual.then,you must create a value object to the FormGroup and each value will be the default value of the form control.

The following example demonstrates  how to use the reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/multiselect/reactive-form-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/multiselect/reactive-form-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/reactive-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/reactive-form-cs1" %}