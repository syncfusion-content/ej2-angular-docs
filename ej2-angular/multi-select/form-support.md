---
layout: post
title: Form Support in Angular MultiSelect Dropdown | Syncfusion
description: Learn here all about Form support in Syncfusion  Angular MultiSelect Dropdown component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form support 
documentation: ug
domainurl: ##DomainURL##
---

# Form Support in Angular MultiSelect Dropdown

The  Angular MultiSelect Dropdown component supports both reactive and template-driven form-building technologies, enabling seamless integration with Angular's form handling mechanisms.

## Template-Driven Forms

Template-driven forms use `ng` directives in the view to handle form controls.
To enable template-driven forms, import the FormsModule into the corresponding app component.

For more details about template-driven forms, refer to: <https://angular.io/guide/forms#template-driven-forms>.

Add the `name` attribute to the  Angular MultiSelect Dropdown element to identify it within the form. To register a  Angular MultiSelect Dropdown element with `ngForm`, provide the `ngModel` directive so the `FormsModule` automatically detects the  Angular MultiSelect Dropdown as a form control. The  Angular MultiSelect Dropdown value is selected based on the `ngModel` value, enabling two-way data binding.

The following example demonstrates how to achieve two-way data binding:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
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

For reactive forms, import `ReactiveFormsModule`. Additionally, import `FormGroup` and `FormControl` into the app component. `FormGroup` represents the `formGroupName` for the form, and `FormControl` represents the `formControlName` for form controls.

Declare the `formControlName` for the  Angular MultiSelect Dropdown as usual, then create a value object for the `FormGroup` where each value represents the default value of the form control.

The following example demonstrates how to use reactive forms:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/multiselect/reactive-form-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/multiselect/reactive-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/multiselect/reactive-form-cs1" %}