---
layout: post
title: Keyboard support in Angular Rich text editor component | Syncfusion
description: Learn here all about Keyboard support in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Keyboard support 
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard support in Angular Rich text editor component

The Rich Text Editor has full keyboard accessibility that includes shortcuts to open and other actions with toolbar items, drop-down lists and dialogs.

## HTML formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with `HTML` [editorMode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode).

### Toolbar

The toolbar shortcuts allow quick navigation and interaction with the toolbar elements, including focusing, moving between tools, and executing actions like closing menus and dialogs.

| Actions | Windows | Mac |
|----------------|---------| --------- |
| Toolbar focus| <kbd>Alt</kbd> + <kbd>F10</kbd> | <kbd>⌥</kbd> + <kbd>F10</kbd> |
| Move to next tool | <kbd>→</kbd> | <kbd>→</kbd>, <kbd>⌘</kbd> + <kbd>F</kbd>  |
| Move to previous tool | 	<kbd>←</kbd> | <kbd>←</kbd>, <kbd>⌘</kbd> + <kbd>F</kbd> |
| Close dropdowns/menu and dialogs | <kbd>Esc</kbd> | <kbd>Esc</kbd> |
| Execute the currently focused tool action | <kbd>Enter</kbd>, <kbd>Space</kbd> | <kbd>Enter</kbd>, <kbd>Space</kbd> |

### Content editing and formatting

