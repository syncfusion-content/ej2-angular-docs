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

In most of the real cases, the model data will be available with JSON format only. Here we have showcased Calendar component by setting JSON string to value property. In this JSON, we have used ISO formatted date string which is frequently used date format to get proper date and time value without any misreading.
Also our Calendar component supports the ISO formatted date value, so parsed JSON value can be directly set to Calendar model.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/calendar/json-bind-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/calendar/json-bind-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/calendar/json-bind-cs1" %}