---
layout: post
title: Feature modules with Angular Rich text editor component | Syncfusion
description:  Checkout and learn about Feature modules with Angular Rich text editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Modules 
documentation: ug
domainurl: ##DomainURL##
---

# Module in Angular Rich Text Editor component

The Angular Rich Text Editor component follows a modular architecture, enabling users to include or exclude features as needed to ensure optimal performance and customization.

## What is a module in Angular Rich Text Editor?

In the Angular Rich Text Editor, a module refers to a self-contained feature or functionality that can be selectively enabled or disabled. These modules are provided as part of the @syncfusion/ej2-angular-richtexteditor package and can be injected to extend the editor's capabilities.

For example, modules such as `Toolbar`, `Link`, `Image`, `HtmlEditor`, and `QuickToolbar` enable specific tools and behavior in the Rich Text Editor interface.

## How to import and inject modules

To use a module in the Angular Rich Text Editor, you must:

* Import the required module from the Syncfusion package.

* Inject it using the providers array in the @Component decorator.

The following example demonstrates how to import and inject modules.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs1" %}

## Available modules in Rich Text Editor

| Module | Description |
|------|-------------|
| `ToolbarService` | Inject this module to enable the toolbar to access text formatting and Rich Text Editor features like bold, italic, font settings, and alignment tools. |
| `LinkService` | Inject this module to insert, edit, and remove hyperlinks within the content. |
| `ImageService` | Inject this module to insert and manage images in the Rich Text Editor. |
| `TableService` | Inject this module for inserting and editing HTML tables in the Rich Text Editor. |
| `CountService` | Inject this module to enable live character counting capabilities in the Rich Text Editor. |
| `HtmlEditorService` | Inject this module to support the HTML source editing view, allowing users to switch between preview and source code modes. |
| `MarkdownEditorService` | Inject this module to enable editing support, allowing users to write and preview content using standard Markdown syntax |
| `QuickToolbarService` | Inject this module to displays a floating toolbar near selected content like images or links for quick actions. |
| `ResizeService` | Injecting this module enables users to resize the height and width of the editor area interactively using a resizable handle in the Rich Text Editor. |
| `FileManagerService` | Injecting this module provides users with a dialog interface to browse, upload, and insert files (especially images) from a server or cloud storage provider directly into the Rich Text Editor. |
| `PasteCleanupService` | Inject this module to keep or clean up the formatting of pasted content in Rich Text Editor. |
| `FormatPainterService` | Injecting this module allows users to copy formatting (like bold, italic, font size, color, etc.) from one section of text and apply it to another in the Rich Text Editor. |
| `EmojiPickerService` | Injecting this module allows users to search, and insert emojis into the Rich Text Editor. |

These modules should be injected into the **providers** section of root **NgModule** or component class.