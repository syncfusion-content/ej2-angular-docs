---
layout: post
title: Two way binding in Angular Timepicker component | Syncfusion
description: Learn here all about Two way binding in Syncfusion Angular Timepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# Two way binding in Angular Timepicker component

The following example demonstrates how to achieve **two-way binding** by binding the **value** to the first TimePicker component by using property binding and binding the model data using **ngModel** to the second TimePicker component. The **value** of the TimePicker will get change, when their is any change in the property value or model value.

> The two-way binding can also be achieved only by using **property binding** or **model binding** in the TimePicker component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/timepicker/two-way-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/two-way-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/two-way-cs1" %}
