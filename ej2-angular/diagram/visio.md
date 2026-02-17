---
layout: post
title: Import and Export Visio Files in Angular | Syncfusion®
description: Learn how to import and export Microsoft Visio (.vsdx) files using the Syncfusion® Angular Diagram component of Syncfusion Essential® JS 2 and more.
platform: ej2-angular
control: Diagram
documentation: ug
domainurl: ##DomainURL##
---

# Import and Export Visio files

N> Visio import and export support is currently **experimental**. Certain features may be limited or may not function as expected.

## What is Microsoft Visio?

Microsoft Visio is a diagramming application used to create visual representations such as flowcharts, organizational charts, process diagrams, and system layouts. Visio diagrams are stored in the **.vsdx** file format, which contains information about pages, shapes, connectors, text, and layout settings.

## Why use Visio with the Angular Diagram?

Many organizations maintain existing diagrams created using Microsoft Visio. Recreating these diagrams in a web application can require significant effort. The Diagram component provides Visio integration to support the following scenarios:

- Reuse existing Visio diagrams in web applications.  
- Visualize and edit Visio diagrams using the Diagram component.  
- Export diagrams created or modified in Diagram component for use in Microsoft Visio.  

This integration enables seamless collaboration between desktop‑based Visio tools and web‑based diagramming applications.

## Visio support in the Angular Diagram

The Syncfusion Essential Angular Diagram component supports Microsoft Visio integration by allowing **.vsdx** files to be imported into the Diagram component and diagrams to be exported back to Visio format. During import, Visio shapes, connectors, and annotations are mapped to their corresponding Diagram elements, while export converts the diagram content into a valid **.vsdx** file.

N>To enable Visio import and export functionality, inject the `ImportAndExportVisio` module into the Diagram component.

## Import Visio files in Angular Diagram

### How Visio import works

A Visio file can be selected from the local file system or retrieved from a server or cloud storage. Once the **.vsdx** file is available, it is passed to the Diagram component as a **File** object using the [`importFromVisio`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#importfromvisio) method.

During the import process:

- Visio pages are read.
- Shapes are converted into Diagram nodes.
- Connectors are converted into Diagram connectors.
- Basic text and formatting are applied where supported.

### Import a Visio file

The following example imports a Visio (**.vsdx**) file by passing a **File** object to the `importFromVisio` method. The method returns a collection of warnings when certain Visio features are not fully supported during import.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/visioimportexport/visioImport-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/visioimportexport/visioImport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/visioimportexport/visioImport-cs1" %}

### Import options

Import behavior can be customized using the `VisioImportOptions` object.

| Property | Description |
|--------|-------------|
| `pageIndex` | Specifies the zero-based index of the Visio page to import. The default value is **0**. |

### Import lifecycle event

The [`diagramImporting`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iimportingeventargs) event is triggered during the Visio import process. This event provides information about the current import status, available pages, warnings or errors, and supports page selection or cancellation of the import operation.

**Event arguments:**

| Argument | Description |
|---------|-------------|
| `status` | Indicates the current stage of the import operation. |
| `pages` | Contains the list of available Visio pages. |
| `selectedPage` | Specifies the Visio page to import. |
| `cancel` | Set to **true** to cancel the import operation. |
| `logs` | Contains warnings or errors generated during import. |

N> The `selectedPage` property is configurable only when the import `status` is **started**.

#### Cancel the import operation

The import operation can be canceled during the initial stage by setting the `cancel` property to **true**.

```ts
public diagramImporting(args: IImportingEventArgs): void {
  if (args.status === 'started') {
    args.cancel = true;
  }
}

```

#### Select a page during import

When a Visio file contains multiple pages, a specific page can be selected at the start of the import process.

```ts
public diagramImporting(args: IImportingEventArgs): void {
  if (args.status === 'started' && args.pages && args.pages.length) {
    args.selectedPage = args.pages[0]; // Imports the first page
  }
}

```

## Export Angular Diagram to Visio

### How Visio export works

The Diagram component supports exporting diagrams to Microsoft Visio format using the [`exportToVisio`](https://ej2.syncfusion.com/angular/documentation/api/diagram/index-default#exporttovisio) method. This method generates a **.vsdx** file and automatically downloads it through the browser.

### Exporting a diagram

The following example exports an Angular Diagram to a Microsoft Visio (**.vsdx**) file using the `exportToVisio` method.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/visioimportexport/visioExport-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/visioimportexport/visioExport-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/samples/diagram/visioimportexport/visioExport-cs1" %}

### Export options

Export behavior can be controlled using the `VisioExportOptions` object.

| Property | Description |
|------|------|
| `fileName` | Specifies the name of the exported Visio file. The default value is **Sample.vsdx**. |
| `pageName` | Specifies the name of the Visio page. The default value is **Page-1**. |

### Export lifecycle event

The [`diagramExporting`](https://ej2.syncfusion.com/angular/documentation/api/diagram/iexportingeventargs) event provides status updates, reports warnings or errors, and supports cancellation of the export operation.

**Event arguments:**

| Argument | Description |
|----------|-------------|
| `status` | Indicates the current stage of the export process. |
| `cancel` | Set to **true** to cancel the export operation. |
| `logs` | Contains warnings or errors generated during export. |

#### Cancel the export operation

The export operation can be canceled at the start of the process by setting the `cancel` property to **true**.

```ts
  public diagramExporting(args: IExportingEventArgs): void{
    if (args.status === 'started') {
      args.cancel = true;
    }
  }

```

## Limitations

The table below outlines Visio's import and export limitations, offering a concise summary of current feature support and known restrictions.

| Import Limitations | Export Limitations |
|--------------------------|--------------------------|
| **Gradient page backgrounds:** Only solid fills are imported; gradient page background fills are not supported. | **Diagram-level tooltips:** Diagram‑level tooltips are not exported. |
| **Gradient types:** Only linear and radial gradient types are supported; other gradient styles are ignored. | **Connector segment thumbs:** Connector segment thumb customizations are not supported. |
| **Ruler settings:** Ruler settings may not be preserved accurately due to coordinate origin differences (Visio uses bottom‑left; Diagram component uses top‑left). | **Templates & tools:** Templates and custom tool configurations are not exported. |
| **Layer support:** Only a single layer per shape is supported. | **Layer Z‑index ordering:** Layer Z‑index ordering is not preserved. |
| **Line styles:** Rounded line caps and compound line styles are not supported. | **Annotation properties:** Annotation displacement and flip properties are not supported. |
| **Image formatting:** Image formatting options such as brightness, contrast, and cropping are not supported. | **Port customization:** Port customization properties are not exported. |
| **Connector types:** Only basic connector types—straight, right‑angle, and curved—are supported. | **Page margins & boundaries:** Page margin and boundary constraints may require manual adjustment after export. |
| **Connector gradients:** Connector gradient styles are not supported. | |
| **Multiple hyperlinks:** Multiple hyperlinks within a single shape are not supported. | |
| **Rich text:** Rich text formatting is not supported; text is rendered using a single, uniform style. | |
| **Text fill behavior:** Text fill behavior may differ from Microsoft Visio. | |