---
layout: post
title: Editor mode in Angular Rich Text Editor component | Syncfusion
description: Learn here all about Editor mode in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Editor mode 
documentation: ug
domainurl: ##DomainURL##
---

# Editor Modes in Angular Rich Text Editor Component

The Rich Text Editor component allows you to create and edit content, returning it as either valid HTML or Markdown (MD). It supports the following two editing formats:

* HTML editor
* Markdown editor

## HTML editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

HTML editing is the default mode of the Rich Text Editor. In this mode, you can format content using the available toolbar commands, and the editor will return valid HTML markup. To explicitly set this mode, set the [editorMode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode) property as `HTML`.

>To use HTML editing feature, inject `HtmlEditorService` in the provider section.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/html-editor/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/html-editor/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/html-editor" %}

## Markdown editor

To create or edit content in Markdown format, set the [editorMode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/#editormode) property value as `Markdown`.

The third-party library such as `Marked` or any other library is used to convert markdown into HTML content.

* The Supported Tags are `h6`, `h5`, `h4`, `h3`, `h2`, `h1`, `blockquote`, `pre`, `p`, `ol`, `ul`.
* The Supported Selection Tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link` and `Table`.

For further details on Markdown editing, refer to the [Markdown](../../markdown-editor/getting-started)

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/markdown-editor/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/markdown-editor/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/markdown-editor" %}

## See also

* [Markdown Editor](https://ej2.syncfusion.com/angular/documentation/markdown-editor/getting-started)