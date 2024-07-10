---
layout: post
title: Save PDF to Azure Blob Storage in Pdfviewer Component | Syncfusion
description: Learn here all about how to save PDF files to Azure Blob Storage in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Save PDF files to Azure Blob Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to Azure Blob Storage

Currently, it's possible to save a PDF file to Azure Blob Storage from the PDF Viewer using either the Standalone or Server-backend PDF Viewer. Below are the steps and a sample to demonstrate how to save a PDF to Azure Blob Storage.

## Save PDF file to Azure Blob Storage using Standalone PDF Viewer

To save a PDF file to Azure Blob Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `src/app/app.component.ts` File in the Angular Project

1. Import the required namespaces at the top of the file:

```typescript
import { BlockBlobClient } from "@azure/storage-blob";
```

2. Add the following private properties to the `AppComponent` class, and assign the values from the configuration to the corresponding properties

N> Replace **Your SAS Url in Azure** with the actual SAS url for your Azure Blob Storage account.

```typescript
private SASUrl: string = "*Your SAS Url in Azure*";
```

3. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

```typescript
@Component({
  selector: 'app-root',
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [resourceUrl]='resource' 
                    [toolbarSettings]="toolbarSettings"
                    (toolbarClick)="toolbarClick($event)"
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})

export class AppComponent implements OnInit {
  public resource: string = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

  public toolItem1: CustomToolbarItemModel = {
    prefixIcon: 'e-icons e-pv-download-document-icon',
    id: 'download_pdf',
    tooltipText: 'Download file',
    align: 'right'
  };

  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: ['OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', this.toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
  };

  public toolbarClick(args: any): void {
    if (args.item && args.item.id === 'download_pdf') {
      this.SavePdfToBlob();
    }
  }
}
```

4. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then, read the Blob as an ArrayBuffer and upload the ArrayBuffer to Azure Blob Storage using 'BlockBlobClient'.

```typescript
SavePdfToBlob() {
  var proxy = this;
  var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  pdfViewer.saveAsBlob().then(function (value: Blob) {
    var reader = new FileReader();
    reader.onload = async () => {
      // Convert ArrayBuffer to Uint8Array
      if (reader.result) {
        const arrayBuffer = reader.result as ArrayBuffer;
        const blobClient = new BlockBlobClient(proxy.SASUrl);
        // Upload data to the blob
        const uploadBlobResponse = await blobClient.upload(arrayBuffer, arrayBuffer.byteLength);
        console.log(`Upload blob successfully`, uploadBlobResponse.requestId);
      }
    };
    reader.readAsArrayBuffer(value);
  });
}
```

N> The **npm install @azure/storage-blob** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Save PDF file to Azure Blob Storage using Server-Backend PDF Viewer

To save a PDF file to Azure Blob Storage, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in Angular

Follow the instructions provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in Angular. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private readonly string _storageConnectionString;
private readonly string _storageContainerName;
private readonly ILogger<PdfViewerController> _logger;

public PdfViewerController(IConfiguration configuration, ILogger<PdfViewerController> logger)
{
  _storageConnectionString = configuration.GetValue<string>("connectionString");
  _storageContainerName = configuration.GetValue<string>("containerName");
  _logger = logger;
}
```

5. Modify the [`Download()`](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#downloadpath) method to save the downloaded PDF files to Azure Blob Storage container

```csharp

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  string document = jsonObject["documentId"];

  BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);

  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
  
  string result = Path.GetFileNameWithoutExtension(document);
  // Get a reference to the blob
  BlobClient blobClient = containerClient.GetBlobClient(result + "_downloaded.pdf");

  // Convert the document base64 string to bytes
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  // Upload the document to Azure Blob Storage
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    blobClient.Upload(stream, true);
  }
  return Content(documentBase);
}
```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "connectionString": "*Your Connection string from Azure*",
  "containerName": "*Your container name in Azure*"
}
```

N> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account and **Your container name in Azure** with the actual container name 

**Step 2:** Modify the web service project to save the downloaded document to Azure Blob Storage

Create a web service project in .NET Core (version 3.0 and above) by following the steps in this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above). In the controller.cs file of your web service project, add the following code to modify the `Download` method. This code saves the downloaded PDF document to Azure Blob Storage container.

```c#
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  string document = jsonObject["documentId"];

  BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
  
  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);

  string result = Path.GetFileNameWithoutExtension(document);
  // Get a reference to the blob
  BlobClient blobClient = containerClient.GetBlobClient(result + "_download.pdf");

  // Convert the document base64 string to bytes
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  // Upload the document to Azure Blob Storage
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    blobClient.Upload(stream, true);
  }
  return Content(documentBase);
}
```

**Step 3:**   Set the PDF Viewer Properties in Angular PDF viewer component

Modify the `[serviceUrl]`(https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#serviceurl) property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the [documentPath](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#documentpath) property of the PDF viewer component to the desired name of the PDF file you wish to load from Azure Blob Storage. Ensure that you correctly pass the document name from the files available in your azure contanier to the documentPath property.

```typescript
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                                [serviceUrl]='service'
                                [documentPath]='documentPath'
                                style="height:640px;display:block">
                  </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,ThumbnailViewService, 
               ToolbarService, NavigationService, AnnotationService, TextSearchService,
                TextSelectionService, PrintService, FormDesignerService, FormFieldsService]
  })
  export class AppComponent implements OnInit {
    // Replace the "localhost:44396" with the actual URL of your server
    public service = 'https://localhost:44396/pdfviewer';
    public documentPath = 'PDF_Succinctly.pdf';
  }
```

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).
