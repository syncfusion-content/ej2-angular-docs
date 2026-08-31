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

The following example demonstrates how to achieve **two-way binding** in the Calendar component by combining property binding with Angular's ngModel,m directive.

In this example, the **value** property is bound to one Calendar component, while **ngModel** is used to bind the same data model to another Calendar component. When the property value or model value changes, the Calendar value is automatically updated, keeping both components synchronized.

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
