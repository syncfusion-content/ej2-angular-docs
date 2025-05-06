---
layout: post
title: Disable placeholder readonly in Angular DatePicker Component | Syncfusion
description: Learn here all about disable placeholder readonly support in Syncfusion Essential Angular DatePicker component, it's elements and more.
platform: ej2-angular
control: Disable placeholder readonly 
documentation: ug
domainurl: ##DomainURL##
---

# Disable placeholder readonly in Angular DatePicker Component

Property | Purpose
-----|-----
[`enabled`](https://ej2.syncfusion.com/angular/documentation/api/datepicker/#enabled) | The component can be restricted on a page, by setting enabled value as false which will disable the component completely from all user interactions including in form post action.
[`placeholder`](https://ej2.syncfusion.com/angular/documentation/api/datepicke/r#placeholder) | Using `placeholder` you can display a short hint in the input element.
[`readonly`](https://ej2.syncfusion.com/angular/documentation/api/datepicker/#readonly)       | set `readonly` to stop editing the value in the input, but value can be included when form submit.

The following example demonstrates how to achieve the above described properties in the DatePicker.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/disable-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/disable-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/disable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datepicker/disable-cs1" %}
