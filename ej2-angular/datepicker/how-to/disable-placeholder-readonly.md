---
layout: post
title: How to disable, set placeholder, read-only in Angular DatePicker | Syncfusion®
description: Learn how to configure the Syncfusion Angular DatePicker as disabled, read-only, or with a custom placeholder using built-in properties.
platform: ej2-angular
control: Disable placeholder readonly 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable, placeholder, read-only in Angular DatePicker

Property | Purpose
-----|-----
[`enabled`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#enabled) | The component can be restricted on a page, by setting enabled value as false which will disable the component completely from all user interactions including in form post action.
[`placeholder`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#placeholder) | Using `placeholder` you can display a short hint in the input element.
[`readonly`](https://ej2.syncfusion.com/angular/documentation/api/datepicker#readonly)       | set `readonly` to stop editing the value in the input, but value can be included when form submit.

The following example demonstrates how to achieve the above described properties in the DatePicker.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datepicker/disable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/disable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/disable-cs1" %}
