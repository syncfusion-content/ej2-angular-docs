---
layout: post
title: How to use reactive form with Angular DatePicker | Syncfusion®
description: Learn how to integrate the Syncfusion Angular DatePicker with Angular reactive forms using FormControl, FormGroup, and formControlName binding.
platform: ej2-angular
control: Reactive form 
documentation: ug
domainurl: ##DomainURL##
---

# How to use reactive form in Angular DatePicker

DatePicker is a form component and validation is playing vital role in forms to get the valid data.
Here to showcase the DatePicker with form validations we have used the reactive form.

* The reactive forms uses the reactive model-driven technique to handle form data between component and view, due to that we also call it as the model-driven forms.
It's listen the form data changes between App component and view, also it returns the valid states and values of form elements.

For more details about Reactive Forms refer: [`https://angular.io/guide/reactive-forms`](https://angular.io/guide/reactive-forms).

* For the reactive forms, import a `ReactiveFormsModule` into app module as well as the `FormGroup`,
`FormControl` should be imported to app component.
The `FormGroup` is used to declare `formGroupName` for the form and the `FormControl` is used to declare `formControlName` for form controls. Declare the `formControlName` to DatePicker component as usual.
Then, create a value object to the `FormGroup` and each value will be the default value of the form control.

The following example demonstrates how to use the reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datepicker/reactive-validator-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/reactive-validator-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/reactive-validator-cs1" %}