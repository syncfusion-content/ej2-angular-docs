---
layout: post
title: Image overview in Angular Document editor component | Syncfusion
description: Learn here all about Word processor server docker image overview in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Word processor server docker image overview 
documentation: ug
domainurl: ##DomainURL##
---
# Word processor server docker image overview in Angular Document editor component

The Syncfusion<sup style="font-size:70%">&reg;</sup> **Word Processor (also known as Document Editor)** is a component with editing capabilities like Microsoft Word. It is used to create, edit, view, and print Word documents. It provides all the common word processing abilities, including editing text; formatting contents; resizing images and tables; finding and replacing text; importing, exporting, and printing Word documents; and using bookmarks and tables of contents.

This Docker image is the predefined Docker container of Syncfusion’s Word Processor backend. You can deploy it quickly to your infrastructure.

Word Processor is a commercial product, and it requires a valid license to use it in a production environment [`(request license or trial key).`](https://help.syncfusion.com/common/essential-studio/licensing/licensing-faq/where-can-i-get-a-license-key)

The Word Processor is supported in the JavaScript, Angular, React, Vue, ASP.NET Core, ASP.NET MVC, and Blazor platforms.

## Prerequisites

Have [`Docker`](https://www.docker.com/products/container-runtime#/download) installed in your environment:

* On Windows, install [`Docker for Windows`](https://hub.docker.com/editions/community/docker-ce-desktop-windows).
* On macOS, install [`Docker for Mac`](https://hub.docker.com/editions/community/docker-ce-desktop-windows).

## How to deploy Word Processor Docker image

**Step 1:** Pull the word-processor-server image from Docker Hub.

```console
docker pull syncfusion/word-processor-server
```

**Step 2:** Create the docker-compose.yml file with the following code in your file system.

```yaml
version: '3.4'

services:
 word-processor-server:
    image: syncfusion/word-processor-server:latest
    environment:
      #Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
    ports:
    - "6002:80"
```

**Step 3:** In a terminal tab, navigate to the directory where you’ve placed the docker-compose.yml file and execute the following.

```console
docker-compose up
```

Now the Word Processor server Docker instance runs in the localhost with the provided port number `http://localhost:6002`. Open this link in a browser and navigate to the Word Processor Web API control `http://localhost:6002/api/documenteditor`. It returns the default get method response.

**Step 4:** Append the Docker instance running the URL `(http://localhost:6002/api/documenteditor)` to the service URL in the client-side Word Processor control. For more information about how to get started with the Word Processor control, refer to this [`getting started page.`](https://ej2.syncfusion.com/angular/documentation/document-editor/getting-started)

## How to configure spell checker dictionaries path in Docker compose file

**Step 1:** In the Docker compose file, mount the local directory as a container volume using the following code.

```yaml
version: '3.4'
services:
 word-processor-server:
    image: syncfusion/word-processor-server:latest
    environment:
      #Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
   volumes:
      -  ./data:/app/data
    ports:
    - "6002:80"
```

This YAML definition binds the data folder that is available in the Docker compose file directory.  

**Step 2:** In the data folder, include the dictionary files (.dic, .aff) and JSON file. The JSON file should contain the language based dictionary file configuration in the following format.

```yaml
  [
      {
        "LanguadeID": 1036,
        "DictionaryPath": "fr_FR.dic",
        "AffixPath": "fr_FR.aff",
        "PersonalDictPath": "customDict.dic"
      },
      {
        "LanguadeID": 1033,
        "DictionaryPath": "en_US.dic",
        "AffixPath": "en_US.aff",
        "PersonalDictPath": "customDict.dic"
      }
  ]
```

>Note: By default, the json file name should be "spellcheck.json". You can also use different file name by mounting the file name to 'SPELLCHECK_JSON_FILENAME' attribute in Docker compose file as below,

```yaml
version: '3.4'

services:
 word-processor-server:
    image: syncfusion/word-processor-server:latest
    environment:
      #Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
      SPELLCHECK_DICTIONARY_PATH: data
      SPELLCHECK_JSON_FILENAME: spellcheck1.json
    volumes:
      -  ./data:/app/data  
    ports:
    - "6002:80"
```

**Step 3:** For handling the personal dictionary, place an empty .dic file (e.g.,. customDict.dic file) in the data folder.

**Step 4:** Provide the configured volume path to the environment variable like in the following in the Docker compose file.

```yaml
version: '3.4'
services:
 word-processor-server:
    image: syncfusion/word-processo -server:latest
    environment:
      #Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
      SPELLCHECK_DICTIONARY_PATH: data
   volumes:
      -  ./data:/app/data
    ports:
    - "6002:80"
```

## How to copy template Word documents to Docker image

You can copy the required template Word documents into docker container while deploying the docker image to server. You can open these Word documents present in the server by passing the document path (name with relative path) to LoadDocument() web API.

>Note: Place the word files in the data folder mentioned in the volumes section(i.e., C:/Docker/Data) of the docker-compose.yml file. All the files present in the folder path (C:/Docker/Data) mentioned in the volumes section of ‘docker-compose.yml’ file will be copied to the respective folder (/app/Data) of docker container. The Word documents copied to docker container can be processed using the 'LoadDocument' web API.

The following code example shows how to use LoadDocument() API in document editor.

```typescript
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #document_editor height="600px" style="display:block" (created)="onCreated()" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public container: DocumentEditorContainerComponent;
    onCreated() {
          var dataContext = this;
          var uploadDocument = new FormData();
          uploadDocument.append('DocumentName', 'Getting Started.docx');
          var baseUrl = 'http://localhost:6002/api/documenteditor/LoadDocument';
          var httpRequest = new XMLHttpRequest();
          httpRequest.open('POST', baseUrl, true);
          httpRequest.onreadystatechange = function () {
              if (httpRequest.readyState === 4) {
                  if (httpRequest.status === 200 || httpRequest.status === 304) {
                      //Open the document in Document Editor.
                      dataContext.container.documentEditor.open(httpRequest.responseText);
                  }
              }
          };
          httpRequest.send(uploadDocument);
    }
}
```

Refer to these getting started pages to create a Word Processor in [`Typescript`](https://ej2.syncfusion.com/documentation/document-editor/getting-started/), [`React`](https://ej2.syncfusion.com/react/documentation/document-editor/getting-started/), [`Vue`](https://ej2.syncfusion.com/vue/documentation/document-editor/getting-started/), [`ASP.NET MVC`](https://ej2.syncfusion.com/aspnetmvc/documentation/document-editor/getting-started/), [`ASP.NET Core`](https://ej2.syncfusion.com/aspnetcore/documentation/document-editor/getting-started-core/), and [`Blazor`](https://blazor.syncfusion.com/documentation/document-editor/getting-started/server-side-application/).