---
layout: post
title: Open PDF files from AWS S3 in Angular Pdfviewer Component | Syncfusion
description: Learn here all about how to Open PDF files from AWS S3 in Syncfusion Angular Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Open PDF files from AWS S3
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from AWS S3

PDF Viewer allows to load PDF file from AWS S3 using either the Standalone or Server-backed PDF Viewer. Below are the steps and a sample to demonstrate how to open a PDF from AWS S3.

## Using Standalone PDF Viewer

To load a PDF file from AWS S3 in a PDF Viewer, you can follow the steps below.

**Step 1:** Create a PDF Viewer sample in Angular

Follow the instructions provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF Viewer sample in Angular. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `src/app/app.component.ts` File in the Angular Project

1. Import the required namespaces at the top of the file:

```typescript
import * as AWS from 'aws-sdk';
```

2. Configures AWS SDK with the region, access key, and secret access key. This configuration allows the application to interact with AWS services like S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

```typescript
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

3. Sets the parameters for fetching the PDF document from S3, including the bucket name and file key. Then Uses the getObject method of the S3 instance to retrieve the document. Converts the document data to a Base64 string and loads it into the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer then load Base64 strikng generated into the viewer.load method.

N> Replace **Your Bucket Name** with the actual Bucket name of your AWS S3 account and **Your Key** with the actual File Key of your AWS S3 account.

```typescript
private s3 = new AWS.S3();

loadDocument() {
  const getObjectParams = {
    Bucket: '**Your Bucket Name**',
    Key: '**Your Key**',
  };
  this.s3.getObject(getObjectParams, (err, data) => {
    if (err) {
      console.error('Error fetching document:', err);
    } else {
      if (data && data.Body) {
        const bytes = new Uint8Array(data.Body as ArrayBuffer);
        let binary = '';
        bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
        const base64String = window.btoa(binary);
        console.log('Document data as Base64:', base64String);
        var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];  
        setTimeout(() => {
          viewer.load("data:application/pdf;base64,"+base64String);
        }, 2000);
      }
    }
  });
}
```

N> The **npm install aws-sdk** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).

## Using Server-Backed PDF Viewer

To load a PDF file from AWS S3 in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://ej2.syncfusion.com/angular/documentation/pdfviewer/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessKey;
public readonly string _secretKey;
public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _accessKey = _configuration.GetValue<string>("AccessKey");
  _secretKey = _configuration.GetValue<string>("SecretKey");
  _bucketName = _configuration.GetValue<string>("BucketName");
}
```

5. Modify the `Load()` method to load the PDF files from AWS S3.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 

public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      RegionEndpoint bucketRegion = RegionEndpoint.USEast1;
      
      // Configure the AWS SDK with your access credentials and other settings
      var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);
      
      string document = jsonObject["document"];
      
      // Specify the document name or retrieve it from a different source
      var response = await s3Client.GetObjectAsync(_bucketName, document);
      
      Stream responseStream = response.ResponseStream;
      responseStream.CopyTo(stream);
      stream.Seek(0, SeekOrigin.Begin);
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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}
```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name

**Step 3:**  Set the PDF Viewer Properties in Angular PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from AWS S3. Ensure that you correctly pass the document name from the files available in your AWS S3 bucket to the documentPath property.

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

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Server-Backend)