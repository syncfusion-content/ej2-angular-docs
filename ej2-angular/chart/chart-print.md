---
layout: post
title: Chart print in Angular Chart component | Syncfusion
description: Learn here all about Chart print in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart print 
documentation: ug
domainurl: ##DomainURL##
---

# Chart print in Angular Chart component

## Print

The rendered chart can be printed directly from the browser by calling the public method `print`.
You can pass an array of element IDs or a DOM element to this method. By default it takes the chart element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs1" %}

## Export

The rendered chart can be exported to `JPEG`, `PNG`, `SVG`, `PDF`, `XLSX`, or `CSV` format using the export method in chart. The input parameters for this method are `type` for format and `fileName` for result.

The optional parameters for this method are,
* `orientation` - either `Portrait` or `Landscape` (string) during PDF export.
* `controls` - pass an array of control instances (e.g., multiple chart components) for multi-control export.
* `width` - width of chart export.
* `height` - height of chart export.

> Note: some older examples use the chart `loaded` event to call export (which causes an automatic export on load). To perform a manual export on user action, call the export method from a button click handler as shown below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs2" %}

### Adding header and footer in PDF export

In the export method, specify the following parameters to add a header and footer text to the exported PDF document:

* `header` - Specify the text that should appear at the top of the exported PDF document.
* `footer` - Specify the text that should appear at the bottom of the exported PDF document.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs20/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs20/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs20" %}

### Exporting charts into separate page during the PDF export

During PDF export, set the `exportToMultiplePage` parameter to **true** to export each chart as a separate page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs21" %}

## Multiple Chart Export

You can export the multiple charts in single page by passing the multiple chart objects in the export method of chart. To export multiple charts in a single page, follow the given steps:

Initially, render more than one chart to export, and then add button to export the multiple charts. In button click, call the export method in charts, and then pass the multiple chart objects in the export method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/add-series-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/add-series-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/add-series-cs1" %}

## Exporting chart using base64 string

The chart can be exported as an image in the form of a base64 string by utilizing HTML canvas. This process involves rendering the chart onto a canvas element and then converting the canvas content to a base64 string.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/export-cs1" %}

## Excel export

You can export the rendered chart data to Excel in either `XLSX` or `CSV` format. The [`excelProperties`](https://ej2.syncfusion.com/angular/documentation/api/chart/iExportEventArgs#excelproperties) property in the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/chart/iExportEventArgs) event allows users to customize the exported Excel sheet by modifying row, column, and cell properties before the file is generated. You can customize row titles, column titles, cell values, as well as row and column widths.

> Note: For `export` to work in some integration setups you may need to provide `ExportService` in your module or component `providers`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/export-cs1" %}

## See Also

* [Export Angular Chart with Data Label Template](https://support.syncfusion.com/kb/article/21531/how-to-export-chart-with-datalabel-template-using-angular-chart)