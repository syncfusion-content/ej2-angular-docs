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

The Calendar supports implementing two-way data binding between parent and child components by combining property binding and custom event binding. In this approach, the parent component passes data to the child component, and the child component notifies the parent when the value changes.

To create a custom event, create an instance of Angular's `EventEmitter` class and decorate it with @Output. When the Calendar value changes, the child component emits the updated value, allowing the parent component to synchronize its data with the child component.

In the following example, **property binding** is used to pass data from the parent component to the child component through the [@input](https://v17.angular.io/api/core/Directive#inputs) decorator.

**Custom event binding** is used to send updated values from the child component to the parent component through the [@output](https://v17.angular.io/api/core/Directive#outputs) decorator and an EventEmitter instance.

This pattern manually implements two-way data synchronization between the parent and child components by combining [@input](https://v17.angular.io/api/core/Directive#inputs) and [@output](https://v17.angular.io/api/core/Directive#outputs).

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/custom-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/custom-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/custom-binding-cs1" %}