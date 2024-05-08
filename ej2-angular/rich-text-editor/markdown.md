---
layout: post
title: Markdown in Angular Rich text editor component | Syncfusion
description: Learn here all about Markdown in Syncfusion Angular Rich text editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Markdown 
documentation: ug
domainurl: ##DomainURL##
---

# Markdown in Angular Rich text editor component

When you format the word in Markdown format, you should add Markdown syntax to the word to indicate the words and phrases that looks different from each other.

Rich Text Editor supports markdown editing when the [`editorMode`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode) set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text.

To use quick Markdown editing feature, inject `MarkdownEditorService` in the provider section of `AppModule`.

To build a markdown editor using the Angular Rich Text Editor, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=6fly8220gL8" %}

## Supported Commands

The Angular Markdown editor supports the following commands to format the markdown content:

|Commands|Syntax| Description |
|--------|------------------------------------------|------------|
| Bold | Sample content for `**`bold text`**`. | For bold, add `**` or `__` to front and back of the text. | For order list, precede each line with a number. |
| Italic | Sample content for `*`Italic text`*`. | For Italic, add `*` or `_` to front and back of the text. |
| Bold and Italics | Sample content for `***`bold and Italic text`***`. | For bold and Italics, add `***` to the front and back of the text. |
| Heading 1 | `#` Heading 1 content | For heading 1, add `#` to start of the line. |
| Heading 2 | `##` Heading 2 content | For heading 2, add `##` to start of the line. |
| Heading 3 | `###` Heading 3 content | For heading 3, add `###` to start of the line. |
| Heading 4 | `####` Heading 4 content | For heading 4, add `####` to start of the line. |
| Heading 5 | `#####` Heading 5 content | For heading 5, add `#####` to start of the line. |
| Heading 6 | `######` Heading 6 content | For heading 6, add `######` to start of the line. |
| Line Break | First line `<br>`Second line | For line break, press enter two times (or) add `<br>` in between the first and the second line. |
| Blockquotes | `>` Blockquotes text | For blockquotes, add `>` to start of the line. |
| Strike Through | Sample content for `~~`strike through text`~~`. | For strike through, add `~~` to front and back of the text. |
| Code (Single line) | \`Single line code\` | For single line code, add \` to front and back of the text. |
| Code block (Multi Line) | \`\`\`<br>Multi line code text<br>Multi line code text<br>\`\`\` | For multiple line code, add \`\`\` in the new line before and after the content. |
| Subscript | `<sub>`Subscript text`</sub>` | For subscript, add `<sub>` to the front and `</sub>` to the back of the text. |
| Superscript | `<sup>`Superscript text`</sup>` | For superscript, add `<sup>` to the front and `</sup>` to the back of the text. |
| Ordered List | `1.` First<br>`1.` Second | For ordered list, preceding one or more lines of text with `1.` |
| Unordered List | `*` First<br> `*` second | For unordered list, preceding one or more lines of text with `*`. |
| Links | **Link text without title text**<br>`[` Link text `](`URL`)`<br> **Link text with title text**<br>`[` Link text `](`URL , “title text”`)` | Create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL as first parameter and title as second parameter in the parentheses `()`.<br>**Note:** The title text is optional, if needed it can be given manually.|
| Table | `|` Heading 1 `|` Heading 2 `|`<br>`|---------|---------|`<br>`|` Col A1 `|` Col A2 `|`<br>`|` Col B1 `|` Col B2 `|` | Create a table using the pipes and underscores as given in the syntax to create 2 x 2 table. |
| Horizontal Line | `***` (three asterix in new line)<br>(or)<br>`___` (three underscores in new line) | For horizontal line, add `***` or `___` to the start of the new line. |
| Image | `![](`URL path`)` | Create an image by wrapping the image source in parentheses `()`. |
| Image with alternate text | `![` alternate text `](`URL path`)` | Create an image with alternate text by wrapping an alternative text in brackets `[]`, and then link of the image source in parentheses `()`.<br>**Note:** When inserting the image using toolbar, the alternate text cannot be provided that needs to be given manually. |
| Escape tick marks supported | Sample text content with `**`bold and `**`not bold`**` text can be in the same line.`**` | In the syntax, the whole content is made as bold where the content `not bold` can be made as normal text by adding the bold syntax to the start and end of the respective text. Likewise you can do the same for various inline commands. |
| Escape Character | `\(`any syntax`)` | Escape any markdown syntax by prefix `\` to the syntax.<br>Example:<br>`\**`Bold text`**`|
| HTML Entities | Copyright: &copy; - `&copy;` <br>Trade mark: &trade; - `&trade;`<br>Registered: &reg; - `&reg;`<br>Ampersand: &amp; - `&amp;`<br>Less than: &lt; - `&lt;`<br>Greater than: &gt; - `&gt;` | For HTML entities, add & and ; to the front and back of the respective entities. |

> The above listed commands alone are supported in Syncfusion Markdown editor. For other unsupported commands, you can achieve using the HTML tags in Markdown editor. The foot notes, definitions, math, and check list markdown syntax are also not supported.

## Markdown to HTML

The Rich Text Editor allows you to preview markdown changes immediately using preview. In this sample, the third-party library [`Marked`](https://marked.js.org/) is used to convert markdown into HTML content.

This sample demonstrates how to preview markdown changes in Rich Text Editor. Type or edit the display text, and apply format to view the preview of markdown. The [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#actioncomplete) event can be used to convert Markdown to HTML.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs1" %}

## Table

Rich Text Editor allows to insert Markdown table in edit panel with 2 X 2 rows and columns along with the heading.
To use table tool, add the `CreateTable` item in toolbar items.

### Insert table

To insert the table in Rich Text Editor's content area, click the insert table icon in the toolbar option.
Please refer the below sample and code snippets to add the table in Markdown editor

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs2" %}

### Changing table constants

The Markdown table constants can be changed for the table heading and the column names.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs3" %}

## Custom formation

The Rich Text Editor allows you to customize the markdown syntax by overriding its default syntax. Configure the customized markdown syntax using the [`formatter`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#formatter)property.

This sample demonstrates how to customize tags of markdown formatting.

For example, apply ‘+’ to Unordered list, apply ‘1., 2., 3.’ to Ordered list, for bold, ‘__’, and for italic ‘_’.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs4" %}