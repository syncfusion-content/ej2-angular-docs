---
layout: post
title: Custom event emitter in Angular Daterangepicker component | Syncfusion
description: Learn here all about Custom event emitter in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Custom event emitter 
documentation: ug
domainurl: ##DomainURL##
---

# Custom event emitter in Angular Daterangepicker component

The **two-way binding** in DateRangePicker can also be achieved using the custom event binding and property binding in the controls present in two different components. To create custom event, we need to create an instance of `event emitter`.

In the following example, **property binding** is used to share the data from the parent component to the child component using [@input](https://angular.io/api/core/Directive#inputs) directive and **custom event binding** is used to share the data from the child component to the parent component by using [@output](https://angular.io/api/core/Directive#outputs) directive.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/custom-binding-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/custom-binding-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/custom-binding-cs1" %}
