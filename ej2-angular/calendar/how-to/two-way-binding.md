---
layout: post
title: How to two-way binding in Angular Calendar | Syncfusion®
description: Learn how to achieve two-way binding in the Syncfusion Angular Calendar using property binding combined with ngModel for value updates.
platform: ej2-angular
control: Two way binding 
documentation: ug
domainurl: ##DomainURL##
---

# How to two-way binding in Angular Calendar

The following example demonstrates how to achieve **two-way binding** by binding the **value** to the first Calendar component by using property binding and binding the model data using **ngModel** by using model binding to the Calendar component. The **value** of the Calendar will get change, when their is any change in the property value or model value.

> The two-way binding can also be achieved only by using **property binding** or **model binding** in the Calendar component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/two-way-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/two-way-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/two-way-cs1" %}
