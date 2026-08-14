---
layout: post
title: JSON Data Binding with DatePicker in Angular | Syncfusion®
description: Learn how to bind JSON data to the Syncfusion Angular DatePicker by parsing ISO-formatted date strings and assigning them to the value property.
platform: ej2-angular
control: Json data binding 
documentation: ug
domainurl: ##DomainURL##
---

# How to JSON data binding with DatePicker in Angular DatePicker

In most of the real cases, the model data will be available with JSON format only.
Here we have showcased DatePicker component by setting JSON string to value property.
In this JSON, we have used ISO formatted date string which is frequently used date format to get proper date and time value without any misreading.
Also our DatePicker component supports the ISO formatted date value, so parsed JSON value can be directly set to DatePicker model.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datepicker/json-bind-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/json-bind-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/json-bind-cs1" %}
