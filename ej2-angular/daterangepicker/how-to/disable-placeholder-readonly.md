---
layout: post
title: Disable placeholder readonly in Angular Daterangepicker component | Syncfusion
description: Learn here all about Disable placeholder readonly in Syncfusion Angular Daterangepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Disable placeholder readonly 
documentation: ug
domainurl: ##DomainURL##
---

# Disable placeholder readonly in Angular Daterangepicker component

Property | Purpose
-----|-----
[`enabled`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#enabled) | The component can be restricted on a page, by setting `enabled` value as **false** which will disable the component completely from all user interactions including in form post action.
[`placeholder`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#placeholder) | Using `placeholder` you can display a short hint about the expected value in the input element.
[`readonly`](https://ej2.syncfusion.com/angular/documentation/api/daterangepicker#readonly)       | Editing the value in the component can be prevented by setting `readonly` as **true**, but value can be included in the form post action.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs8/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/daterangepicker/getting-started-cs8/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/daterangepicker/getting-started-cs8" %}