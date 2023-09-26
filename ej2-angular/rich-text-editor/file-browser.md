---
layout: post
title: File browser in Angular Rich text editor component | Syncfusion
description: Learn here all about File browser in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: File browser 
documentation: ug
domainurl: ##DomainURL##
---

# File browser in Angular Rich text editor component

Rich Text Editor allows to browse and insert images in the edit panel using the file browser. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

To get start quickly about Inserting Images in the Angular Rich Text Editor Using a File Manager, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=teTOxZx4MCc" %}

## Required additional dependency

The following list of additional dependencies are required to use the file browser feature in the Rich Text Editor.

```js

|-- @syncfusion/ej2-angular-richtexteditor
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager

```

## Additional CSS Reference

Additionally add below styles in the `[src/styles.css]` file.

```css

  @import "https://ej2.syncfusion.com/angular/documentation/node_modules/@syncfusion/ej2-layouts/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-filemanager/styles/material.css";

```

The following example explains about how to configure the file browser within the Rich Text Editor.

* Configure the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set the [`enable`](../api/rich-text-editor/fileManagerSettings/#enable) property as `true` on [`fileManagerSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#fileManagerSettings) property to make the file browser in the  Rich Text Editor to appear on the `FileManager` toolbar click action.

> Rich Text Editor features are segregated into individual feature-wise modules. To use the file browser tool, configure `FileManagerService` in providers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/file-browser-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/file-browser-cs1" %}