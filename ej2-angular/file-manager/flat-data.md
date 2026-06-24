---
layout: post
title: Flat JSON Data in Angular File Manager component | Syncfusion
description: Learn how to render flat JSON data in the Angular File Manager component using fileSystemData property without backend services.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Rendering Flat JSON Data in the Angular File Manager Component

The File Manager component supports using flat JSON data as an array of objects for rendering files and folders without requiring a backend service. This approach eliminates the need to define an [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager#ajaxsettings) URL and allows for client-side data manipulation.
## Implementing Flat JSON Data Binding
To bind flat JSON data to the File Manager:

1. Use the File Manager component's [fileSystemData](https://ej2.syncfusion.com/angular/documentation/api/file-manager#filesystemdata) property to provide an array of [fileData](https://ej2.syncfusion.com/angular/documentation/api/file-manager/fileData) interface objects.
2. Define parent-child relationships between files and folders using the `parentId` property in each object.

This means you no longer need to use a separate service provider, as you can integrate services like Google, Amazon, Azure, and others directly into your code using the FileManager's action events.

## The fileData Interface Structure

The `fileData` interface requires the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The name of the file or folder |
| `size` | number | The size of the file in bytes (not required for folders) |
| `dateModified` | Date | The date when the file or folder was last modified |
| `hasChild` | boolean | Indicates whether a folder has child items |
| `isFile` | boolean | Indicates whether the item is a file (`true`) or folder (`false`) |
| `type` | string | The MIME type of the file (for files only) |
| `id` | string | Unique identifier for the file or folder |
| `parentId` | string or null | ID of the parent folder. Use `null` for root-level items |

## Local Data Implementation

The File Manager can be populated with local data by providing an array of [fileData](https://ej2.syncfusion.com/angular/documentation/api/file-manager/fileData) interface objects with [parentId](https://ej2.syncfusion.com/angular/documentation/api/file-manager/fileData#parentid) mapping.

**Root-Level Folders and Files:**
- To render items at the root level, either set the `parentId` as `null` or omit the `parentId` property from the object.

**Nested Folders and Files:**
- For child items, set the `parentId` to match the `id` of the parent folder.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/flat-data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/flat-data-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/flat-data-cs1" %}

## Handling File Operations with Events

When using flat JSON data, you'll need to handle file operations manually by subscribing to the File Manager's events and updating your data accordingly.
### Key Events for Data Manipulation
Event Name | Description
 ---  | ---
[beforeDelete](https://ej2.syncfusion.com/angular/documentation/api/file-manager#beforedelete) | This event is triggered before the deletion of a file or folder occurs. It can be utilized to prevent the deletion of specific files or folders. Any actions, such as displaying a spinner for deletion, can be implemented here.
[delete](https://ej2.syncfusion.com/angular/documentation/api/file-manager#delete) | This event is triggered after the file or folder is deleted successfully. The deleted file or folder details can be retrieved here. Additionally, custom elements' visibility can be managed here based on the application's use case.
[beforeFolderCreate](https://ej2.syncfusion.com/angular/documentation/api/file-manager#beforefoldercreate) | This event is triggered before a folder is created. It allows for the restriction of folder creation based on the application's use case.
[folderCreate](https://ej2.syncfusion.com/angular/documentation/api/file-manager#foldercreate) | This event is triggered when a folder is successfully created. It provides an opportunity to retrieve details about the newly created folder.
[search](https://ej2.syncfusion.com/angular/documentation/api/file-manager#search) | This event is triggered when a search action occurs in the search bar of the File Manager component. It triggers each character entered in the input during the search process.
[beforeRename](https://ej2.syncfusion.com/angular/documentation/api/file-manager#beforerename) | This event is triggered when a file or folder is about to be renamed. It allows for the restriction of the rename action for specific folders or files by utilizing the cancel option.
[rename](https://ej2.syncfusion.com/angular/documentation/api/file-manager#rename) | This event is triggered when a file or folder is successfully renamed. It provides an opportunity to fetch details about the renamed file.
[beforeMove](https://ej2.syncfusion.com/angular/documentation/api/file-manager#beforemove) | This event is triggered when a file or folder begins to move from its current path through a copy/cut and paste action.
[move](https://ej2.syncfusion.com/angular/documentation/api/file-manager#move) | This event is triggered when a file or folder is pasted into the destination path.