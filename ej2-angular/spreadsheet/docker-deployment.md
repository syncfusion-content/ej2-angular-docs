---
layout: post
title: Docker image deployment in Angular Spreadsheet component | Syncfusion
description: Learn here all about Docker image deployment in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Docker deployment 
documentation: ug
domainurl: ##DomainURL##
---

# Docker Image Overview in Angular Spreadsheet component

The [**Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet (also known as Excel Viewer)**](https://www.syncfusion.com/angular-components/angular-spreadsheet) is a feature-rich control for organizing and analyzing data in a tabular format. It provides all the common Excel features, including data binding, selection, editing, formatting, resizing, sorting, filtering, importing, and exporting Excel documents.

This Docker image is the pre-defined Docker container for Syncfusion's Spreadsheet backend functionalities. This server-side Web API project targets ASP.NET Core 8.0.

You can deploy it quickly to your infrastructure. If you want to add new functionality or customize any existing functionalities, create your own Docker file by referencing the existing [Spreadsheet Docker project](https://github.com/SyncfusionExamples/Spreadsheet-Server-Docker).

The Spreadsheet is supported on the [JavaScript](https://www.syncfusion.com/javascript-ui-controls), [Angular](https://www.syncfusion.com/angular-ui-components), [React](https://www.syncfusion.com/react-ui-components), [Vue](https://www.syncfusion.com/vue-ui-components), [ASP.NET Core](https://www.syncfusion.com/aspnet-core-ui-controls), and [ASP.NET MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls) platforms.

## Prerequisites

Have [`Docker`](https://www.docker.com/products/container-runtime#/download) installed in your environment:

* On Windows, install [`Docker for Windows`](https://hub.docker.com/editions/community/docker-ce-desktop-windows).
* On macOS, install [`Docker for Mac`](https://docs.docker.com/desktop/install/mac-install/).

## How to deploy the Spreadsheet Docker Image

**Step 1:** Pull the spreadsheet-server image from Docker Hub.

```console
docker pull syncfusion/spreadsheet-server
```

**Step 2:** Create the `docker-compose.yml` file with the following code in your file system.

```yaml
version: '3.4' 

services:
  spreadsheet-server:
    image: syncfusion/spreadsheet-server:latest
    environment:
      # Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
    ports:
      - "6002:8080"
```

**Note:** The Spreadsheet is a commercial product. It requires a valid [license key](https://help.syncfusion.com/common/essential-studio/licensing/licensing-faq/where-can-i-get-a-license-key) to use in a production environment. Please replace `YOUR_LICENSE_KEY` with the valid license key in the `docker-compose.yml` file.

**Step 3:** In a terminal tab, navigate to the directory where you've placed the `docker-compose.yml` file and execute the following:

```console
docker-compose up
```

Now the Spreadsheet server Docker instance runs on localhost with the provided port number `http://localhost:6002`. Open this link in a browser and navigate to the Spreadsheet Web API open and save service at `http://localhost:6002/api/spreadsheet/open` and `http://localhost:6002/api/spreadsheet/save`.

**Step 4:** Append the URLs of the Docker instance running services to the [`openUrl`](https://helpej2.syncfusion.com/angular/documentation/api/spreadsheet/#openurl) property as `http://localhost:6002/api/spreadsheet/open` and the [`saveUrl`](https://helpej2.syncfusion.com/angular/documentation/api/spreadsheet/#saveurl) property as `http://localhost:6002/api/spreadsheet/save` in the client-side Spreadsheet component. For more information on how to get started with the Spreadsheet component, refer to this [`getting started page.`](https://ej2.syncfusion.com/angular/documentation/spreadsheet/getting-started)

```ts

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SpreadsheetComponent, SpreadsheetModule } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
    <ejs-spreadsheet #dockerImage [openUrl]="openUrl" [saveUrl]="saveUrl">
    </ejs-spreadsheet>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [ SpreadsheetModule, ]
})

export class AppComponent {
    constructor() {
        
    }
    @ViewChild('dockerImage')
    public spreadsheetObj: SpreadsheetComponent;
    public openUrl = 'http://localhost:6002/api/spreadsheet/open';
    public saveUrl = 'http://localhost:6002/api/spreadsheet/save';
}
```

## How to configure different cultures using a Docker compose file

By default, the Spreadsheet Docker container is generated in the `en_US` culture. You can configure different cultures using the `LC_ALL`, `LANGUAGE`, and `LANG` environment variables in the `docker-compose.yml` file. These environment variables are replaced in the Docker file to set the specified culture for the Spreadsheet server.

```yaml
version: '3.4' 

services:
  spreadsheet-server:
    image: syncfusion/spreadsheet-server:latest
    environment:
      # Provide your license key for activation
      SYNCFUSION_LICENSE_KEY: YOUR_LICENSE_KEY
      # Specify the culture to configure for the Spreadsheet server
      LC_ALL: de_DE.UTF-8
      LANGUAGE: de_DE.UTF-8
      LANG: de_DE.UTF-8
    ports:
      - "6002:8080"
```

Please refer to these getting started pages to create a Spreadsheet in [`Javascript`](https://ej2.syncfusion.com/javascript/documentation/spreadsheet/getting-started), [`React`](https://ej2.syncfusion.com/react/documentation/spreadsheet/getting-started), [`Vue`](https://ej2.syncfusion.com/vue/documentation/spreadsheet/getting-started), [`ASP.NET Core`](https://ej2.syncfusion.com/aspnetcore/documentation/spreadsheet/getting-started-core), and [`ASP.NET MVC`](https://ej2.syncfusion.com/aspnetmvc/documentation/spreadsheet/getting-started-mvc).