---
layout: post
title: JSON Data Binding with DateTimePicker in Angular | Syncfusion®
description: Learn how to bind JSON data to the Syncfusion Angular DateTime Picker by parsing ISO-formatted date strings into the value property.
platform: ej2-angular
control: Json data binding with datetimepicker 
documentation: ug
domainurl: ##DomainURL##
---

# How to JSON data binding with DateTimePicker in Angular DateTime Picker

In most of the real cases, the model data will be available with JSON format only.
Here we have showcased DateTimePicker component by setting JSON string to value property.
In this JSON, we have used ISO formatted date string which is frequently used date format to get proper date and time value without any misreading.
Also our DateTimePicker component supports the ISO formatted date value, so parsed JSON value can be directly set to DateTimePicker model.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datetimepicker/json-bind-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/json-bind-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/json-bind-cs1" %}