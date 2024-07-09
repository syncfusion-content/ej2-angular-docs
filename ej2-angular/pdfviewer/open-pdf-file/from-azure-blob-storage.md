---
layout: post
title: Open PDF from Azure Blob Storage into Pdfviewer Component | Syncfusion
description: Learn here all about how to Open PDF files from Azure Blob Storage in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open PDF files from Azure Blob Storage
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Azure Blob Storage

Currently, it's possible to load a PDF file from Azure Blob Storage into a PDF Viewer using either the Standalone or Server-backend PDF Viewer. Below are the steps and a sample to demonstrate how to open a PDF from Azure Blob Storage.

## Open PDF file from Azure Blob Storage using Standalone PDF Viewer

To load a PDF file from Azure Blob Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `src/app/app.component.ts` File in the Angular Project

1. Add the following private properties to the `AppComponent` class, and assign the values from the configuration to the corresponding properties

N> Replace **Your account name in Azure** with the actual account name for your Azure Blob Storage account and **Your container name in Azure** with the actual container name and **Your Blob name in Azure** with the actual container name.

```typescript
private accountName: string = "*Your account name in Azure*";
private containerName: string = "*Your container name in Azure*";
private blobName: string = "*Your Blob name in Azure*";
```

2. Constructs the URL to the PDF in Azure Blob Storage. Calls fetchAndConvertToBase64 to fetch the PDF and convert it to a base64 string. Then Loads the base64 string into the PDF Viewer.

```typescript
LoadPdfFromBlob() {
  const url = 'https://'+this.accountName+'.blob.core.windows.net/'+this.containerName+'/'+this.blobName;
  this.fetchAndConvertToBase64(url).then(base64String => {
    if (base64String) {
        var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];  
        setTimeout(() => {
          viewer.load("data:application/pdf;base64,"+base64String);
        }, 2000);
    } else {
        console.error('Failed to fetch and convert file to base64.');
    }
  }).catch(error => console.error('Error:', error));
}
```

3. Then it retrieves the PDF file from the given URL and converts the fetched Blob to a base64 string using blobToBase64.

```typescript
async fetchAndConvertToBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const base64String = await this.blobToBase64(blob);
    return base64String;
  } catch (error) {
    console.error('Error fetching file:', error);
    return null;
  }
}
```

4. Uses FileReader to convert a Blob to a base64 string. Resolves the promise with the base64 string or rejects it in case of an error.

```typescript
blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
        const base64String = reader.result?.toString().split(',')[1] || '';
        resolve(base64String);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(blob);
  });
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Open PDF file from Azure Blob Storage using Server-Backend PDF Viewer

To load a PDF file from Azure Blob Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

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

5. Modify the [Load()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#load) method to load the PDF files from  Azure Blob Storage

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 
  
public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
{
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.TryParse(jsonObject["isFileName"], out bool isFileName) && isFileName)
    {
      BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
      string fileName = jsonObject["document"];
      BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
      BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);
      blockBlobClient.DownloadTo(stream);
    }
    else
    {
      byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
      stream = new MemoryStream(bytes);
    }
  }
  jsonResult = pdfviewer.Load(stream, jsonObject);
  return Content(JsonConvert.SerializeObject(jsonResult));
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

**Step 3:**  Set the PDF Viewer Properties in Angular PDF viewer component

Modify the [serviceUrl](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#serviceurl) property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the [documentPath](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/#load) property of the PDF viewer component to the desired name of the PDF file you wish to load from Azure Blob Storage. Ensure that you correctly pass the document name from the files available in your azure contanier to the documentPath property.

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