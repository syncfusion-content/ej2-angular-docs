---
layout: post
title: FlatData in Angular File Manager component | Syncfusion
description: Learn here all about Views in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Rendering Flat JSON Data in the Angular File Manager Component

The File Manager can use flat JSON data as an array of objects for rendering, eliminating the need to define an [ajaxSettings](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#ajaxsettings) URL. To load a folder data as an array of objects, use the File Manager component's [fileSystemData](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#filesystemdata) property with a type of [fileData](https://ej2.syncfusion.com/angular/documentation/api/file-manager/fileData/) interface. This means you no longer need to use a separate service provider, as you can integrate services like Google, Amazon, Azure, and others directly into your code using the FileManager's action events.

**Event Information**

Event Name | Description
 ---  | ---
[beforeDelete](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#beforedelete) | This event is triggered before the deletion of a file or folder occurs. It can be utilized to prevent the deletion of specific files or folders. Any actions, such as displaying a spinner for deletion, can be implemented here.
[delete](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#delete) | This event is triggered after the file or folder is deleted successfully. The deleted file or folder details can be retrieved here. Additionally, custom elements' visibility can be managed here based on the application's use case.
[beforeFolderCreate](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#beforefoldercreate) | This event is triggered before a folder is created. It allows for the restriction of folder creation based on the application's use case.
[folderCreate](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#foldercreate) | This event is triggered when a folder is successfully created. It provides an opportunity to retrieve details about the newly created folder.
[search](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#search) | This event is triggered when a search action occurs in the search bar of the File Manager component. It triggers each character entered in the input during the search process.
[beforeRename](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#beforerename) | This event is triggered when a file or folder is about to be renamed. It allows for the restriction of the rename action for specific folders or files by utilizing the cancel option.
[rename](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#rename) | This event is triggered when a file or folder is successfully renamed. It provides an opportunity to fetch details about the renamed file.
[beforeMove](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#beforemove) | This event is triggered when a file or folder begins to move from its current path through a copy/cut and paste action.
[move](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#move) | This event is triggered when a file or folder is pasted into the destination path.

## Local data

The File Manager can be populated with local data consisting of an array of [fileData](https://ej2.syncfusion.com/angular/documentation/api/file-manager/fileData/) interface objects with [parentId](https://ej2.syncfusion.com/angular/documentation/api/file-manager/fileData/#parentid) mapping.

To render the root-level folder, specify the `parentId` as null, or there is no need to specify the `parentId` in the array of `fileData` interface objects.

The [type](https://ej2.syncfusion.com/angular/documentation/api/file-manager/fileData/#type) field in the flat data source must not be `null`. This field identifies whether the item is a file or a folder, and it also specifies the file type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/flat-data-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/flat-data-cs1/src/styles.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/flat-data-cs1" %}

