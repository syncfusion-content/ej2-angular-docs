---
layout: post
title: Use custom event emitter in Angular DateTime Picker | Syncfusion®
description: Learn how to use a custom event emitter in the Syncfusion Angular DateTime Picker to share selected values between parent and child components.
platform: ej2-angular
control: Custom event emitter 
documentation: ug
domainurl: ##DomainURL##
---

# How to use custom event emitter in Angular DateTime Picker

The **two-way binding** in DateTimePicker can also be achieved using the custom event binding and property binding in the controls present in two different components. To create custom event, we need to create an instance of `event emitter`.

In the following example, **property binding** is used to share the data from the parent component to the child component using [@input](https://angular.io/api/core/Directive#inputs) directive and **custom event binding** is used to share the data from the child component to the parent component by using [@output](https://angular.io/api/core/Directive#outputs) directive.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datetimepicker/custom-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/custom-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/custom-binding-cs1" %}