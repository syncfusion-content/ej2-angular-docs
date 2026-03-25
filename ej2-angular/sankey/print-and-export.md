---
layout: post
title: Print and Export in Angular Sankey component | Syncfusion
description: Learn here all about Print and Export in Syncfusion Angular Sankey component of Syncfusion Essential JS 2 and more.
control: Print and Export
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Print and Export in Angular Sankey component

The Sankey Chart provides comprehensive print and export functionality, enabling users to generate static files in multiple formats (PNG, JPEG, SVG, PDF) or print the diagram directly. This is useful for reports, documentation, sharing, and offline access.

This guide covers printing the chart and exporting to various formats with customization options.

## Print

Print the Sankey Chart directly to paper or PDF using the `print()` method. This opens the browser's print dialog, allowing users to select printer settings and output format:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/print-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/print-cs1" %}

## Export

Export the Sankey Chart to various file formats using the `export()` method. This allows you to generate standalone files suitable for sharing, archiving, or embedding in documents.

### Export Formats

The Sankey Chart supports exporting to the following formats:

- **PNG** - Portable Network Graphics (raster format, good for web)
- **JPEG** - Joint Photographic Experts Group (compressed raster, smaller file size)
- **SVG** - Scalable Vector Graphics (vector format, scalable without quality loss)
- **PDF** - Portable Document Format (ideal for printing and archiving)

### Export with Default Settings

Export the chart using default settings with a default filename:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/export-formats-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/export-formats-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/export-formats-cs1" %}

## Export with Custom Options

Export the chart with a custom filename and format selection to control output file names and type:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/export-custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/export-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/export-custom-cs1" %}

## Export Events

### Before Export Event

Use the `beforeExport` event to customize the export process before the file is generated. This allows you to modify chart properties, add watermarks, or perform pre-export calculation

Use the `beforeExport` event to customize the export process:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/before-export-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/before-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/before-export-cs1" %}

## Export Completed Event

Handle the completion of the export using the `exportCompleted` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/export-completed-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/export-completed-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/export-completed-cs1" %}

## Export Format Comparison

| Format | Use Case | Quality | File Size |
|--------|----------|---------|-----------|
| PNG | Web sharing, presentations | Raster (good quality) | Medium |
| JPEG | Web images, email | Raster (good quality) | Small |
| SVG | Scalable graphics, printing | Vector (scalable) | Medium |
| PDF | Documents, archival | Vector (scalable) | Medium |

## Best Practices

- **PNG/JPEG**: Best for quick sharing and web usage.
- **SVG**: Best for scalable, print-ready exports.
- **PDF**: Best for formal documents and archival purposes.
- Choose the export format based on distribution and usage needs.
- Test exports in different formats to ensure the output quality meets expectations.