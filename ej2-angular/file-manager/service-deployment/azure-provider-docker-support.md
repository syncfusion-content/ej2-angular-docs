---
layout: post
title: Azure Provider Docker Support in Angular File Manager | Syncfusion
description: Learn how to deploy the Angular File Manager Azure file provider using the pre-built Docker image and required Azure Blob Storage settings.
control: File Manager
platform: ej2-angular
documentation: ug
domainurl: ##DomainURL##
---

# Azure Provider Docker Support in Angular File Manager

The Angular [File Manager](https://www.syncfusion.com/angular-components/angular-file-manager) is a component for managing files and folders in a web application. It provides a Windows Explorer like interface for file operations such as viewing, selecting, uploading, downloading, sorting, filtering, creating, renaming, copying, moving, and deleting files and folders.

This Docker image provides a preconfigured Docker container for the Syncfusion File Manager Azure file provider backend. The server-side Web API targets ASP.NET Core 10.0 and connects to Azure Blob Storage

You can quickly deploy the Docker image to your infrastructure. To add custom functionality, create your own Docker file based on the existing [File Manager Azure Docker project](https://github.com/SyncfusionExamples/azure-aspcore-file-provider).

## Prerequisites

Have Docker installed in your environment:

- On Windows, install [Docker for Windows](https://docs.docker.com/docker-for-windows/install/).
- On macOS, install [Docker for Mac](https://docs.docker.com/docker-for-mac/install/).

## How to deploy the File Manager Azure Service Docker Image

### Step 1: Pull the Azure file provider image from Docker Hub

{% tabs %}
{% highlight bash %}
docker pull syncfusion/filemanager-azure-aspnetcore-provider
{% endhighlight %}
{% endtabs %}

### Step 2: Create the docker-compose.yml file with the following content

{% tabs %}
{% highlight yaml tabtitle="docker-compose.yml" %}
version: '3.8'

services:
  azure-aspnetcore-provider:
    image: syncfusion/filemanager-azure-aspnetcore-provider:latest
    environment:
      # Provide your Azure Blob Storage credentials
      AZURE_ACCOUNT_NAME: YOUR_AZURE_ACCOUNT_NAME
      AZURE_ACCOUNT_KEY: YOUR_AZURE_ACCOUNT_KEY
      AZURE_BLOB_NAME: YOUR_AZURE_BLOB_NAME
      # Full URL of the Azure Blob container where the file manager operates.
      # Example: "https://<account>.blob.core.windows.net/<container>/"
      AZURE_BLOB_PATH: "Blob_Path"
      # Full URL of the file path inside the blob container (the root folder shown by the file manager).
      # Example: "https://<account>.blob.core.windows.net/<container>/<file-path>"
      AZURE_FILE_PATH: "File_Path"
    ports:
      - "5000:80"
{% endhighlight %}
{% endtabs %}

#### Azure Blob Storage credential details

| Environment Variable | Required | Description |
|----------------------|----------|-------------|
| `AZURE_ACCOUNT_NAME` | Yes | Name of your Azure Storage account. |
| `AZURE_ACCOUNT_KEY` | Yes | Access key for your Azure Storage account. |
| `AZURE_BLOB_NAME` | Yes | Name of the blob container that stores the files. |
| `AZURE_BLOB_PATH` | Yes | Full URL of the Azure Blob container. Example: `https://<account>.blob.core.windows.net/<container>/` |
| `AZURE_FILE_PATH` | Yes | Full URL of the file path inside the blob container shown by the File Manager. Example: `https://<account>.blob.core.windows.net/<container>/<file-path>` |

### Step 3: Run the container

In a terminal tab, navigate to the directory where you placed the `docker-compose.yml` file and execute the following:

{% tabs %}
{% highlight bash %}
docker compose up
{% endhighlight %}
{% endtabs %}

The File Manager Azure provider is accessible at http://localhost:5000.

To stop the container, run:

{% tabs %}
{% highlight bash %}
docker compose down
{% endhighlight %}
{% endtabs %}

### Step 4: Configure the client-side File Manager component

Set the [`url`](https://ej2.syncfusion.com/angular/documentation/api/file-manager/ajaxsettingsmodel#url), [`uploadUrl`](https://ej2.syncfusion.com/angular/documentation/api/file-manager/ajaxsettingsmodel#uploadurl), [`downloadUrl`](https://ej2.syncfusion.com/angular/documentation/api/file-manager/ajaxsettingsmodel#downloadurl), and [`getImageUrl`](https://ej2.syncfusion.com/angular/documentation/api/file-manager/ajaxsettingsmodel#getimageurl) properties in the client-side File Manager component:

| Property | Value |
|----------|-------|
| `url` | `http://localhost:5000/api/AzureProvider/AzureFileOperations` |
| `uploadUrl` | `http://localhost:5000/api/AzureProvider/AzureUpload` |
| `downloadUrl` | `http://localhost:5000/api/AzureProvider/AzureDownload` |
| `getImageUrl` | `http://localhost:5000/api/AzureProvider/AzureGetImage` |

The following example shows an Angular client that configures the [`ajaxSettings`](https://ej2.syncfusion.com/angular/documentation/api/file-manager/ajaxsettings) properties.

{% raw %}

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
import { Component } from '@angular/core';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FileManagerModule],
    template: `<div class="control-section">
        <ejs-filemanager id="filemanager" [ajaxSettings]="ajaxSettings"></ejs-filemanager>
    </div>`
})
export class App {
    public hostUrl: string = 'http://localhost:5000/';
    public ajaxSettings: object = {
        url: this.hostUrl + 'api/AzureProvider/AzureFileOperations',
        uploadUrl: this.hostUrl + 'api/AzureProvider/AzureUpload',
        downloadUrl: this.hostUrl + 'api/AzureProvider/AzureDownload',
        getImageUrl: this.hostUrl + 'api/AzureProvider/AzureGetImage'
    };
}
{% endhighlight %}
{% endtabs %}

{% endraw %}

For more information on how to get started with the File Manager component, refer to this [Getting Started](../getting-started) page.

## Troubleshooting

This section lists common issues and their solutions when deploying the File Manager Azure provider Docker image.

- The Docker image is built on **ASP.NET Core 10.0**. Ensure that your Docker environment supports the required runtime. If you build a custom image, target `net10.0` or use the same base image to avoid runtime mismatch errors.

- All environment variables listed in the [Azure Blob Storage credential details](#azure-blob-storage-credential-details) section are **required**. Missing or incorrect values will cause the provider to fail at startup or return errors during file operations. Verify that `AZURE_ACCOUNT_NAME`, `AZURE_ACCOUNT_KEY`, `AZURE_BLOB_NAME`, `AZURE_BLOB_PATH`, and `AZURE_FILE_PATH` are set correctly before running the container.

- If the File Manager client cannot connect to the provider, confirm that the port mapping in `docker-compose.yml` matches the URL configured in the client-side `ajaxSettings`. For example, if the port is mapped as `5000:80`, the client should use `http://localhost:5000` as the host URL.

Please refer to these getting started pages to create a File Manager in [JavaScript](https://ej2.syncfusion.com/javascript/documentation/file-manager/es5-getting-started), [React](https://ej2.syncfusion.com/react/documentation/file-manager/getting-started), [Vue](https://ej2.syncfusion.com/vue/documentation/file-manager/getting-started), [ASP.NET Core](https://ej2.syncfusion.com/aspnetcore/documentation/file-manager/getting-started), [ASP.NET MVC](https://ej2.syncfusion.com/aspnetmvc/documentation/file-manager/getting-started), [TypeScript](https://ej2.syncfusion.com/documentation/file-manager/getting-started), and [Blazor](https://blazor.syncfusion.com/documentation/file-manager/getting-started-with-web-app).
