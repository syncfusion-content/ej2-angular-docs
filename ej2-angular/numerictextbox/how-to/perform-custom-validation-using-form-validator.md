---
layout: post
title: Perform custom validation using form validator in Angular Numerictextbox component | Syncfusion
description: Learn here all about Perform custom validation using form validator in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Perform custom validation using form validator 
documentation: ug
domainurl: ##DomainURL##
---

# Perform custom validation using form validator in Angular NumericTextBox component

Custom validation on the NumericTextBox can be implemented using the FormValidator component. Validation is triggered when the value changes or when the user submits the form. The following example shows how to add custom validation rules to the FormValidator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/custom-validation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/custom-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/custom-validation-cs1" %}