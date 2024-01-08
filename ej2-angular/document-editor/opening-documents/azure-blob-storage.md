---
layout: post
title: Open document from Azure Blob Storage in ##Platform_Name## Document editor control | Syncfusion
description:  Learn about how to Open document from Azure Blob Storage in ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Open document from Azure Blob Storage
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open document from Azure Blob Storage

To load document from Azure Blob Storage in a Document Editor, you can follow the steps below

**Step 1:** Create a Simple Document Editor Sample in Angular

Start by following the steps provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in angular. This will give you a basic setup of the Document Editor component. 

**Step 2:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields


```csharp
private readonly string _storageConnectionString;
private readonly string _storageContainerName;
private readonly ILogger<DocumentEditorController> _logger;

public DocumentEditorController(IConfiguration configuration, ILogger<DocumentEditorController> logger)
{
  _storageConnectionString = configuration.GetValue<string>("connectionString");
  _storageContainerName = configuration.GetValue<string>("containerName");
  _logger = logger;
}
```

* Modify the `LoadFromAzure()` method to load the document from  Azure Blob Storage

```csharp

[HttpPost("LoadFromAzure")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/LoadFromAzure")]
//Post action for Loading the PDF documents 
  
public IActionResult LoadFromAzure([FromBody] Dictionary<string, string> jsonObject)
{
  MemoryStream stream = new MemoryStream();

  if (jsonObject == null && !jsonObject.ContainsKey("documentName"))
  {
     return null;
  }
  BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
  string fileName = jsonObject["documentName"];
  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
  BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);
  blockBlobClient.DownloadTo(stream);
  WordDocument document = WordDocument.Load(stream, FormatType.Docx);
  string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
  document.Dispose();
  stream.Close();
  return json;
}
```

* Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

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

> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account and **Your container name in Azure** with the actual container name 

**Step 3:**  Modify the index File in the Document Editor sample

In the client-side, the document is returned from the web service is opening using [`open`](../api/document-editor/#open) method.

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  DocumentEditorContainerComponent,
  ToolbarService,
} from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<button ejs-button (click)="load()" >Open Document From Azure Blob Storage</button><ejs-documenteditorcontainer #documenteditor_default serviceUrl="http://localhost:62870/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService],
})
export class AppComponent implements OnInit {
  @ViewChild('documenteditor_default')
  public container: DocumentEditorContainerComponent;
  ngOnInit(): void {}
  public load(): void {
    let http: XMLHttpRequest = new XMLHttpRequest();
    //add the documentName in which you want to open document inside the documentName
    let content = { documentName: 'Getting Started.docx' };
    let baseurl: string = 'http://localhost:62870/api/documenteditor/LoadFromAzure';
    http.open('POST', baseurl, true);
    http.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    http.onreadystatechange = () => {
      if (http.readyState === 4) {
        if (http.status === 200 || http.status === 304) {
          //open the SFDT text in Document Editor
          this.container.documentEditor.open(http.responseText);
        }
      }
    };
    http.send(JSON.stringify(content));
  }
}
```

> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.