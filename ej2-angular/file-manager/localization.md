---
layout: post
title: Localization in Angular File Manager component | Syncfusion
description: Learn how to implement localization and language support in Angular File Manager component with examples and complete key reference.
platform: ej2-angular
control: File Manager 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular File Manager component

Localization enables the File Manager component to adapt to different languages and cultural settings by translating its user interface elements. This feature ensures your application is accessible to users worldwide, regardless of their language preference.

The File Manager uses the `L10n` service to handle text and message translations. The default locale is `en` (English), but you can localize the component to any supported culture by providing translations for the UI strings.

## Setting up localization

To implement localization in your File Manager component:

1. Import the `L10n` module from the `@syncfusion/ej2-base` package
2. Load the desired locale object with translations
3. Set the current locale using the `setCulture()` method

## Default localization keys

The following table lists all available localization keys and their default English values in the File Manager component:

|KEY|Text/Message|
|----|----|
|NewFolder|New folder|
|Upload|Upload|
|Delete|Delete|
|Rename|Rename|
|Download|Download|
|Cut|Cut|
|Copy|Copy|
|Paste|Paste|
|SortBy|Sort by|
|Refresh|Refresh|
|Item-Selection|item selected|
|Items-Selection|items selected|
|View|View|
|Details|Details|
|SelectAll|Select all|
|Open|Open|
|Tooltip-NewFolder|New folder|
|Tooltip-Upload|Upload|
|Tooltip-Delete|Delete|
|Tooltip-Rename|Rename|
|Tooltip-Download|Download|
|Tooltip-Cut|Cut|
|Tooltip-Copy|Copy|
|Tooltip-Paste|Paste|
|Tooltip-SortBy|Sort by|
|Tooltip-Refresh|Refresh|
|Tooltip-Selection|Clear selection|
|Tooltip-View|View|
|Tooltip-Details|Details|
|Tooltip-SelectAll|Select all|
|Name|Name|
|Size|Size|
|DateModified|Modified|
|DateCreated|Date created|
|Path|Path|
|Created|Created|
|Modified|Modified|
|Location|Location|
|Type|Type|
|Permission|Permission|
|Ascending|Ascending|
|Descending|Descending|
|None|None|
|View-LargeIcons|Large icons|
|View-Details|Details|
|Search|Search|
|Button-Ok|OK|
|Button-Cancel|Cancel|
|Button-Yes|Yes|
|Button-No|No|
|Button-Create|Create|
|Button-Save|Save|
|Header-NewFolder|Folder|
|Content-NewFolder|Enter your folder name|
|Header-Rename|Rename|
|Content-Rename|Enter your new name|
|Header-Rename-Confirmation|Rename Confirmation|
|Content-Rename-Confirmation|If you change a file name extension, the file might become unstable. Are you sure you want to change it?|
|Header-Delete|Delete File|
|Content-Delete|Are you sure you want to delete this file?|
|Header-Multiple-Delete|Delete Multiple Files|
|Content-Multiple-Delete|Are you sure you want to delete these {0} files?|
|Header-Folder-Delete|Delete Folder|
|Content-Folder-Delete|Are you sure you want to delete this folder?|
|Header-Duplicate|File exists|
|Content-Duplicate| already exists. Are you sure you want to replace it?|
|Header-Upload|Upload Files|
|Error|Error|
|Validation-Empty|The file or folder name cannot be empty.|
|Validation-Invalid|The file or folder name {0} contains invalid characters. Please use a different name. Valid file or folder names cannot end with a dot or space, and cannot contain any of the following characters: \\/:*?\"<>\||
|Validation-NewFolder-Exists|A file or folder with the name {0} already exists.|
|Validation-Rename-Exists|Cannot rename {0} to {1}, destination already exists.|
|Folder-Empty|This folder is empty|
|File-Upload|Drag files here to upload|
|Search-Empty|No results found|
|Search-Key|Try with different keywords|
|Filter-Empty|No results found|
|Filter-Key|Try with different filter|
|Sub-Folder-Error|The destination folder is the subfolder of the source folder|
|Same-Folder-Error|The destination folder is the same as the source folder.|
|Access-Denied|Access Denied|
|Access-Details|You don't have permission to access this folder|
|Header-Retry|File Already Exists|
|Content-Retry|A file with this name already exists in this folder. What would you like to do?|
|Button-Keep-Both|Keep both|
|Button-Replace|Replace|
|Button-Skip|Skip|
|ApplyAll-Label|Do this for all current items|
|KB|KB|
|Access-Message|{0} is not accessible. You need permission to perform the {1} action.|
|Network-Error|NetworkError: Failed to send on XMLHTTPRequest: Failed to load|
|Server-Error|ServerError: Invalid response from|

## Example: Localizing to German (de-DE)

The following example demonstrates how to localize the File Manager to German language:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/localization-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/localization-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/localization-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/localization-cs1" %}

## Rendering component in right-to-left direction

It is possible to render the File Manager in right-to-left direction by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/file-manager#enablertl) API to true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/file-manager/rtl-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="styles.css" %}
{% include code-snippet/file-manager/rtl-cs1/src/styles.css %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/file-manager/rtl-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/file-manager/rtl-cs1" %}
