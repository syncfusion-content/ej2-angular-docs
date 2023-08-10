---
layout: post
title: Save PDF files to Dropbox cloud file storage in Angular Pdfviewer Component | Syncfusion
description: Learn here all about how to save PDF files to Dropbox cloud file storage in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Save PDF files to Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to Dropbox cloud file storage

To save a PDF file to Dropbox cloud file storage, you can follow the steps below

**Step 1** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a PDF Viewer sample in Angular

Follow the instructions provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in Angular. This will set up the basic structure of your PDF Viewer application.

**Step 3:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _folderName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _folderName = _configuration.GetValue<string>("FolderName");
}
```

5. Modify the `Download()` method to save the downloaded PDF files to Dropbox cloud file storage bucket

```csharp

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public async Task<IActionResult> Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);

  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  string documentId = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentId);
  string fileName = result + "_downloaded.pdf";

  using (var dropBox = new DropboxClient(_accessToken))
  {
    using (var stream = new MemoryStream(documentBytes))
    {
      // Upload the document to Dropbox
      var uploadedFile = await dropBox.Files.UploadAsync(
        _folderName + "/" + fileName,
        WriteMode.Overwrite.Instance,
        body: stream
      );
    }
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
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace **Your_Dropbox_Access_Token** with your actual Dropbox access token and **Your_Folder_Name** with your folder name.

**Step 4:**  Set the PDF Viewer Properties in Angular PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Dropbox cloud file storage. Ensure that you correctly pass the document name from the files available in your dropbox folder to the documentPath property.

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

N> The **Dropbox.Api** NuGet package must be installed in your application to use the previous code example.

N> Replace `PDF_Succinctly.pdf` with the actual document name that you want to load from Dropbox cloud file storage. Make sure to pass the document name from the dropbox folder to the `documentPath` property of the PDF viewer component

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage)