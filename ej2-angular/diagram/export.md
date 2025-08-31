---
layout: post
title: Export in Angular Diagram component | Syncfusion®
description: Learn here all about Export in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Export 
documentation: ug
domainurl: ##DomainURL##
---

# Export in Angular Diagram Component

The Angular Diagram component provides comprehensive support for exporting diagram content as image files (JPG, PNG) or vector graphics (SVG). This functionality enables users to save diagrams for documentation, presentations, or further processing. The [`exportDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#exportdiagram) method serves as the primary interface for all export operations.

N> To export diagrams, inject `PrintAndExport` in the diagram component.

To print and export the diagram in Angular, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=Cz_9NHZAFaY" %}

## Basic Export Example

The following code demonstrates a simple diagram export operation:

<!-- markdownlint-disable MD033 -->

```typescript
import { IExportOptions } from '@syncfusion/ej2-diagrams';

public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.diagram.exportDiagram(this.options);
```

## Export Configuration Options

The diagram component supports extensive customization through the [`exportOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/) interface. The following table details all available configuration properties:

| Name | Type | Description|
|-------- | -------- | -------- |
| bounds | object | Defines specific bounds for CustomBounds region export |
| region | enum | Specifies the diagram area to export (PageSettings, Content, or CustomBounds) |
| fileName | string | Sets the exported file name (default: "Diagram") |
| format | string | Defines export format (JPG, PNG, or SVG) |
| mode | string | Controls export behavior (Download or Data) |
| margin | object | Adds spacing around the exported content |
| stretch| enum | Adjusts aspect ratio and image quality of exported content |
| multiplePage | boolean | Enables multi-page export for large diagrams |
| pageWidth | number | Sets page width for multi-page exports |
| pageHeight| number | Sets page height for multi-page exports |
| pageOrientation | enum | Controls page orientation (Portrait or Landscape) |

## File Name Configuration

The [`fileName`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#filename) property specifies the name for downloaded files. When not specified, the default name "Diagram" is used.

## Export Formats

The [`format`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#format) property determines the output file type. The component supports three formats with distinct characteristics:

* **JPG**: Compressed format suitable for photographs and complex diagrams with many colors
* **PNG**: Lossless format ideal for diagrams with transparency or sharp edges
* **SVG**: Vector format that maintains quality at any scale and supports text selection

The default export format is JPG. The following example shows format specification:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs1" %}

## Margin Configuration

The [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#margin) property adds whitespace around the exported diagram content. This spacing improves presentation and prevents content from appearing cramped.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs2" %}


## Export Modes

The [`mode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#mode) property controls how the exported content is delivered:

* **Download**: Automatically downloads the diagram as a file to the user's device
* **Data**: Returns a base64 string representation for programmatic processing

The Data mode is useful for applications that need to process or transmit the exported content programmatically:

<!-- markdownlint-disable MD033 -->

```typescript
import { IExportOptions } from '@syncfusion/ej2-diagrams';

public options: IExportOptions;
this.options = {};
this.options.mode = 'Data';
this.options.margin = { left: 10, right: 10, top: 10, bottom: 10};
this.options.fileName = 'format';
this.options.format = 'SVG';
let base64data = this.diagram.exportDiagram(this.options);
```

## Region-Based Export

The [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#region) property defines which portion of the diagram to export:

| Region | Description |
|-------- | -------- |
| PageSettings | Exports based on the configured page dimensions and settings |
| Content | Exports only the visible diagram elements, excluding empty space | 
| CustomBounds | Exports a user-defined rectangular area |

The following example demonstrates different region export options:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs3" %}

N> When using CustomBounds region, the [`bounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#bounds) property must be defined to specify the export area coordinates.

## Multi-Page Export

For large diagrams that exceed standard page dimensions, the [`multiplePage`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#multiplepage) option enables export across multiple pages:

* **false** (default): Export as a single image regardless of size
* **true**: Split the diagram across multiple pages based on specified dimensions

The following example shows multi-page export configuration:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs4" %}

## Direct Image Export

The [`exportImage`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#exportimage) method allows direct export of base64 image data without requiring a diagram instance. This method is useful for processing pre-existing image data.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs5" %}

## Diagram Content Retrieval

The [`getDiagramContent`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#getdiagramcontent) method retrieves the HTML representation of the diagram at runtime. This functionality supports dynamic content analysis and processing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs6" %}

## Stretch Option for Enhanced Quality

The [`stretch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#stretch) property improves exported image quality by adjusting the aspect ratio. Images exported with stretch enabled are clearer but result in larger file sizes.

```typescript
import { IExportOptions } from '@syncfusion/ej2-diagrams';

public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.options.margin = { left: 10, right: 10, top: 10, bottom: 10};
this.options.fileName = 'region';
this.options.format = 'SVG';
this.options.region = 'Content';
this.options.stretch = 'Stretch';
this.diagram.exportDiagram(this.options);
```

## Export Limitations

The standard export functionality does not support diagrams containing native HTML nodes or HTML templates. For these scenarios, specialized handling is required using the Syncfusion Essential PDF library with the HTML converter component. This converter uses the Blink rendering engine to transform HTML content into exportable images.

For detailed implementation guidance with HTML and native nodes, refer to the [export HTML and Native node](https://support.syncfusion.com/kb/article/14422/how-to-print-or-export-the-html-and-native-node-into-image-format-using-angular-diagram) knowledge base article.