These keyboard shortcuts allow for quick access to content editing features like bold, italic, and text selection.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Select All| <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd>+ <kbd>A</kbd> |
| Insert new line | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
| Insert a soft break (line break without starting a new paragraph) | <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>⇧</kbd>+ <kbd>Enter</kbd> |
| Bold| <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |
| Italic| <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |
| Strikethrough| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>⌘</kbd> + <kbd>⇧ </kbd>+ <kbd>S</kbd> |
| Inline code | <kbd>Ctrl</kbd> + <kbd>`</kbd> |  <kbd>⌘</kbd>+<kbd>`</kbd> |
| Create link| <kbd>Ctrl</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd>+ <kbd>K</kbd> |
| Copy format painter | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | <kbd>⌥</kbd>+<kbd>⌘</kbd>+</kbd>C</kbd> |
|  Paste format painter | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> |  <kbd>⌥</kbd>+<kbd>⌘</kbd>+<kbd>V</kbd> |
| Clear the copy format painter | <kbd>Esc</kbd> | <kbd>Esc</kbd> |
| Tab space (when [enableTabKey](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#enabletabkey) is enabled) | <kbd>Tab</kbd> | <kbd>Tab</kbd> |

### Inserting

These shortcuts enable you to quickly insert tables, images, audio, and videos into your content.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Insert table| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd>+<kbd>E</kbd> |
| Insert image| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>I</kbd> |
| Insert audio | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>A</kbd> |
| Insert video | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd>+<kbd>⌥</kbd>+<kbd>V</kbd> |

### Table cell 

These shortcuts assist in navigating between table cells and managing table rows easily.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Move to the next cell | <kbd>Tab</kbd>  |  <kbd>Tab</kbd> |
| Move to the previous cell | <kbd>Shift</kbd>+<kbd>Tab</kbd> | <kbd>⇧</kbd>+<kbd>Tab</kbd> |
| Insert a new table row (when in the last cell) | <kbd>Tab</kbd>  | <kbd>Tab</kbd>  |
| Navigate through the table (using arrow keys) | <kbd>↑</kbd>, <kbd>→</kbd>,<kbd> ↓</kbd>, <kbd>←</kbd> | <kbd>↑</kbd>, <kbd>→</kbd>,<kbd> ↓</kbd>, <kbd>←</kbd> |

### Text Manipulation

These shortcuts allow you to manipulate text, such as changing case or applying superscript/subscript formatting.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Uppercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>U</kbd> |
| Lowercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>L</kbd> |
| Superscript| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>=</kbd> |
| Subscript| <kbd>Ctrl</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd>+<kbd>=</kbd> |

### Alignment and Formatting

These shortcuts help you quickly adjust text alignment and formatting, such as left, center, or right justification.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Justify center| <kbd>Ctrl</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd>+<kbd>E</kbd> |
| Justify full | <kbd>Ctrl</kbd> + <kbd>J</kbd> | <kbd>⌘</kbd>+<kbd>J</kbd> |
| Justify left | <kbd>Ctrl</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd>+<kbd>L</kbd> |
| Justify right | <kbd>Ctrl</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd>+<kbd>R</kbd> | 

## List and Indentation

These shortcuts help with creating and adjusting ordered and unordered lists, and modifying indentations.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Indents| <kbd>Ctrl</kbd> + <kbd>]</kbd> | <kbd>⌘</kbd>+<kbd>]</kbd> |
| Outdents| <kbd>Ctrl</kbd> + <kbd>[</kbd> | <kbd>⌘</kbd>+<kbd>[</kbd> |
| Ordered list| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>O</kbd> |
| Unordered list| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd>+<kbd>⌥</kbd>+<kbd>O</kbd> |

### Clipboard Operations

These shortcuts streamline copying, cutting, pasting, and pasting content as plain text.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Copy| <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd>+<kbd>C</kbd> |
| Cut| <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd>+<kbd>X</kbd> |
| Paste| <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd>+<kbd>V</kbd> |
| Paste content as plain text | <kbd>Ctrl</kbd> +<kbd>Shift</kbd>+ <kbd>V</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>V</kbd> |

### Undo & Redo

These shortcuts allow you to quickly undo and redo changes to your content.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Undo| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd>+<kbd>Z</kbd> |
| Redo| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd>+<kbd>Y</kbd> |

### Other Actions

These miscellaneous shortcuts help with actions like toggling fullscreen, clearing formatting, and accessing the HTML source.

| Actions | PC | Mac | 
|----------------|---------| --------- |
| HTML source | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>H</kbd> |
| Fullscreen| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>F</kbd> |
| Exit Fullscreen| <kbd>Esc</kbd> | <kbd>Esc</kbd> |
| Clear format | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>R</kbd> |


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs13" %}

## Markdown formation shortcut key

You can use the following key shortcuts when the Rich Text Editor renders with `Markdown` [editorMode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode).

### Toolbar

These shortcuts provide quick access to toolbar functions for managing menus and dialogs.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Toolbar focus| <kbd>Alt</kbd> + <kbd>F10</kbd> | <kbd>⌥</kbd> + <kbd>F10</kbd> |
| Close dropdowns/menu and dialogs | <kbd>Esc</kbd> | <kbd>Esc</kbd> |

### Content editing and formatting

These shortcuts help in efficiently editing and formatting text content.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Select All| <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>⌘</kbd>+ <kbd>A</kbd> |
| Insert new line | <kbd>Enter</kbd> | <kbd>Enter</kbd> |
| Bold| <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |
| Italic| <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |
| Strikethrough| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | <kbd>⌘</kbd> + <kbd>⇧ </kbd>+ <kbd>S</kbd> |

### Inserting

These shortcuts allow for the quick insertion of tables, links, and images.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Insert table| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> | <kbd>⌘</kbd> + <kbd>⇧</kbd>+<kbd>E</kbd> |
| Insert link| <kbd>Ctrl</kbd> + <kbd>K</kbd> | <kbd>⌘</kbd>+ <kbd>K</kbd> |
| Insert image| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>I</kbd> |

### Text Manipulation

These shortcuts help in modifying text case and applying superscript or subscript.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Uppercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>U</kbd> |
| Lowercase| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>L</kbd> |
| Superscript| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>=</kbd> |
| Subscript| <kbd>Ctrl</kbd> + <kbd>=</kbd> | <kbd>⌘</kbd>+<kbd>=</kbd> |

## Lists

These shortcuts enable the creation of ordered and unordered lists.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Ordered list| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>O</kbd> |
| Unordered list| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>O</kbd> | <kbd>⌘</kbd>+<kbd>⌥</kbd>+<kbd>O</kbd> |

### Clipboard Operations

These shortcuts facilitate copying, cutting, and pasting content.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Copy| <kbd>Ctrl</kbd> + <kbd>C</kbd> | <kbd>⌘</kbd>+<kbd>C</kbd> |
| Cut| <kbd>Ctrl</kbd> + <kbd>X</kbd> | <kbd>⌘</kbd>+<kbd>X</kbd> |
| Paste| <kbd>Ctrl</kbd> + <kbd>V</kbd> | <kbd>⌘</kbd>+<kbd>V</kbd> |

### Undo & Redo

These shortcuts allow for undoing and redoing recent changes.

| Actions | Windows | Mac | 
|----------------|---------| ---------|
| Undo| <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd>+<kbd>Z</kbd> |
| Redo| <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd>+<kbd>Y</kbd> |

### Other Actions

These shortcuts provide additional functionalities like fullscreen mode.

| Actions | Windows | Mac | 
|----------------|---------| --------- |
| Fullscreen| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | <kbd>⌘</kbd>+<kbd>⇧</kbd>+<kbd>F</kbd> |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs14/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs14/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs14" %}

## Custom key config

You can able to customize the key config for the keyboard interaction of Rich Text Editor, using [`keyConfig`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#keyconfig) property.

In the below sample, you have customize the bold, italic, underline toolbar action with ctrl+alt+b, ctrl+alt+i and ctrl+alt+u respectively.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/getting-started-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/getting-started-cs15" %}
