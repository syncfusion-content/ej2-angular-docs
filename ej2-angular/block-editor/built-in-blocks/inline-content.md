---
layout: post
title: Inline Content in Angular Block Editor Component | Syncfusion
description: Checkout and learn about Inline Content with Angular Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Inline Content in Angular Block Editor component

In the Syncfusion Block Editor, all content is organized within blocks. Each block contains an array of [content](../api/blockeditor/blockModel#content) property that define the text and functionality within that block.

Each [contentModel](../api/blockeditor/contentModel) is an object with properties such as [id](../api/blockeditor/contentModel#id), [contentType](../api/blockeditor/contentModel#contentType), [content](../api/blockeditor/contentModel#content), and [properties](../api/blockeditor/contentModel#properties), allowing for granular control over its appearance and behavior.

## Setting content type

The Block Editor supports several inline content types through the `ContentType` enum, which can be set using the [contentType](../api/blockeditor/contentModel#contentType) property.

| Built-in Content Type | Description                    |
| ----------------------- | ------------------------------ |
| Text                    | Represents plain text content. |
| Link                    | Represents a hyperlink.        |
| Mention                 | Represents a user mention.     |
| Label                   | Represents a label or tag.     |

By default, the content type is `Text`.

## Configure text content

To configure text content, set the `contentType` property to `Text`. This is the default content type if none is specified.

### ContentType 

```typescript
// Adding inline text
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Text',
            content: 'Inline Text'
        }
    ]
}
```

## Configure hyperlink

To create a hyperlink, set the `contentType` property to `Link`. You can configure the link's URL using the `properties` property.

### Configure link properties

Link settings control the behavior and properties of hyperlinks in your content. You can configure link settings using the [properties](../api/blockeditor/contentModel#properties) property.

Link settings accepts the following options:

| Option                     | Description                                                       | Default Value |
| -------------------------  | ----------------------------------------------------------------- | ------------- |
|[url](../api/blockeditor/linkSettingsModel#url)| Specifies the destination URL of the link.     | `''`          |

### ContentType & Properties

```typescript
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Link',
            content: 'hyperlinks',
            properties: {
                url: 'https://ej2.syncfusion.com/documentation',
            }
        }
    ]
}
```

## Configure Label

To render labels, set the [contentType](../api/blockeditor/contentModel#contentType) property to `Label`. The `properties` property allows you to specify which label to display.

### Built-in items

The Block Editor comes with offers different built-in options. These include:

-   **Progress**: In-progress, On-hold, Done
-   **Priority**: High, Medium, Low

### Customize label

You can customize the labels by using the `properties` property along with contentType `Label`.

### ContentType & Properties

```typescript
// Adding inline label
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Label',
            properties: { labelId: 'progress' }
        }
    ]
}
```

### Trigger Character configuration

Use the [triggerChar](../api/blockeditor/labelSettingsModel#triggerchar) property to define the character that opens the label suggestions popup. The default trigger character is `$`.

### Label items configuration

Define the labels using the [items](../api/blockeditor/labelSettingsModel#items) array. When a user types the trigger character, a popup will show the given items.

Each item in the [items](../api/blockeditor/labelSettingsModel#items) array supports the following properties:

| Property                                          | Description                                         |
| --------------------------------------------------| --------------------------------------------------- |
| [id](../api/blockeditor/labelItemModel#id)                   | A unique identifier for the label.                  |
| [text](../api/blockeditor/labelItemModel#text)               | The display text for the label.                     |
| [groupBy](../api/blockeditor/labelItemModel#groupBy)         | The category name for grouping similar labels.      |
| [labelColor](../api/blockeditor/labelItemModel#labelcolor)   | The background color of the label.                  |
| [iconCss](../api/blockeditor/labelItemModel#iconcss)         | A CSS class for an icon to display with the label.  |


When users type the trigger character followed by text, a popup will appear showing matching label items from which they can select. The selected label will be inserted into the content as a Label content item.

### Using labels with group headers

Labels with the same [groupBy](../api/blockeditor/labelItemModel#groupBy) value will be grouped together in the label selection popup:

The below sample demonstrates the customization of labels in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/label-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/label-settings/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/label-settings/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/label-settings" %}

## Configure mention

Mentions are references to users or entities that can be inserted into your content. You can configure mention content by setting the `contentType` property to `Mention`.

Mentions are typically triggered by the `@` character and are linked to the [users](../api/blockeditor#users) collection defined in the Block Editor.

### ContentType

```typescript
// Adding inline code
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Mention',
            properties: { userId: 'user1' }
        }
    ]
}
```

The sample below demonstrates how to configure mentions and other content types.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/content-types/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/content-types/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/content-types/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/content-types" %}

## Applying Inline Styles

The Block Editor allows you to apply rich formatting to block contents using the [styles](../api/blockeditor/contentModel#styles) property.

The `styles` property supports the following options:

| Style Property                                     | Description                                | Default Value |
| -------------------------------------------------  | ------------------------------------------ | ------------- |
| [bold](../api/blockeditor/styleModel#bold)                         | Makes the text bold.                       | `false`       |
| [italic](../api/blockeditor/styleModel#italic)                     | Makes the text italicized.                 | `false`       |
| [underline](../api/blockeditor/styleModel#underline)               | Adds an underline to the text.             | `false`       |
| [strikethrough](../api/blockeditor/styleModel#strikethrough)       | Adds a line through the text.              | `false`       |
| [color](../api/blockeditor/styleModel#color)                       | Sets the text color (HEX or RGBA format).  | `''`          |
| [backgroundColor](../api/blockeditor/styleModel#backgroundColor)   | Sets the background color for the text.    | `''`          |
| [superscript](../api/blockeditor/styleModel#superscript)           | Renders the text as superscript.           | `false`       |
| [subscript](../api/blockeditor/styleModel#subscript)               | Renders the text as subscript.             | `false`       |
| [uppercase](../api/blockeditor/styleModel#uppercase)               | Converts the text to uppercase.            | `false`       |
| [lowercase](../api/blockeditor/styleModel#lowercase)               | Converts the text to lowercase.            | `false`       |
| [inlineCode](../api/blockeditor/styleModel#inlineCode)             | Converts the text to InlineCode.           | `false`          |

You can apply one or more of these styles to any supported content element for rich text formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/block-editor/blocks/content-styles/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/block-editor/blocks/content-styles/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/block-editor/blocks/content-styles/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/block-editor/blocks/content-styles" %}