---
layout: post
title: Feature Modules with Angular Rich Text Editor component | Syncfusion
description: Learn about feature modules in the Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more details.
platform: ej2-angular
control: Modules
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Angular Rich Text Editor

The Angular Rich Text Editor employs a modular architecture, allowing selective inclusion of features to optimize performance and customize functionality. This approach reduces bundle size and enhances flexibility for developers adapting the editor to specific use cases.

## What are modules in Angular Rich Text Editor?

Modules in the Angular Rich Text Editor are self-contained features that can be enabled or disabled based on application requirements. These modules, available in the `@syncfusion/ej2-angular-richtexteditor` package, can be injected to extend and enhance the editor's functionality.

For example, modules such as `ToolbarService`, `LinkService`, `ImageService`, `HtmlEditorService`, and `QuickToolbarService` enable specific tools and behavior in the Rich Text Editor interface.

## How to import and inject modules

To utilize a module, in the Angular Rich Text Editor, you must:

* Import the required module from the `@syncfusion/ej2-angular-richtexteditor` package

* Inject it using the `providers` array in the `@Component` decorator.

The following example demonstrates importing and injecting key modules:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/module-inject/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/module-inject/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/module-inject" %}

## Available modules in Rich Text Editor

The following table lists available modules, grouped by functionality, with their descriptions:

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
| `SlashMenuService` | Injecting this module allows users to apply formats, open dialogs by typing "/" in the Rich Text Editor. |
| `ImportExportService` | Injecting this module allows users to import content from Word documents into the Rich Text Editor and export the Rich Text Editor's content into Word and PDF files |
| `CodeBlockService ` | Injecting this module allows users to format the selected text as inline code, highlighting code snippets within the text in the Rich Text Editor. |
| `AutoFormatService` | Injecting this module automatically converts Markdown syntax into HTML as you type, supporting inline and block-level formatting for a seamless editing experience. |
| `AudioService` | Injecting this module allows users to insert and manage audios in the Rich Text Editor. |
| `VideoService` | Injecting this module allows users to insert and manage videos in the Rich Text Editor. |
| `ClipboardCleanupService` | Injecting this module allows to automatically clean clipboard content during copy and cut—removing unwanted inline styles while preserving structure. |
| `AIAssistantService` | Injecting this module provides AI Assistant functionalities to the Rich Text Editor. |

These modules should be injected into the **providers** section of root **NgModule** or component class.