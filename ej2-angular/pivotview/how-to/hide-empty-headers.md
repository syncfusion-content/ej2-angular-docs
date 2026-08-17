---
layout: post
title: How to Hide Empty Headers in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to hide empty headers in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# How to hide empty headers in Angular Pivot Table

When the raw data for a particular field is not defined, it will be shown as 'Undefined' in the pivot table headers. You can hide those headers by setting the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettingsModel#showheaderwhenempty) property to **false** in the pivot table.

For example, when the raw data contains **"United Kingdom"** for the 'Country' field but the **"State"** field is undefined in the data, the header displays as **"United Kingdom >> Undefined"**. Here, you can hide those 'Undefined' headers using the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettingsModel#showheaderwhenempty) property.

> By default, this property is set to **true**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs167/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs167/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs167" %}
