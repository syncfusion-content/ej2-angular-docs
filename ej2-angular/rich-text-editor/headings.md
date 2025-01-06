---
layout: post
title: Headings in Angular Rich Text Editor component | Syncfusion
description: Learn all about Headings in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Headings
documentation: ug
domainurl: ##DomainURL##
---

# Headings in the Angular Rich Text Editor Component

The Angular Rich Text Editor component provides a feature to format text with various heading styles, such as Heading 1, Heading 2, Heading 3, and Heading 4. These headings allow for structuring content hierarchically, improving readability, and organizing information effectively.

### Using Heading Styles

To enable heading styles in your Rich Text Editor:

1. Ensure the `Formats` item is included in the toolbar configuration.
2. To apply a heading:
    * Select the desired text
    * Click the `Formats` dropdown in the toolbar
    * Choose the appropriate heading level (e.g., Heading 1, Heading 2)

This action will format the selected text with the chosen heading style, helping to create a clear document structure and emphasize important sections.

Below are examples and code snippets demonstrating how to integrate and utilize heading formatting options effectively in the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/headings-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/headings-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/headings-cs2" %}

## Customization of Format Dropdown Items

The Rich Text Editor allows you to customize the format dropdown to include specific styles such as heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, and paragraph.

To customize the format dropdown:

1. Define a `formats` array in your component configuration.
2. Specify each format option with a display name and corresponding value.

This customization enhances the editor’s functionality, enabling users to structure content with appropriate headings, improving readability and organization.

Below are examples demonstrating how to customize the format dropdown.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor/headings-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor/headings-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/rich-text-editor/headings-cs1" %}