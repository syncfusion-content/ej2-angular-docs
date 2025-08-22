---
layout: post
title: Undo and Redo in Angular Rich Text Editor component | Syncfusion
description: Learn how to use and customize Undo and Redo features in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Undo and Redo
documentation: ug
domainurl: ##DomainURL##
---

# Undo and Redo in Angular Rich Text Editor Component

The Undo and Redo features in the Rich Text Editor allowing you to reverse or restore recent changes, providing a safety net for text edits and enhancing the overall editing experience.

There are two ways to perform Undo and Redo operations:

1. **Toolbar**: Click the `Undo` or `Redo` buttons in the toolbar.
2. **Keyboard Shortcuts**:
   - **Undo**: `Ctrl + Z` (Windows) or `Cmd + Z` (Mac)
   - **Redo**: `Ctrl + Y` (Windows) or `Cmd + Shift + Z` (Mac)

## Configuring Undo/Redo timer

By default, the time interval for storing Undo/Redo actions is 300 milliseconds. You can adjust this interval using the [undoRedoTimer](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#undoredotimer) property.


## Configuring Undo/Redo steps

The [undoRedoSteps](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#undoredosteps) property defines the maximum number of Undo/Redo actions stored, allows up to 30. 

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

## Clearing the Undo/Redo stack

The Rich Text Editor automatically maintains an undo/redo stack, allowing users to revert or redo changes made during editing.

To clear the entire undo and redo stack, use the public [clearUndoRedo](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#clearundoredo) method. This is helpful when loading new content dynamically or resetting the editor to its initial state.

The following example demonstrates clearing the stack:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/undo-redo-stack/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/undo-redo-stack/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/undo-redo-stack" %}