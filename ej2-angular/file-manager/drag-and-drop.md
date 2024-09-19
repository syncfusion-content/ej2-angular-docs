---
layout: post
title: Drag and drop in Angular File manager component | Syncfusion
description: Learn here all about Drag and drop in Syncfusion Angular File manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Drag and drop 
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop in Angular File manager component

The file manager allows files and folders to be moved within the file system by drag and dropping them. This support can be enabled or disabled using the [allowDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#allowdraganddrop) property of the file manager.

The events which trigger when using drag and drop functionality are listed below.

* [fileDragStart](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#filedragstart) - Triggers when the file/folder dragging is started.
* [fileDragging](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#filedragging) - Triggers while dragging the file/folder.
* [fileDragStop](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#filedragstop) - Triggers when the file/folder is about to be dropped at the target.
* [fileDropped](https://ej2.syncfusion.com/angular/documentation/api/file-manager/#filedropped) - Triggers when the file/folder is dropped.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/drag-and-drop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/drag-and-drop-cs1" %}
