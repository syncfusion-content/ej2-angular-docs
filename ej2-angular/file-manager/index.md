---
layout: post
title: Index in Angular File Manager component | Syncfusion
description: Learn here all about Index in Syncfusion Angular File Manager component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Index in Angular File Manager component

The **File Manager** is a graphical user interface component for managing the file system that allows the users to perform most common file operation like accessing, editing, and sorting the files and folders.
Also, this component has easy navigation functionality for browsing the folders to select a file or folder from the file system.

## Key features

### File operations

* `Read` - Reads the files from the provided directory path location from the server.
* `Create` - Creates a new folder in a user defined file system path.
* `Delete` - Deletes the files from any file location in the file system.
* `Rename` - Renames any existing file or folder name from the file system.
* `Upload` - Uploads any type of files to the server file system managed by File Manager.
* `Download` - Downloads any type of files and folders from the server file system.
* `Refresh` - Refresh the content of the selected folder in the File Manager.

### View preferences

The **Views** property allows you to customize, how the folders or files in the file system should be displayed in the File Manager.

The File Manager provides the following two view options to change the layout of the File Manger window.

* `Details view` - In the Details view, the files are displayed in a sorted listed order. This file list comprises of several columns of information about the files such as **Name**, **Date Modified**, **Type**, and **Size**. Each file has its own small icon representing the file type.

* `Large Icon view` - In the Large view, the thumbnail icons will be shown in a larger size, which displays the data in a form that best suits their content.  For example, the **preview** of the image will be displayed for image and video type files and extension thumbnails will be displayed for other type files.

### Navigation in File Managers

File Manager has the easy file navigation options for navigating through the file system for accessing any user designed file to perform any file operation.

Types of navigation support available in File Manager are:

* `Breadcrumb` - Breadcrumb will be present below the toolbar, that mainly gives an advantage of tracking the hierarchy of the file or folder navigation and it gives trail that you can follow to get back to parent folder or drive of the current folder.

* `Navigation pane` - Navigation pane is present at the left side of the File Manager. It allows quick and direct access of a file or folder in a file system where the entire folder hierarchy is listed using a tree view. This can be made visible or hidden as per user requirement.

### Context Menu

The File Manager component is provided with context-menu support to perform list of file operations with the files and folders. It appears when a file or folder is right-clicked, and it appears with varying options based on the target such as a file or a folder. The context menu items can be customized according to user preference.

### Toolbar

The toolbar contains the list of tools to perform various operations like file upload or download, view switching, and more. The toolbar can also be configured to add any custom functionality to be performed with the file system

### File Manipulations

* `Multi-Selection` - The File Manager component is provided with built-in support for multiple files or folder selection. Multiple file selection will be effective when a single operation like download or delete is performed over multiple files in the file system.

* `Sorting` - Files and folders in the file system can be sorted either in the ascending or descending order by clicking the column header. Files and folders can be sorted based on the name, date created, size, and more.

### RTL and Localization support

* Supports right-to-left (RTL) direction alignment for users working in right-to-left languages like Hebrew and Arabic.

* The File Manager component uses localization library (l10) to localize the text values. The texts and messages displayed in the user interface can be localized to any desired language as needed.