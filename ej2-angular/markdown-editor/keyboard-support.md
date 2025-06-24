---
layout: post
title: Keyboard support in Angular Markdown Editor component | Syncfusion
description: Learn here all about Keyboard support in Syncfusion Angular Markdown editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Keyboard support
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard support in Angular Markdown Editor Component

You can use the following keyboard shortcuts when the Rich Text Editor is set to [editorMode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode) as `Markdown`.

## Toolbar

These shortcuts provide quick access to toolbar functions for managing menus and dialogs.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Focus on toolbar | <kbd>Alt</kbd> + <kbd>F10</kbd> | <kbd>⌥</kbd> + <kbd>F10</kbd> |
| Close dropdowns/menu and dialogs | <kbd>Esc</kbd> | <kbd>Esc</kbd> |

## Content editing and formatting

These shortcuts help in efficiently editing and formatting text content.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Select all content | <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd> + <kbd>A</kbd> |
| Insert a hard line break (a new paragraph) | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
| Make text bold | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |
| Italicize text | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |
| Apply strikethrough | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>S</kbd> |

## Inserting

These shortcuts allow for the quick insertion of tables, links, and images.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Open the insert table dialog | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>E</kbd> |
| Create link | <kbd>Ctrl</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd> + <kbd>K</kbd> |
| Open the insert image dialog | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>I</kbd> |

## Text manipulation

These shortcuts help in modifying text case and applying superscript or subscript.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Convert text to uppercase | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>U</kbd> |
| Convert text to lowercase | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>L</kbd> |
| Apply superscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>=</kbd> |
| Apply subscript | <kbd>Ctrl</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd> + <kbd>=</kbd> |

## Lists

These shortcuts enable the creation of ordered and unordered lists.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Create an ordered list | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>O</kbd> |
| Create an unordered list | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>O</kbd> |

## Clipboard operations

These shortcuts facilitate copying, cutting, and pasting content.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Copy the selected content  | <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd> + <kbd>C</kbd> |
| Cut the selected content | <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd> + <kbd>X</kbd> |
| Paste the copied or cut content | <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd> + <kbd>V</kbd> |

## Undo & redo

These shortcuts allow for undoing and redoing recent changes.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> |

## Other actions

These shortcuts provide additional functionalities like fullscreen mode.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Toggle fullscreen mode | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>F</kbd> |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs14" %}