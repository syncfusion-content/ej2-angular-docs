---
layout: post
title: Chart based on pivot selection in Angular Pivotview | Syncfusion
description: Learn here all about Chart based on pivot table selection in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart based on pivot table selection 
documentation: ug
domainurl: ##DomainURL##
---

# Chart based on pivot table selection in Angular Pivotview component

The Angular Pivotview component supports creating charts based on cell selections within the pivot table. This customization allows charts to be plotted dynamically using data from selected cells, providing visual representation of specific data segments.

## Configuration

Cell selection is enabled using the [`allowSelection`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/gridSettings/#allowselection) property. The selection behavior is configured through the [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotSelectionSettings/) property to define selection type and mode.

## Implementation

The [`cellSelected`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#cellselected) event triggers when cells are selected in the pivot table. This event provides selected cell information including row header name, column header name, measure name, and values. Using this data, the [`chart`](https://ej2.syncfusion.com/angular/documentation/chart/getting-started) control can be plotted accordingly.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs159/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs159/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs159" %}
