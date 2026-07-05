---
layout: post
title: Print and Export Angular Diagram component | Syncfusion®
description: Learn how to print Angular Diagram components with customizable options including regions, multiple pages, margins, and page orientation.
platform: ej2-angular
control: Print 
documentation: ug
domainurl: ##DomainURL##
---

# Print in Angular Diagram Component

The Angular Diagram component provides comprehensive printing capabilities that allow users to generate high-quality printed outputs of their diagrams. The [`print`](https://ej2.syncfusion.com/angular/documentation/api/diagram#print) method enables printing the diagram as an image with extensive customization options for different printing scenarios.

```typescript
import { PrintAndExport } from '@syncfusion/ej2-angular-diagrams';

public options: IPrintOptions;
this.options = {
    region: 'PageSettings',
    multiplePage: false,
    margin: { left: 0, top: 0, bottom: 0, right: 0 }
};
diagram.print(this.options);
```

N> To print diagrams, inject the `PrintAndExport` service into the diagram component using `Diagram.Inject(PrintAndExport)`.

## Print Options

The diagram printing behavior can be extensively customized using the [`printOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions) parameter. These options provide control over the printed output's layout, size, and content selection.

The available print options are detailed in the table below:

| Name | Type | Description| Example Values |
|-------- | -------- | -------- | -------- |
| region | enum | Specifies the region of the diagram to be printed. Options include 'Content', 'PageSettings'. | 'Content', 'PageSettings' |
| margin | object | Sets the margin spacing around the printed content in pixels. | { left: 10, top: 10, bottom: 10, right: 10 } |
| stretch| enum | Resizes the diagram content to fit the allocated print space. Options include 'Stretch', 'Meet', 'Slice'. | 'Stretch', 'Meet' |
| multiplePage | boolean | Enables printing the diagram across multiple pages when content exceeds single page dimensions. | true, false |
| pageWidth | number | Defines the width of each page in pixels when using multiple page printing. | 816, 1056 |
| pageHeight| number | Sets the height of each page in pixels for multiple page printing scenarios. | 1056, 816 |
| pageOrientation | enum | Controls the page orientation for the printed output. | 'Landscape', 'Portrait' |

### Region

The [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#region) property allows selective printing of specific diagram areas. This feature is particularly useful when working with large diagrams where only certain sections need to be printed.

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

### Multiple pages

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

Print margins can be customized using the [`margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iPrintOptions#margin) property, which accepts an object specifying the spacing for all four sides of the printed output. This ensures proper spacing and professional appearance of printed diagrams.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/print/print-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/print/print-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/print/print-cs3" %}

### Page width and Page height

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

Currently, printing diagrams containing native and HTML nodes is not directly supported due to browser security restrictions. To address this limitation, Syncfusion provides integration with the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® PDF library. This library includes the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential® HTML converter, which utilizes the advanced Blink rendering engine to convert HTML content into printable images. Refer to the [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/14422/how-to-print-or-export-the-html-and-native-node-into-image-format-using-angular-diagram) knowledge base article for detailed implementation guidance.

## See Also

* [How to Print multiple diagrams in single click](https://support.syncfusion.com/kb/article/15162/how-to-print-multiple-diagrams-in-a-single-shot-in-angular)