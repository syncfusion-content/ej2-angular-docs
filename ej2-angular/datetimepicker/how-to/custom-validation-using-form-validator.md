---
layout: post
title: Custom Validation with FormValidator in DateTime Picker | Syncfusion®
description: Learn how to add custom validation rules to the Syncfusion Angular DateTime Picker in template-driven or reactive forms using the FormValidator.
platform: ej2-angular
control: Custom validation using form validator 
documentation: ug
domainurl: ##DomainURL##
---

# How to add custom validation using FormValidator in Angular DateTime Picker

The client side validation takes place in the browser to avoid the waiting time to receive the response from sever. It validates the form elements to provide the better feedback messages to correct the every fields before the form submission.

To achieve the client side validation in a DateTimePicker component by using `FormValidator` function. It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datetimepicker/how-to-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/how-to-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/how-to-cs1" %}