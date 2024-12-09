---
layout: post
title: Export in Angular Diagram component | Syncfusion®
description: Learn here all about Export in Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Export 
documentation: ug
domainurl: ##DomainURL##
---

# Export in Angular Diagram component

Diagram provides support to export its content as image/svg files. The [`exportDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#exportdiagram) method of diagrams helps to export the diagram. The following code illustrates how to export the diagram as image.

N> To Export diagram, you need to inject `PrintAndExport` in the diagram.

To print and export the diagram in Angular, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=Cz_9NHZAFaY" %}

<!-- markdownlint-disable MD033 -->

```typescript
public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.diagram.exportDiagram(this.options);
```

## Exporting options

The diagram provides support to export the desired region of the diagram to various formats. The following table shows the list of [`exportOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/) in diagram.

| Name | Type | Description|
|-------- | -------- | -------- |
| bounds | object | Sets the bounds that has to be exported |
| region | enum | Sets the region of the diagram to be exported. |
| fileName | string | Sets the file name of the exported image. |
| format | string | Sets the export image format. |
| mode | string | Sets the Mode for the file to be downloaded. |
| margin | object | Sets the margin of the page to be exported. |
| stretch| enum | Sets the aspect ratio of the exported image.|
| multiplePage | boolean | exports the diagram into multiple pages. |
| pageWidth | number | Sets the page width of the diagram while exporting the diagram into multiple pages. |
| pageHeight| number | Sets the page height of the diagram while exporting the diagram into multiple pages.|
| pageOrientation | enum | Sets the orientation of the page. |

## File Name

[`FileName`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#filename) is the name of the file to be downloaded. By default, the file name is set to **Diagram**.

## Format

[`Format`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#format) specifies the type/format of the exported file. By default, the diagram is exported in .jpg format. You can export the diagram to the following formats:

* JPG
* PNG
* BMP
* SVG


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs1" %}


## Margin

[`Margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#margin) specifies the amount of space that has to be left around the diagram while exporting.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs2" %}


## Mode

[`Mode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#mode) specifies whether to export the diagram as an image or to return the base64 data of the diagram. The available export modes are:

* Download: Exports and downloads the diagram as an image or SVG file.
* Data: Returns a base64 string representation of the diagram.

The following code example demonstrates how to export the diagram as raw data.

<!-- markdownlint-disable MD033 -->

```typescript
public options: IExportOptions;
this.options = {};
this.options.mode = 'Data';
this.options.margin = { left: 10, right: 10, top: 10, bottom: 10};
this.options.fileName = 'format';
this.options.format = 'SVG';
let base64data = this.diagram.exportDiagram(this.options);
```


## Region

You can export any particular [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#region) of the diagram and it is categorized into three types as follows.

| Region | Description |
|-------- | -------- |
| PageSettings | The region to be exported will be based on the given page settings |
| Content | Only the content of the diagram control will be exported | 
| CustomBounds | The region to be exported will be explicitly defined |

The following example shows how to export diagram with different regions.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs3" %}


N> The [`bounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#bounds) property of [`exportOptions`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/) should be defined to export the diagram with CustomBounds region.


### MultiplePage

When the [`multiplePage`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#multiplepage) option is set to false, the diagram is exported as a single image. When it set to true, the diagram is exported as multiple images based on its width and height.

The following code example demonstrates how to export the diagram as multiple images.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs4" %}


### Export image

You can pass the base64 data of an image to the [`exportImage`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#exportimage) method to export it directly. The following example shows how to export base64 data using the `exportImage` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs5" %}


### Get diagram content

To get the html diagram content, the [`getDiagramContent`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#getdiagramcontent) method is used. the following example shows how to get the diagram content at runtime.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/export/export-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/export/export-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/export/export-cs6" %}

## Export diagram with stretch option

Diagram provides support to export the diagram as image for [`stretch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions/#stretch) option. The exported images will be clearer but larger in file size.

The following code example illustrates how to export the region occupied by the diagram elements.

```typescript
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


## Limitations


Currently, printing diagram with native and HTML nodes is not supported. To overcome this limitation, we make use of the Syncfusion Essential® PDF library. This library incorporates the Syncfusion Essential® HTML converter, which employs the advanced Blink rendering engine. This converter seamlessly transforms HTML content into images. Refer to [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/14422/how-to-print-or-export-the-html-and-native-node-into-image-format-using-angular-diagram) kb for more information.
