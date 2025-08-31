---
layout: post
title: Tooltip in Angular Pivot Table Component | Syncfusion
description: Learn here all about Tooltip in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Tooltip 
documentation: ug
domainurl: ##DomainURL##
---

# Tooltip in Angular Pivot Table Component

The tooltip displays contextual information when users hover over value cells in the pivot table. It can be enabled or disabled by setting the [`showTooltip`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#showtooltip) property to **true** or **false**. By default, tooltip is enabled in the pivot table and shows the cell value along with row and column header information.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs297/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/getting-started-cs297/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/getting-started-cs297" %}

## Tooltip Template

Users can customize the tooltip in the Pivot Table component by setting the [`tooltipTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#tooltiptemplate) property with their own HTML elements. This property accepts either an HTML string or an element ID. Use the following placeholders within the HTML to display dynamic values:

- `${rowHeaders}` – Displays the row headers for the selected value cell.
- `${columnHeaders}` – Displays the column headers for the selected value cell.
- `${rowFields}` – Displays the row fields of the selected value cell.
- `${columnFields}` – Displays the column fields of the selected value cell.
- `${valueField}` – Displays the value field name of the selected cell.
- `${aggregateType}` – Specifies the aggregate type of the selected value cell.
- `${value}` – Displays the formatted value of the selected value cell.

Tooltip customization can be applied to both pivot table and pivot chart together, or configured individually. To customize the Pivot Table tooltip, define the HTML template via the [`tooltipTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#tooltiptemplate) property as described above. To set a custom tooltip for the Pivot Chart only, use the [`template`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/pivotTooltipSettingsModel/#template) property within the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#tooltip) object of the [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/) property.

The example below shows how to define the Pivot Table tooltip template in `index.html` and assign it to the [`tooltipTemplate`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/#tooltiptemplate) property. The Pivot Chart tooltip is customized by setting an HTML string in the [`tooltip`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/#tooltip) property of [`chartSettings`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/chartSettings/).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/pivot-grid/tooltipTemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-grid/tooltipTemplate-cs1/index.html %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/pivot-grid/tooltipTemplate-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/pivot-grid/tooltipTemplate-cs1" %}