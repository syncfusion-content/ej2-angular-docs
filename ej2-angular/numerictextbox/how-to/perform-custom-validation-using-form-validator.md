---
layout: post
title: Perform custom validation using form validator in Angular Numerictextbox component | Syncfusion
description: Learn here all about Perform custom validation using form validator in Syncfusion Angular Numerictextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Perform custom validation using form validator 
documentation: ug
domainurl: ##DomainURL##
---

# Perform custom validation using form validator in Angular Numerictextbox component

This section explains how to perform custom validation on the NumericTextBox using FormValidator. The NumericTextBox will be validated when the value changes or the user clicks the submit button.
Validation can be performed by adding custom validation in the rules collection of the FormValidator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/numerictextbox/custom-validation-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/numerictextbox/custom-validation-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/numerictextbox/custom-validation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/numerictextbox/custom-validation-cs1" %}