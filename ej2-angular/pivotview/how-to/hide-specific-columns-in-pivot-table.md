---
layout: post
title: How to Hide Specific Columns in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to hide specific columns in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# How to hide specific columns in Angular Pivot Table

By using the [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings#columnrender) event in the [`gridSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings), you can hide specific column(s) in the pivot table. In the example below, the **"Units Sold"** column under **"FY 2016"** is hidden by setting its **visible** property to **false** via the [`columnRender`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings#columnrender) event.

N> The **dot(.)** character in **FY 2016.Units Sold** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/valueSortSettingsModel#headerdelimiter) in the [`valueSortSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/dataSourceSettings#valuesortsettings) property to any other delimiter instead of the default separator.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs312/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs312/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs312" %}
