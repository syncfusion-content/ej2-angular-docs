---
layout: post
title: Rendering events in Angular PDF Viewer component | Syncfusion
description: Learn here all about pageRenderInitiate and pageRenderComplete event in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# PageRenderInitiate and PageRenderComplete event

In Syncfusion PDF Viewer, `pageRenderInitiate` and `pageRenderComplete` actions are events that occur during the rendering process of PDF documents. 

**pageRenderInitiate** 

The pageRenderInitiate event is triggered when the rendering of a page in the PDF document begins. This event provides developers with an opportunity to perform any necessary initialization or setup before the rendering of the page content commences. It can be utilized to prepare resources, set up rendering parameters, or execute any other actions required before the page rendering process starts.

**pageRenderComplete**

The pageRenderComplete event is triggered when the rendering of a page in the PDF document is completed. This event allows developers to perform cleanup tasks or finalize rendering-related processes after the rendering of the page content finishes. It can be used to release resources, finalize rendering settings, or handle any post-rendering tasks necessary for the application.

```html
<ejs-pdfviewer #pdfViewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               (pageRenderInitiate)='pageRenderInitiate($event)'
               (pageRenderComplete)='pageRenderComplete($event)'
               style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public pageRenderInitiate(args: any): void {
  // This method is called when the page rendering starts
  console.log('Rendering of pages started');
  console.log(args)
}

public pageRenderComplete(args: any): void {
  // This method is called when the page rendering completes
 console.log('Rendering of pages completed');
 console.log(args)
}
```

The provided code demonstrates how to subscribe to the `pageRenderInitiate` and `pageRenderComplete` events in the Syncfusion PDF Viewer component. 

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/PageRenderStarted%20and%20PageRenderCompleted%20event)