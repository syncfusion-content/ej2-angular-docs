---
layout: post
title: How to use custom event emitter in Angular Calendar | Syncfusion®
description: Learn how to achieve two-way binding in the Syncfusion Angular Calendar using a custom event emitter with input and output directives.
platform: ej2-angular
control: Custom event emitter 
documentation: ug
domainurl: ##DomainURL##
---

# How to use custom event emitter in Angular Calendar

The **two-way binding** in Calendar can also be achieved using the custom event binding and property binding in the controls present in two different components. To create custom event, we need to create an instance of `event emitter`.

In the following example, **property binding** is used to share the data from the parent component to the child component using [@input](https://v17.angular.io/api/core/Directive#inputs) directive and **custom event binding** is used to share the data from the child component by using [@output](https://v17.angular.io/api/core/Directive#outputs) directive.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/custom-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/custom-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/custom-binding-cs1" %}