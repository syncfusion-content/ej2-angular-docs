---
layout: post
title: Bookmark in Angular Document editor component | Syncfusion
description: Learn here all about Bookmark in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Bookmark 
documentation: ug
domainurl: ##DomainURL##
---

# Bookmark in Angular Document editor component

Bookmark is a powerful tool that helps you to mark a place in the document to find again easily. You can enter many bookmarks in the document and give each one a unique name to identify easily.

Document Editor provides built-in dialog to add, delete, and navigate bookmarks within the document. To add a bookmark, select a portion of text in the document. After that, jump to the location or add links to it within the document using built-in hyperlink dialog. You can also delete bookmarks from a document.

>Bookmark names need to begin with a letter. They can include both numbers and letters, but not spaces. To separate the words, use an underscore.
>Bookmark names starting with an underscore are called hidden bookmarks. For example, bookmarks generated for table of contents.

## Add bookmark

Using [`insertBookmark`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#insertbookmark) method, Bookmark can be added to the selected text.

```csharp
this.container.documentEditor.editor.insertBookmark("Bookmark1");
```

## Select Bookmark

You can select the bookmark in the document using [`selectBookmark`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#selectbookmark) method by providing Bookmark name to select as shown in the following code snippet.

```csharp
container.documentEditor.selection.selectBookmark("Bookmark1", true);
```
>Note: Second parameter is optional parameter and it denotes is exclude bookmark start and end from selection. If true, excludes bookmark start and end from selection.

## Delete Bookmark

You can delete bookmark in the document using [`deleteBookmark`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/editor/#deletebookmark) method as shown in the following code snippet.

```csharp
this.container.documentEditor.editor.deleteBookmark("Bookmark1");
```

## Get Bookmark from document

You can get all the bookmarks in the document using [`getBookmarks`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#getbookmarks) method as shown in the following code snippet.

```csharp
this.container.documentEditor.selection.getBookmarks(false);
```

>Note: Parameter denotes is include hidden bookmarks. If false, ignore hidden bookmark.

## Get Bookmark from selection

You can get bookmarks in current selection in the document using [`getBookmarks`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/selection/#getbookmarks) method as shown in the following code snippet.

```csharp
this.container.documentEditor.selection.getBookmarks(false);
```

## Replace bookmark content

You can replace bookmark content without removing the bookmark start and end for backtracking the bookmark content.

```csharp
this.container.documentEditor.selection.selectBookmark("Bookmark1", true);
this.container.documentEditor.editor.insertText('Hello World');
```

You can replace content by removing the bookmark start and end, thus the bookmark content can't be tracked in future.

```csharp
this.container.documentEditor.selection.selectBookmark("Bookmark1");
this.container.documentEditor.editor.insertText('Hello World');
```

## Show or Hide bookmark

You can show or hide the show square brackets around bookmarked items in Document editor component.

The following example code illustrates how to show or hide square brackets around bookmarked items.

```typescript
this.container.documentEditorSettings.showBookmarks = true;
```

## Bookmark Dialog

The following example shows how to open bookmark dialog in document editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/document-editor/bookmark-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/document-editor/bookmark-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/document-editor/bookmark-cs1" %}

## See Also

* [Feature modules](../document-editor/feature-module)
* [Bookmark dialog](../document-editor/dialog#bookmark-dialog)
