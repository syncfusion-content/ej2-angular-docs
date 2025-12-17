---
layout: post
title: Blocks in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Blocks with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Blocks in Angular Block Editor component

The Syncfusion Block Editor uses **blocks** as the fundamental units for creating and managing content. The entire editor content is structured as a collection of these blocks, which are configured and managed through the [blocks](../api/blockeditor#blocks) property.

## Blocks

Blocks are the core building elements of the editor, where each block represents a distinct content unit, such as a `Paragraph`, `Heading`, `List`, or specialized content like a `Code Snippet` or `Image`. This block-based architecture makes it easy for users to rearrange, format, and manage discrete pieces of content independently.

You can configure blocks with various properties such as [id](../api/blockeditor/blockModel#id), [blockType](../api/blockeditor/blockModel#blockType), [content](../api/blockeditor/blockModel#content) to create a rich and structured editor.

## Block types

The Block Editor supports multiple block types, each offering different formatting options and functionality:

| Built-in Block Types                    | Description                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------|
| Paragraph                               | Default block type for regular text content.                                |
| Heading1 to Heading4                    | Different levels of headings for document structure.                        |
| Table                                   | Block for displaying data in a tabular format with rows and columns.        |
| Checklist                               | Interactive to-do lists with checkable items.                               |
| BulletList                              | Unordered lists with bullet points.                                         |
| NumberedList                            | Ordered lists with sequential numbering.                                    |
| Code                                    | Formatted code blocks with syntax highlighting.                             |
| Quote                                   | Styled block for quotations.                                                |
| Callout                                 | Highlighted block for important information.                                |
| Divider                                 | Horizontal separator line.                                                  |
| CollapsibleParagraph and CollapsibleHeading1-4    | Content blocks that can be expanded or collapsed to show or hide their children. |
| Image                                   | Block for displaying images.                                                |
| Template                                | Renders custom content using predefined templates, allowing for user-defined block structures. |

## Configure indent

You can specify the indentation level of a block using the [indent](../api/blockeditor/blockModel#indent) property. This property accepts a numeric value that determines how deeply a block is nested from the left margin.

By default, the [indent](../api/blockeditor/blockModel#indent) property is set to `0`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/indent/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/indent/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/indent/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/indent" %}

## Configure CSS Class

You can apply custom styling to individual blocks using the [cssClass](../api/blockeditor/blockModel#cssclass) property. This property accepts a string containing one or more CSS class names.

Custom CSS classes allow you to define specialized styling for specific blocks in your editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/cssClass/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/cssClass/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/cssClass/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/block-editor/blocks/cssClass/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/cssClass" %}

## Configure templates

The Block Editor allows you to use custom templates for specialized content using the [template](../api/blockeditor/blockModel#template) property. Templates can be defined as strings, functions, or HTML elements.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/block-editor/blocks/block-types/template-block/src/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/samples/block-editor/blocks/block-types/template-block" %}