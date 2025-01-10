---
layout: post
title: Code Block Formatting | Syncfusion
description: Learn all about Code Formatting in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Code Block Formatting
documentation: ug
domainurl: ##DomainURL##
---

# Code Block Formatting in the Angular Rich Text Editor Component

The Angular Rich Text Editor component offers a powerful feature to format text as preformatted code blocks, making it ideal for displaying programming snippets or structured contents.

### Enabling Code Block Formatting

To enable code block formatting, ensure that the Formats item is included in the toolbar items of your Rich Text Editor configuration.

Below are examples and code snippets demonstrating how to add and effectively use the code block formatting option in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/code-format-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/code-format-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/code-format-cs1" %}

### Applying Code Block Formatting

Follow these steps to format text as a code block:

1. Select the desired text in the editor.
2. Click on the `Formats` dropdown in the toolbar.
3. Choose `Preformatted` from the dropdown menu.

### Exiting Code Block Format

To exit the code block format:

1. Place the cursor at the end of your code block content.
2. Press the Enter key twice.

This action will move the cursor out of the code block and return to normal text formatting.

## Enhancing Code Block Appearance

To make your code blocks more visually appealing, you can add custom styling. Here's an example of how to style your `<pre>` tag:

```typescript
<style>

.e-richtexteditor .e-rte-content .e-content pre{
                background-color: #f4f4f4; color: #333; font-family: 'Courier New', Courier, monospace; font-size: 14px; padding: 15px; border-radius: 5px; border: 1px solid #ccc; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;
            }

</style>

```

This styling adds a light gray background, sets a monospace font, and includes padding and borders for better visual separation.

## See Also

* [How to customize the format dropdown items](./headings.md/#customizing-format-dropdown-items)