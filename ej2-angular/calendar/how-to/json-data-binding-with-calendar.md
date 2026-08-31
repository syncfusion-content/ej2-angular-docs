---
layout: post
title: JSON Data Binding with Calendar in Angular Calendar | Syncfusion®
description: Learn how to bind JSON data to the Syncfusion Angular Calendar by using an ISO-formatted date string assigned to the value property.
platform: ej2-angular
control: Json data binding with calendar 
documentation: ug
domainurl: ##DomainURL##
---

# How to JSON data binding with Calendar in Angular Calendar

In many applications, data is commonly available in JSON format. You can bind JSON data to the Calendar component by assigning an ISO-formatted date string to the value property.

ISO-formatted date strings provide a standardized representation of date and time values, helping to avoid format inconsistencies during parsing.

The Calendar component supports ISO-formatted date values, so the date value obtained from parsed JSON data can be assigned directly to the Calendar value property.

The following example demonstrates how to bind a date value from JSON data to the Calendar component.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/json-bind-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/json-bind-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/json-bind-cs1" %}