---
layout: post
title: Render a chart on cell selection in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to render a chart on pivot table cell selection in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Pivot Table
documentation: ug
domainurl: ##DomainURL##
---

# How to render a chart on cell selection in Pivot Table

The Angular Pivot Table component supports creating charts based on cell selections within the pivot table. This customization allows charts to be plotted dynamically using data from selected cells, providing visual representation of specific data segments.

## Configuration

Cell selection is enabled using the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings#allowselection) property. The selection behavior is configured through the [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings) property to define selection type and mode.

## Implementation

The [`cellSelected`](https://ej2.syncfusion.com/angular/documentation/api/pivotview#cellselected) event triggers when cells are selected in the pivot table. This event provides selected cell information including row header name, column header name, measure name, and values. Using this data, the [`chart`](https://ej2.syncfusion.com/angular/documentation/chart/getting-started) control can be plotted accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs159/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs159/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs159" %}
