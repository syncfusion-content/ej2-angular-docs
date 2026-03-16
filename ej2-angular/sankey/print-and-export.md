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

The Sankey component supports printing and exporting to PNG, JPEG, SVG, and PDF using the `print()` and `export()` APIs.

## Print

Call the `print()` method to open the browser print dialog for the Sankey diagram.

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

Use `export()` to generate files. Examples below show export formats and custom options.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/export-formats-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/export-formats-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/export-formats-cs1" %}

## Export Events

Use `beforeExport` and `exportCompleted` events to customize the export lifecycle.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/before-export-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/before-export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/before-export-cs1" %}

## Export with Custom Options

Export the Sankey Chart with a custom filename and selected export format.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/sankey/print-export/export-custom-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/sankey/print-export/export-custom-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/sankey/print-export/export-custom-cs1" %}

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