---
layout: post
title: Two way binding in Angular Daterangepicker component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Angular Daterangepicker component

The following example demonstrates how to achieve **two-way binding** by binding the **value** to the first DateRangePicker component by using property binding and binding the model data using **ngModel** to the second DateRangePicker component. The **value** of the DateRangePicker will get change, when their is any change in the property value or model value.

> The two-way binding can also be achieved only by using **property binding** or **model binding** in the DateRangePicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/two-way-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/two-way-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/two-way-cs1" %}
