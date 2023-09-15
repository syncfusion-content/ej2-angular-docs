---
layout: post
title: Export in Angular Diagram component | Syncfusion
description: Learn here all about Export in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Export 
documentation: ug
domainurl: ##DomainURL##
---

# Export in Angular Diagram component

Diagram provides support to export its content as image/svg files. The client-side method [`exportDiagram`](https://ej2.syncfusion.com/angular/documentation/api/diagram#exportDiagram) helps to export the diagram. The following code illustrates how to export the diagram as image.

>Note: To use Print and Export, you need to inject `PrintAndExport` in the diagram.

To print and export the diagram in Angular, refer to the below video link.

{% youtube "youtube:https://www.youtube.com/watch?v=Cz_9NHZAFaY" %}

<!-- markdownlint-disable MD033 -->

```typescript
public options: IExportOptions;
this.options  = {};
this.options.mode = 'Download';
this.diagram.exportDiagram(this.options);
```

## Exporting options

Diagram provides support to export the desired region of the diagram to desired formats.

## File Name

[`FileName`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions#fileName-string) is the name of the file to be downloaded. By default, the file name is set to **Diagram**.

## Format

[`Format`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions#format-fileformat) is to specify the type/format of the exported file. By default, the diagram is exported as .jpg format. You can export diagram to the following formats:

* JPG
* PNG
* BMP
* SVG

```typescript
public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.options.format = 'SVG';
this.diagram.exportDiagram(this.options);
```

## Margin

[`Margin`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions#margin-marginmodel) specifies the amount of space that has to be left around the diagram.

<!-- markdownlint-disable MD033 -->

```typescript
public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.options.margin = { left: 10, right: 10, top: 10, bottom: 10};
this.options.fileName = 'format';
this.options.format = 'SVG';
this.diagram.exportDiagram(this.options);
```

## Mode

[`Mode`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions#mode-exportmodes) specifies whether the diagram will be exported as files or get base64 data (ImageURL/SVG). The export options are as follows:

* Download: Exports and downloads the diagram as image/SVG.
* Data: return a base64 string.

The following code example illustrates how to export the diagram as raw data.

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

You can export any particular [`region`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions#region-diagramregions) of the diagram and it is categorized into three types as follows.

* PageSettings
* Content
* CustomBounds

## PageSettings

Diagram is exported based on the given PageSettings width and height. The Properties available in page settings are as follows.
* width
* height
* margin
* orientation
* boundaryConstraints
* background
* multiplePage
* showPageBreaks
* fitOptions

### boundaryConstraints

Defines the editable region of the diagram.
* Infinity - Allow the interactions to take place at  infinite height and width.
* Diagram - Allow the interactions to take place around the diagram’s height and width.
* Page - Allow the interactions to take place around the page’s height and width.

### multiplePage

While setting multiple pages as false, the diagram is exported as a single image and while setting multiple pages as true, the diagram is exported as a separate image based on width and height.

The following code example illustrates how to export the region occupied by the diagram elements.

```typescript
public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.options.margin = { left: 10, right: 10, top: 10, bottom: 10};
this.options.fileName = 'format';
this.options.format = 'SVG';
this.options.region = 'PageSettings';
this.diagram.exportDiagram(this.options);
```

## Content

The diagram content alone will be exported as an image.

The following code example illustrates how to export the region occupied by the diagram elements.

```javascript
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1500
},'#element');
var options = {};
options.mode = 'Download';
options.margin = { left: 10, right: 10, top: 10, bottom: 10};
options.fileName = 'format';
options.format = 'SVG';
options.region = 'Content';
diagram.exportDiagram(options);
```

## Custom bounds

Diagram provides support to export any specific region of the diagram by using [`bounds`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions#bounds-rect).

The following code example illustrates how to export the region occupied by the diagram elements.

```typescript
public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.options.margin = { left: 10, right: 10, top: 10, bottom: 10};
this.options.fileName = 'region';
this.options.format = 'SVG';
this.options.region = 'CustomBounds';
this.options.bounds.x = 10;
this.options.bounds.y = 10;
this.options.bounds.height = 100;
this.options.bounds.width = 100;
this.diagram.exportDiagram(this.options);
```

## Export diagram with stretch option

Diagram provides support to export the diagram as image for [`stretch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iExportOptions#stretch-stretch) option. The exported images will be clearer but larger in file size.

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

## Print

The client-side method [`print`](https://ej2.syncfusion.com/angular/documentation/api/diagram#print) helps to print the diagram as image.

| Name | Type | Description|
|-------- | -------- | -------- |
| region | enum | Sets the region of the diagram to be printed. |
| bounds | object | Prints any custom region of diagram. |
| stretch| enum | Resizes the diagram content to fill its allocated space and printed.|
| multiplePage | boolean | Prints the diagram into multiple pages. |
| pageWidth | number | Sets the page width of the diagram while printing the diagram into multiple pages. |
| pageHeight| number | Sets the page height of the diagram while printing the diagram into multiple pages.|
| pageOrientation | enum | Sets the orientation of the page. |

The following code example illustrates how to export the region occupied by the diagram elements.

```typescript
public options: IExportOptions;
this.options = {};
this.options.mode = 'Download';
this.options.region = 'PageSettings';
this.options.multiplePage = true;
this.options.pageHeight = 300;
this.options.pageWidth = 300;
this.diagram.print(this.options);
```

## Limitations

We have a limitation in exporting the image with HTML and Native node.  So, Syncfusion Essential PDF library is used, which supports HTML Content to Image conversion by using the advanced Qt WebKit rendering engine. You can refer to the following KB [link](https://www.syncfusion.com/kb/13298/how-to-print-or-export-the-html-and-native-node-into-image-format) for more details.
