---
layout: post
title: Markdown in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Markdown in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Markdown 
documentation: ug
domainurl: ##DomainURL##
---

# Markdown in the Angular Rich Text Editor component

When you format the word in Markdown format, you should add Markdown syntax to the word to indicate the words and phrases that look different from each other.

The Rich Text Editor supports Markdown editing when the ['editorMode'](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode) is set to markdown. You can apply formatting to text using both keyboard interactions and toolbar actions.

To enable the quick Markdown editing feature, inject MarkdownEditorService in the provider section of AppComponent.

Refer to the video below for guidance on building a Markdown editor with the Angular Rich Text Editor.

{% youtube "https://www.youtube.com/watch?v=6fly8220gL8" %}

## Markdown Basic Formatting

The Angular Markdown editor supports various commands to format markdown content. Below are the supported commands and their usage:

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
| Links | **Link text without title text**<br>`[` Link text `](`URL`)`<br> **Link text with title text**<br>`[` Link text `](`URL , "title text"`)` | Create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL as first parameter and title as second parameter in the parentheses `()`.<br>**Note:** The title text is optional, if needed it can be given manually.|
| Table | `| Heading 1 | Heading 2 |<br>|---------|---------|<br>| Col A1 | Col A2 |<br>| Col B1 | Col B2 |` | Create a table using the pipes and underscores as given in the syntax to create 2 x 2 table. |
| Horizontal Line | `***` (three asterix in new line)<br>(or)<br>`___` (three underscores in new line) | For horizontal line, add `***` or `___` to the start of the new line. |
| Image | `![alt text](`URL path`)` | Create an image by wrapping the image source in parentheses `()`. |
| Image with alternate text | `![alt text](`URL path`)` | Create an image with alternate text by wrapping an alternative text in brackets `[]`, and then link of the image source in parentheses `()`.<br>**Note:** When inserting the image using toolbar, the alternate text cannot be provided that needs to be given manually. |
| Escape tick marks supported | Sample text content with `**`bold and `**`not bold`**` text can be in the same line.`**` | In the syntax, the whole content is made as bold where the content `not bold` can be made as normal text by adding the bold syntax to the start and end of the respective text. Likewise you can do the same for various inline commands. |
| Escape Character | `\(`any syntax`)` | Escape any markdown syntax by prefix `\` to the syntax.<br>Example:<br>`\**`Bold text`**`|
| HTML Entities | Copyright: &copy; - `&copy;` <br>Trade mark: &trade; - `&trade;`<br>Registered: &reg; - `&reg;`<br>Ampersand: &amp; - `&amp;`<br>Less than: &lt; - `&lt;`<br>Greater than: &gt; - `&gt;` | For HTML entities, add & and ; to the front and back of the respective entities. |

> The above listed commands are the only ones supported in the Syncfusion Markdown editor. For other commands, use HTML tags within the Markdown editor. Additionally, footnotes, definitions, math, and checklist Markdown syntax are not supported.

## Insert table

Add the `CreateTable` item to the toolbar items to use the table tool.

To insert a table in the Markdown editor, click the `insert table` icon in the toolbar. By default, the inserted Markdown table includes 2 rows and 2 columns, along with a heading.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs2" %}

## Insert image

Add the `Image` item to the toolbar to enable the image tool.

To insert an image in the Markdown editor, follow these steps:

  1. Click the `Insert Image` icon in the toolbar.
  2. Browse and select an image from your local machine by clicking the browse button, or enter an image link from an online source.
  3. Click the Insert button in the image dialog.
The selected image will be added to the editor area.

Please refer to the sample and code snippets below to add the image in the Markdown editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs3" %}

## Insert link

To use a link, add the `CreateLink` item to the toolbar items. 

To create a link for a text or an image in the Markdown editor, follow these steps:

  1. Click the `Insert` icon in the link dialog.
  2. Enter the link and other relevant information.
  3. Click the **Insert** button to add the link to the editor area.
The link will be added to the editor area.

Please refer to the sample and code snippets below to add the link in the Markdown editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs5" %}

## Custom format

The Rich Text Editor allows you to customize the markdown syntax by overriding its default syntax. Configure the customized markdown syntax using the [`formatter`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#formatter)property.

This example demonstrates how to customize tags in Markdown formatting.

For example, use '+' for unordered lists, '1., 2., 3.' for ordered lists, '__ 'for bold text, and '_' for italic text.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs4" %}

## Markdown to HTML

The Rich Text Editor provides an instant preview of Markdown changes. Type or edit the text and apply formatting to view the Markdown preview.

This example demonstrates how to preview Markdown changes in the Rich Text Editor. The third-party library [`Marked`](https://marked.js.org/) is used to convert Markdown into HTML content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/rich-text-editor/markdown-cs1" %}

## See also

* [How to render the toolbar in inline mode](./inline-editing)
* [How to render the iframe](./iframe)
* [How to add the Rich Text Editor component](./getting-started/#adding-rich-text-editor-component)
