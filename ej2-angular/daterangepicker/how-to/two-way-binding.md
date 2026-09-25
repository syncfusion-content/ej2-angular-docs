---
layout: post
title: How to two-way binding in Angular DateRangePicker | Syncfusion®
description: Learn how to achieve two-way binding in the Syncfusion Angular DateRangePicker using ngModel and property binding for the start and end dates.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# How to two-way binding in Angular DateRangePicker

The following example demonstrates how to achieve **two-way binding** by binding the **value** to the first Angular DateRangePicker component by using property binding and binding the model data using **ngModel** to the second Angular DateRangePicker component. The **value** of the Angular DateRangePicker will get change, when their is any change in the property value or model value.

> The two-way binding can also be achieved only by using **property binding** or **model binding** in the Angular DateRangePicker component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/daterangepicker/two-way-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/two-way-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/two-way-cs1" %}
