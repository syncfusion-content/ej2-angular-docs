---
layout: post
title: Open document from Google Drive in ##Platform_Name## Document editor control | Syncfusion
description: Learn about how to Open document from Google Drive in ##Platform_Name## Document editor control of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Open document from Google Drive
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Open document from Google Drive

To load a document from Google Drive in a Document editor, you can follow the steps below

**Step 1:** Set up Google Drive API

You must set up a project in the Google Developers Console and enable the Google Drive API. Obtain the necessary credentials to access the API. For more information, view the official [link](https://developers.google.com/drive/api/guides/enable-sdk).

**Step 2:** Create a Simple Document Editor Sample in angular

Start by following the steps provided in this [link](../../document-editor/getting-started) to create a simple Document Editor sample in angular. This will give you a basic setup of the Document Editor component.

**Step 3:** Modify the `DocumentEditorController.cs` File in the Web Service Project

* Create a web service project in .NET Core 3.0 or above. You can refer to this [link](../../document-editor/web-services-overview) for instructions on how to create a web service project.

* Open the `DocumentEditorController.cs` file in your web service project.

* Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Apis.Drive.v3;
using Google.Apis.Util.Store;
```

* Add the following private fields and constructor parameters to the `DocumentEditorController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string folderId;
public readonly string applicationName;
public readonly string credentialPath;
private static readonly string[] Scopes = { DriveService.Scope.DriveFile, DriveService.Scope.DriveReadonly};

public DocumentEditorController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  folderId = _configuration.GetValue<string>("FolderId");
  credentialPath = _configuration.GetValue<string>("CredentialPath");
  applicationName = _configuration.GetValue<string>("ApplicationName");
}
```

* Create the `LoadFromGoogleDrive()` method to load the document from Google Drive.

```csharp
[AcceptVerbs("Post")]
[HttpPost]
[EnableCors("AllowAllOrigins")]
[Route("LoadFromGoogleDrive")]
//Post action for Loading the documents
public async Task<string> LoadFromGoogleDrive([FromBody] Dictionary<string, string> jsonObject)
{

  MemoryStream stream = new MemoryStream();
  UserCredential credential;
  using (var stream1 = new FileStream(credentialPath, FileMode.Open, FileAccess.Read))
  {
    string credPath = "token.json";
    credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
      GoogleClientSecrets.Load(stream1).Secrets,
      Scopes,
      "user",
      CancellationToken.None,
      new FileDataStore(credPath, true));
  }

  // Create Google Drive API service.
  var service = new DriveService(new BaseClientService.Initializer()
  {
    HttpClientInitializer = credential,
    ApplicationName = applicationName,
  });
  // List DOCX files in Google Drive
  listRequest.Q = "mimeType='application/vnd.openxmlformats-officedocument.wordprocessingml.document' and '" + folderId + "' in parents and trashed=false";
  listRequest.Fields = "files(id, name)";
  var files = await listRequest.ExecuteAsync();
  string fileIdToDownload = string.Empty;
  foreach (var file in files.Files)
  { 
    string fileId = file.Id;
    string fileName = file.Name;
    if (fileName == objectName)
    {
      // Save the matching fileId
      fileIdToDownload = fileId;
      break;
    }
  }
  string fileIds = fileIdToDownload;
  var request = service.Files.Get(fileIds);
  await request.DownloadAsync(stream);
  stream.Position = 0;   
  
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
  "FolderId": "Your Google Drive Folder ID",
  "CredentialPath": "Your Path to the OAuth 2.0 Client IDs json file",
  "ApplicationName": "Your Application name"
}
```

> Replace **Your Google Drive Folder ID**, **Your Application name**, and **Your Path to the OAuth 2.0 Client IDs json file** with your actual Google drive folder ID , Your name for your application and the path for the JSON file.

> The **FolderId** part is the unique identifier for the folder. For example, if your folder URL is: `https://drive.google.com/drive/folders/abc123xyz456`, then the folder ID is `abc123xyz456`.

**Step 4:**  Modify the index File in the Document Editor sample

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
      template: `<button ejs-button (click)="load()" >Open Document From Google Drive</button><ejs-documenteditorcontainer #documenteditor_default serviceUrl="http://localhost:62870/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
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
    let baseurl: string = 'http://localhost:62870/api/documenteditor/LoadFromGoogleDrive';
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

> The **Google.Apis.Drive.v3** NuGet package must be installed in your application to use the previous code example.