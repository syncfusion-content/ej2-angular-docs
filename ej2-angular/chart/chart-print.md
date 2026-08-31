---
layout: post
title: Print and Export in Angular Chart | Syncfusion
description: Learn here all about Chart print in Syncfusion Angular Chart component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Chart print 
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in Angular Chart

The print and export features in the Angular Chart require the `ExportService` to be registered in the component's `providers` array. If you have not already added it, include the following in your component:

```typescript
import { ExportService, /* series services you use */ } from '@syncfusion/ej2-angular-charts';

@Component({
  // ...
  providers: [ExportService, /* series services */]
})
```

## Print

The rendered chart can be printed directly from the browser by calling the public method `print`.
You can pass an array of element IDs or a DOM element to this method. By default it takes the chart element.

In the example below, a button is added to the page and the `print` method is called from its click handler.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/series/polar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/series/polar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/chart/series/polar-cs1" %}

To print the chart together with another element on the page, pass an array of element IDs to `print`:

```typescript
this.chartObj?.print(['#chart-container', '#summary-panel']);
```

## Export

The rendered chart can be exported to `JPEG`, `PNG`, `SVG`, `PDF`, `XLSX`, or `CSV` format using the `export` method of the chart. The full method signature is:

```typescript
export(
  type: 'JPEG' | 'PNG' | 'SVG' | 'PDF' | 'XLSX' | 'CSV',
  fileName: string,
  orientation?: 'Portrait' | 'Landscape',
  controls?: Chart[],
  width?: number,
  height?: number,
  exportToMultiplePage?: boolean,
  header?: PdfPageSettingsHeader,
  footer?: PdfPageSettingsFooter
): void
```

Parameter descriptions:
* `type` - The export file format.
* `fileName` - The name of the exported file (without extension).
* `orientation` - Page orientation for PDF export (`'Portrait'` or `'Landscape'`). Ignored for non-PDF formats.
* `controls` - An array of chart (or accumulation chart) instances to export together in a single page. See [Multiple Chart Export](#multiple-chart-export).
* `width` - Width of the exported chart in pixels.
* `height` - Height of the exported chart in pixels.
* `exportToMultiplePage` - When `true` and `type` is `'PDF'`, each chart is exported to a separate page. See [Exporting charts into separate page during the PDF export](#exporting-charts-into-separate-page-during-the-pdf-export).
* `header` / `footer` - Optional header and footer content for the exported PDF. See [Adding header and footer in PDF export](#adding-header-and-footer-in-pdf-export).

To perform a manual export on user action, call the `export` method from a button click handler as shown below.

> Note: Avoid calling `export` from the chart's `loaded` event; this triggers an automatic export every time the chart loads and is not recommended.

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

Both `header` and `footer` accept a [`PdfPageSettingsHeader`](https://ej2.syncfusion.com/angular/documentation/api/chart/pdfPageSettingsHeader) / [`PdfPageSettingsFooter`](https://ej2.syncfusion.com/angular/documentation/api/chart/pdfPageSettingsFooter) object with properties such as `content`, `fontSize`, `fontFamily`, `color`, and `style`. For example:

```typescript
const header = {
  content: 'Chart Header',
  fontSize: 15,
  fontFamily: 'Arial',
  color: '#000'
};
```

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

You can export multiple charts in a single page by passing the multiple chart objects in the export method of the chart. To export multiple charts in a single page, follow these steps:

1. Inject `ExportService` (and the relevant series services such as `ColumnSeriesService` or `LineSeriesService`) into the component's `providers` array.
2. Render more than one chart on the page.
3. Add a button to trigger the export.
4. In the button click handler, call the `export` method on one chart and pass an array of chart instances in the `controls` parameter.

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

The chart can be exported as an image in the form of a base64 string by utilizing HTML canvas. This process involves rendering the chart onto a canvas element and then converting the canvas content to a base64 string (PNG).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/chart/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/chart/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/chart/export-cs1" %}

To use the base64 output, assign it to an `<img>` element or trigger a browser download. For example, to download it as a PNG file:

```typescript
const link = document.createElement('a');
link.href = imagedata; // the base64 string returned from canvas.toDataURL('image/png')
link.download = 'chart.png';
link.click();
```

> Note: If the chart contains images or fonts loaded from a different origin, the canvas will be tainted and `toDataURL` will throw a security exception. Serve all chart assets from the same origin or inline them as data URIs.

## Excel export

You can export the rendered chart data to Excel in either `XLSX` or `CSV` format. The [`excelProperties`](https://ej2.syncfusion.com/angular/documentation/api/chart/iExportEventArgs#excelproperties) property in the [`beforeExport`](https://ej2.syncfusion.com/angular/documentation/api/chart/iExportEventArgs) event allows users to customize the exported Excel sheet by modifying row, column, and cell properties before the file is generated. You can customize row titles, column titles, cell values, as well as row and column widths.

To use this event, bind it on the `<ejs-chart>` element and read `excelProperties` from the event arguments:

```html
<ejs-chart #chart (beforeExport)="onBeforeExport($event)" ...></ejs-chart>
```

```typescript
onBeforeExport(args: IExportEventArgs): void {
  args.excelProperties = {
    rows: [
      { /* row configuration */ },
      { /* row configuration */ }
    ],
    columns: [
      { /* column configuration */ },
      { /* column configuration */ }
    ]
  };
}
```

> Note: For `export` to work in some integration setups you may need to provide `ExportService` in your module or component `providers`.

## Troubleshooting

* **Export or print does nothing** – Ensure `ExportService` (and any required series services such as `ColumnSeriesService` or `LineSeriesService`) is registered in the component's `providers` array.
* **Exported file has the wrong orientation** – The `orientation` parameter is only honored for `PDF` export; it is ignored for other formats.
* **`toDataURL` throws a security error** – The chart canvas is tainted by cross-origin assets. Serve all images and fonts from the same origin as the application.
* **Export runs every time the chart loads** – You may be calling `export` from the chart's `loaded` event. Move the call to a button click handler instead.

## See Also

* [Export Angular Chart with Data Label Template](https://support.syncfusion.com/kb/article/21531/how-to-export-chart-with-datalabel-template-using-angular-chart)
* [Chart Events](chart-events) – covers the `beforePrint` and `beforeExport` events.