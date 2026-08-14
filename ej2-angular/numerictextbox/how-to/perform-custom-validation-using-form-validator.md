---
layout: post
title: How to validate using FormValidator in Angular Numeric Textbox | Syncfusion
description: Add custom validation rules to the Angular Numeric Textbox using the FormValidator component to enforce required values on change or form submit.
platform: ej2-angular
control: Perform custom validation using form validator 
documentation: ug
domainurl: ##DomainURL##
---

# How to validate using FormValidator in Angular Numeric Textbox

Custom validation on the NumericTextBox can be implemented using the FormValidator component. Validation is triggered when the value changes or when the user submits the form. The following example shows how to add custom validation rules to the FormValidator.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/numerictextbox/custom-validation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/custom-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/custom-validation-cs1" %}