---
layout: post
title: How to Show Custom Tooltip for Row/Column Headers in Angular Pivot Table | Syncfusion
description: Step-by-step example showing how to show custom tooltip for row and column headers in the Angular Pivot Table, with code snippets and property references.
platform: ej2-angular
control: Show tooltip for row and column headers 
documentation: ug
domainurl: ##DomainURL##
---

# How to Show Custom Tooltip for Row/Column Headers in Angular Pivot Table

You can display custom tooltips for row and column headers to provide additional context and information. This approach enhances the user experience by showing detailed field information when hovering over header cells in the pivot table.

## Implementation

To display tooltips for row and column headers, initialize an external [`Tooltip`](https://ej2.syncfusion.com/angular/documentation/tooltip/getting-started) component within the Pivot Table's [dataBound](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#databound) event. This ensures the tooltip is created only once, after the Pivot Table has finished rendering and is ready to interact with its elements. The tooltip targets both row and column header elements using specific CSS selectors: `td.e-rowsheader` for row headers and `th.e-columnsheader` for column headers.

For row header tooltips, the formatted text and field name of the current row header are retrieved from the [`pivotValues`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/index-default#pivotvalues) and displayed in the tooltip. For column header tooltips, the text content of the respective column header element is extracted and displayed directly in the tooltip.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs311/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs311/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs311" %}