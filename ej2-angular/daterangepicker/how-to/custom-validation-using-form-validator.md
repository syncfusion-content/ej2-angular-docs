---
layout: post
title: Custom Validation with FormValidator in DateRangePicker | Syncfusion®
description: Learn how to add custom validation rules to the Syncfusion Angular DateRangePicker in template-driven or reactive forms using the FormValidator.
platform: ej2-angular
control: Custom validation using form validator 
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom validation using FormValidator in Angular DateRangePicker

The client side validation takes place in the browser to avoid the waiting time to receive the response from sever. It validates the form elements to provide the better feedback messages to correct the every fields before the form submission.

The following sample demonstrate how to achieve the client side validation in DateRangePicker component by using `FormValidator` function. It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/daterangepicker/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/how-to-cs1" %}
