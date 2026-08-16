---
layout: post
title: Print in Angular Diagram | Syncfusion®
description: Learn how to print the Syncfusion® Angular Diagram control with customizable options including regions, multiple pages, margins, and page orientation.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Diagram

The Angular Diagram component provides comprehensive printing capabilities that allow users to generate high-quality printed outputs of their diagrams. The [`print`](https://ej2.syncfusion.com/angular/documentation/api/diagram#print) method enables printing the diagram as an image with extensive customization options for different printing scenarios.

```
import { Component, ViewChild } from '@angular/core';
import { Diagram, DiagramComponent, DiagramModule, IPrintOptions, PrintAndExport } from '@syncfusion/ej2-angular-diagrams';

Diagram.Inject(PrintAndExport);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DiagramModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('diagram')
  public diagram: DiagramComponent;

  public options: IPrintOptions;
  public printDiagram(): void {
    this.options = {
      region: 'PageSettings',
      multiplePage: false,
      margin: { left: 0, top: 0, bottom: 0, right: 0 }
    };
    this.diagram.print(this.options);
  }
}
```

N> To print diagrams, inject the `PrintAndExport` module using `Diagram.Inject(PrintAndExport)`.

## Print Options

The diagram printing behavior can be extensively customized using the [`printOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions) parameter. These options provide control over the printed output's layout, size, and content selection.

The available print options are detailed in the table below:

| Name | Type | Default | Description | Example Values |
|-------- | -------- | -------- | -------- | -------- |
| region | `DiagramRegions` | 'PageSettings' | Specifies the region of the diagram to be printed using the [`DiagramRegions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#region) type. | 'PageSettings', 'Content', 'CustomBounds' |
| margin | `MarginModel` | { left: 0, top: 0, bottom: 0, right: 0 } | Sets the margin spacing around the printed content in pixels. | { left: 10, top: 10, bottom: 10, right: 10 } |
| stretch | `Stretch` | 'Stretch' | Resizes the diagram content to fit the allocated print space using the [`Stretch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#stretch) type. | 'None', 'Stretch', 'Meet', 'Slice' |
| multiplePage | boolean | false | Enables printing the diagram across multiple pages when content exceeds single page dimensions. | true, false |
| pageWidth | number | null | Defines the width of each page in pixels when using multiple page printing. | 816, 1056 |
| pageHeight | number | null | Sets the height of each page in pixels for multiple page printing scenarios. | 1056, 816 |
| pageOrientation | `PageOrientation` | 'Landscape' | Controls the page orientation for the printed output using the [`PageOrientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#pageorientation) type. | 'Landscape', 'Portrait' |

### Region

The [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#region) property enables selective printing of specific diagram areas. This feature is particularly useful when working with large diagrams where only certain sections need to be printed.

* **PageSettings** - Prints the diagram based on the configured page settings.
* **Content** - Prints only the content (nodes/connectors) of the diagram.
* **CustomBounds** - Prints an explicitly defined custom region of the diagram.

The following code example illustrates how to print the diagram based on different regions:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/print/print-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/print/print-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/print/print-cs1" %}

### Multiple Pages

Large diagrams can be printed across multiple pages by setting the [`multiplePage`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#multiplepage) property to true. This feature automatically divides the diagram content across multiple print pages while maintaining proper scaling and alignment.

The following code example demonstrates how to enable multiple page printing:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/print/print-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/print/print-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/print/print-cs2" %}

### Margin

Print margins can be customized using the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#margin) property, which accepts an object that specifies the spacing for all four sides of the printed output. This ensures proper spacing and professional appearance of printed diagrams.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/print/print-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/print/print-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/print/print-cs3" %}

### Page Width and Page Height

The [`pageWidth`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#pagewidth) and [`pageHeight`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#pageheight) properties control the dimensions of the printed output. These settings are particularly important when printing to specific paper sizes or when precise scaling is required.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/print/print-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/print/print-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/print/print-cs4" %}

### Page Orientation

The [`pageOrientation`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#pageorientation) property determines how the diagram is oriented on the printed page:

* **Landscape** - Prints with page width greater than page height, ideal for wide diagrams
* **Portrait** - Prints with page height greater than page width, suitable for tall diagrams

The following example shows how to configure page orientation:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/print/print-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/print/print-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/print/print-cs5" %}

## Limitations

Currently, printing diagrams containing native and HTML nodes is not directly supported due to browser security restrictions. To address this limitation, Syncfusion provides integration with the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® PDF library. This library includes the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® HTML converter, which utilizes the advanced Blink rendering engine to convert HTML content into printable images. Refer to the [`Print or export HTML and native nodes`](https://support.syncfusion.com/kb/article/14422/how-to-print-or-export-the-html-and-native-node-into-image-format-using-angular-diagram) knowledge base article for detailed implementation guidance.

## See Also

* [How to Print multiple diagrams in single click](https://support.syncfusion.com/kb/article/15162/how-to-print-multiple-diagrams-in-a-single-shot-in-angular)
* [Export diagram in Angular Diagram component](./export)
* [Serialization in Angular Diagram](./serialization)