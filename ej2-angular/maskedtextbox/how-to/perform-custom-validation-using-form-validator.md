---
layout: post
title: Perform custom validation using form validator in Angular Maskedtextbox component | Syncfusion
description: Learn here all about Perform custom validation using form validator in Syncfusion Angular Maskedtextbox component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Perform custom validation using form validator 
documentation: ug
domainurl: ##DomainURL##
---

# Perform custom validation using form validator in Angular Maskedtextbox component

To perform custom validation on the MaskedTextBox use the FormValidator along with custom validation rules.

In the following example, the MaskedTextBox is validated for invalid mobile number by adding custom validation in the rules collection of the FormValidator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maskedtextbox/getting-started-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maskedtextbox/getting-started-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maskedtextbox/getting-started-cs3" %}