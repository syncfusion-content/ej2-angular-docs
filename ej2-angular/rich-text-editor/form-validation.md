---
layout: post
title: Form Validation in Angular Rich Text editor component | Syncfusion
description: Learn here all about Form Validation in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Form Validation 
documentation: ug
domainurl: ##DomainURL##
---

# Form Validation in Angular Rich Text Editor Component

The Rich Text Editor supports both the reactive and template-driven form-building technologies.

## Template Driven Forms

The template-drive forms use the `angular` directives in view to handle the forms controls. To enable the template-driven, import the FormsModule into corresponding app component.

For more details about template-driven
forms, refer to:<https://angular.io/guide/forms#template-driven-forms>.

Mention the `name` attribute to Rich Text Editor element that can be used to identify the form element. To register a Rich Text Editor element to ngForm, give the ngModel to it. So, the FormsModule will automatically detect the Rich Text Editor as a form element. After that, the Rich Text Editor value will be selected based on the ngModel value.

The following example demonstrates how to achieve a two-way data binding.

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

The reactive forms use the reactive model-driven technique to handle form data between the component and view. So, it is called as `model-driven` forms. It listens the form data changes between App component and view also returns the valid states and values of form elements.

For more details about Reactive Forms, refer to: <https://angular.io/guide/reactive-forms>.

For the reactive forms, import a ReactiveFormsModule into app module as well as the FormGroup,FormControl should be imported to app component. The FormGroup is used to declare `formGroupName` for the form group and the FormControl is used to declare `formControlName` for form controls. You can declare the formControlName to Rich Text Editor a value object must be created to the FormGroup and each value will be the default value of the form control.

The following example demonstrates how to use the reactive forms.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/form-support-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/form-support-cs2" %}