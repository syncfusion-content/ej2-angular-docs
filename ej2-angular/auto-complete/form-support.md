---
layout: post
title: Form Support in Angular AutoComplete | Syncfusion®
description: Integrate Angular AutoComplete with template-driven and reactive forms using ngModel or formControlName for two-way data binding and validation.
platform: ej2-angular
control: Form support 
documentation: ug
domainurl: ##DomainURL##
---

# Form Support in Angular AutoComplete

The AutoComplete supports both the reactive and template-driven form-building technologies.

## Template-Driven Forms

Template-driven forms use `ng` directives in the view to handle form controls. To enable template-driven forms, import `FormsModule` into the corresponding app component.

For more details about template-driven forms, refer to: <https://angular.io/guide/forms#template-driven-forms>.

Add the `name` attribute to the AutoComplete element to identify it within the form. To register the AutoComplete element with `ngForm`, provide the `ngModel` directive so the `FormsModule` automatically detects the AutoComplete as a form control. The AutoComplete value is then selected based on the `ngModel` value, enabling two-way data binding.

The following example demonstrates how to achieve two-way data binding.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/form-support-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/form-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/form-support-cs1" %}

## Reactive Forms

Reactive forms use the reactive model-driven technique to handle form data between the component and the view; this approach is also known as `model-driven` forms. It listens for form data changes between the app component and the view, and returns the valid states and values of the form elements.

For more details about reactive forms, refer to: <https://angular.io/guide/reactive-forms>.

For more details about Reactive Forms refer: <https://angular.io/guide/reactive-forms>.

For the reactive forms you should import a ReactiveFormsModule into app module as well as the FormGroup,FormControl should be imported to app component. The FormGroup is used to declare `formGroupName` for the form and the FormControl is used to declare `formControlName` for form controls.
You can declare the formControlName to AutoComplete as usual. then,you must create a value object to the FormGroup and each value will be the default value of the form control.

The following example demonstrates how to use reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/autocomplete/reactive-form-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/autocomplete/reactive-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/autocomplete/reactive-form-cs1" %}