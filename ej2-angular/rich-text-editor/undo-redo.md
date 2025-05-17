---
layout: post
title: Undo redo in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Undo redo in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Undo redo 
documentation: ug
domainurl: ##DomainURL##
---

# Undo Redo in the Angular Rich Text Editor Component

The Undo and Redo features in the Rich Text Editor allowing you to reverse or restore recent changes, providing a safety net for text edits and enhancing the overall editing experience.

There are two ways to perform Undo and Redo operations:

1. Click the Undo or Redo buttons on the toolbar.
2. Use keyboard shortcuts:
   - For Undo: `Ctrl + Z` (Windows) or `Cmd + Z` (Mac)
   - For Redo: `Ctrl + Y` (Windows) or `Cmd + Shift + Z` (Mac)

## Configuring Undo/Redo timer

By default, the time interval for storing Undo/Redo actions is 300 milliseconds. You can adjust this interval using the [`undoRedoTimer`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#undoredotimer) property.


## Configuring Undo/Redo steps

The editor allows up to 30 Undo/Redo actions by default. You can modify the number of undo/redo steps using the [`undoRedoSteps`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#undoredosteps) property.

Here's an example of how to customize both the Undo/Redo timer and steps:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs21/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs21/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs21" %}
