---
layout: post
title: Classic layout in Angular Pivotview component | Syncfusion
description: Learn here all about Classic layout in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Classic Layout
documentation: ug
domainurl: ##DomainURL##
---

# Classic Layout in Angular Pivot Table component

N> The classic layout supports only relational data sources and operates exclusively with client-side engine.

The classic layout in the Syncfusion Pivot Table offers a structured, tabular presentation of data, improving both readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#layout) property in the [gridSettings](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/classic-layout-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/classic-layout-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/classic-layout-cs1" %}

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.