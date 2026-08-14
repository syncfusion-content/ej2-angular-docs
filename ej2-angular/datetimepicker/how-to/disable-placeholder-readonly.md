---
layout: post
title: Disable, placeholder, read-only in Angular DateTime Picker | Syncfusion®
description: Learn how to configure the Syncfusion Angular DateTime Picker as disabled, read-only, or with a custom placeholder using built-in properties.
platform: ej2-angular
control: Disable placeholder readonly 
documentation: ug
domainurl: ##DomainURL##
---

# How to disable, placeholder, read-only in Angular DateTime Picker

Property | Purpose
-----|-----
[`enabled`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#enabled) | The component can be restricted on a page, by setting `enabled` value as **false** which will disable the component completely from all user interactions including in form post action.
[`placeholder`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#placeholder) | Using `placeholder` you can display a short hint about the expected value in the input element.
[`readonly`](https://ej2.syncfusion.com/angular/documentation/api/datetimepicker#readonly)       | Editing the value in the component can be prevented by setting `readonly` as **true**, but value can be included in the form post action.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datetimepicker/accessibility-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/datetimepicker/accessibility-cs6" %}
