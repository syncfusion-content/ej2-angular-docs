---
layout: post
title: Form support in Angular DropDownList component | Syncfusion
description: Learn how to integrate the Syncfusion Angular DropDownList component with template-driven and reactive forms, including data binding and validation.
platform: ej2-angular
control: DropDownList
documentation: ug
domainurl: ##DomainURL##
---

# Form support in Angular DropDownList component

The DropDownList component supports both template-driven and reactive forms, which are the two primary form-building technologies in Angular.

## Template-Driven Forms

Template-driven forms use directives in the component template to build and manage form controls. To use this approach, import the `FormsModule` into the application's root `NgModule`.

For more details, refer to the official Angular guide on [Template-Driven Forms](https://angular.dev/guide/forms/template-driven-forms).

To integrate the DropDownList into a template-driven form, set the `name` attribute to uniquely identify the control. Then, use the `[(ngModel)]` directive for two-way data binding. This registers the DropDownList with `ngForm`, and its selected value will be synchronized with the model property bound to `ngModel`.

The following example demonstrates how to achieve two-way data binding in a template-driven form.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/form-support-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/form-support-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/form-support-cs1" %}

## Reactive Forms

Reactive forms use a model-driven technique to handle form data between the component and its template. This approach is also known as `model-driven` forms because it involves creating a form control model in the component class. This model listens for data changes and returns the values and validation status of the form controls.

For more details, refer to the official Angular guide on [Reactive Forms](https://angular.dev/guide/forms/reactive-forms).

To use reactive forms, import the `ReactiveFormsModule` into the application's root `NgModule`. In the component file, import `FormGroup` and `FormControl` from `@angular/forms`. The `FormGroup` provides a wrapper for a collection of form controls, while `FormControl` tracks the value and validation status of an individual control.

Assign a `formControlName` to the DropDownList element in the template. In the component class, define a `FormGroup` and a `FormControl` for the DropDownList. The `FormControl`'s initial value will serve as the default value for the DropDownList.

The following example demonstrates how to use the DropDownList component within a reactive form.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/dropdownlist/reactive-form-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/dropdownlist/reactive-form-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/dropdownlist/reactive-form-cs1" %}