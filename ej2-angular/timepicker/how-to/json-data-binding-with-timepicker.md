---
layout: post
title: JSON Data Binding with TimePicker in Angular | Syncfusion®
description: Learn how to bind JSON data to the Syncfusion Angular TimePicker by parsing ISO-formatted time strings into the value property.
platform: ej2-angular
control: Json data binding with timepicker 
documentation: ug
domainurl: ##DomainURL##
---

# How to JSON data binding with TimePicker in Angular TimePicker

In most of the real cases, the model data will be available with JSON format only. Here we have showcased TimePicker component by setting JSON string to value property.
In this JSON, we have used ISO formatted date string which is frequently used date format to get proper date and time value without any misreading.
Also our TimePicker component supports the ISO formatted date value, so parsed JSON value can be directly set to TimePicker model.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/timepicker/json-bind-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/timepicker/json-bind-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/timepicker/json-bind-cs1" %}