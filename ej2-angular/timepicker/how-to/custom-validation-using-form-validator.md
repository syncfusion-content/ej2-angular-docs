---
layout: post
title: Custom validation using form validator in Angular Timepicker component | Syncfusion
description: Learn here all about Custom validation using form validator in Syncfusion Angular Timepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom validation using form validator 
documentation: ug
domainurl: ##DomainURL##
---

# Custom validation using form validator in Angular Timepicker component

The client side validation takes place in the browser to avoid the waiting time to receive the response from sever. It validates the form elements to provide the better feedback messages to correct the every fields before the form submission.

To achieve the client side validation in a TimePicker component by using `FormValidator` function. It provides an option to customize the feedback error messages to the corresponding fields to take action to resolve the issue.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/timepicker/getting-started-cs5/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/getting-started-cs5" %}