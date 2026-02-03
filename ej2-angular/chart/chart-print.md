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

The rendered chart can be printed directly from the browser by calling the public `print` method. This method accepts an array of element IDs or element references to print; by default it prints the chart element itself.

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

Export the rendered chart to `JPEG`, `PNG`, `SVG`, or `PDF` using the chart `export` method. To export chart data into `XLSX` or `CSV`, use the Excel/CSV export options. The primary parameters for `export` are `type` (format) and `fileName` (output file name).

Optional parameters include:

- `orientation` — `portrait` or `landscape` for PDF export
- `controls` — a collection of controls for multi-control export
- `width` — exported width
- `height` — exported height

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