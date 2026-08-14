---
layout: post
title: How to two-way binding in Angular DatePicker | Syncfusion®
description: Learn how to achieve two-way binding in the Syncfusion Angular DatePicker using ngModel and property binding to keep the input in sync.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# How to two-way binding in Angular DatePicker

The following example demonstrates how to achieve **two-way binding** by binding the **value** to the first DatePicker component by using property binding and binding the model data using **ngModel** to the second DatePicker component. The **value** of the DatePicker will get change, when their is any change in the property value or model value.

> The two-way binding can also be achieved only by using **property binding** or **model binding** in the DatePicker component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datepicker/two-way-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/two-way-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/two-way-cs1" %}
